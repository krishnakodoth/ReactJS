// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { readData, writeData } from "@/utils/dataHandler";
import { Todos } from "../../../shared/Types";

type Data = {
  name?: string;
  message?: string;
  data?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req?.method;
  const todoId = req.query?.id;

  if (method === "DELETE") {
    // Process a DELETE request
    const fileContents = await readData("todo.json");
    const todoList = JSON.parse(fileContents);
    const updatedTodoList = todoList.filter(
      (todo: Todos) => todo.id.toString() !== todoId
    );
    writeData("todo.json", JSON.stringify(updatedTodoList));

    res.send({
      message: "Todo deleted successfully",
    });
  } else {
    res.send({ message: "Invalid request" });
  }

  /* console.log(method);
  if (method === "POST") {
    // Process a POST request
    res.send({ message: "POST Method.." });
  } else {
    // Handle any other HTTP method

    // Handle GET all todos
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), `/src/data`);
    //Read the json data file data.json
    const fileContents = await fs.readFile(
      jsonDirectory + "/todo.json",
      "utf8"
    );
    let todoList =
      fileContents.trim().length === 0 ? [] : JSON.parse(fileContents);
    if (todoList.length === 0) {
      // If todo content is empty , then load from - https://jsonplaceholder.typicode.com/todos
      const resData = await fetch("https://jsonplaceholder.typicode.com/todos");
      const jsonRes = await resData.json();
      const fileWriteHs = await fs.writeFile(
        jsonDirectory + "/todo.json",
        JSON.stringify(jsonRes)
      );
      todoList = JSON.stringify(jsonRes);
    }
    //Return the content of the data file in json format
    // res.status(200).json(fileContents);
    res.status(200).json(todoList); 
  }
  */
}
