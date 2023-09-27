// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { readData, writeData } from "@/utils/dataHandler";

type Data = {
  name?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req?.method;
  if (method === "POST") {
    // Process a POST request
    const newTodo = JSON.parse(req.body);
    const fileContents = await readData("todo.json");
    const todoList = JSON.parse(fileContents);
    todoList.push(newTodo);
    writeData("todo.json", JSON.stringify(todoList));
    res.send({ message: "Todo has been added !" });
  } else if (method === "GET") {
    // Handle any other HTTP method

    // Handle GET all todos
    //Find the absolute path of the json directory
    // const jsonDirectory = path.join(process.cwd(), `/src/data`);
    //Read the json data file data.json
    /* const fileContents = await fs.readFile(
      jsonDirectory + "/todo.json",
      "utf8"
    ); */

    const fileContents = await readData("todo.json");
    let todoList =
      fileContents.trim().length === 0 ? [] : JSON.parse(fileContents);
    if (todoList.length === 0) {
      // If todo content is empty , then load from - https://jsonplaceholder.typicode.com/todos
      const resData = await fetch("https://jsonplaceholder.typicode.com/todos");
      const jsonRes = await resData.json();
      todoList = JSON.stringify(jsonRes);
      const fileWriteHs = await writeData("todo.json", todoList);
    }
    //Return the content of the data file in json format
    // res.status(200).json(fileContents);
    res.status(200).json(todoList);
  } else {
    res.send({ message: "Invalid request" });
  }
}
