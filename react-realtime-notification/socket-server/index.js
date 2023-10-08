import { Server } from "socket.io";
import http from "http";

const httpServer = http.createServer();
const io = new Server(/* {
    rejectUnauthorized: false,
    cors: {
      origin: "http://localhost:3000",
    },
  } */);
/* const io = new Server({ 
    allowEIO3: true,
    cors: {
        origin: true,
        credentials: true,
        methods:['GET','POST']
    },
    //reconnect: true,
    //cors: {
      //  origin: "http://localhost:3000",
        //methods: ["GET", "POST"],
        //allowedHeaders: ["my-custom-header"],
        //credentials: true
      //},
    //allowEIO3: true,
 }); */
/* console.log(io)
io.on("connection", (socket) => {
  console.log("Someone has connected");
  socket.on("disconnect",()=>{
      console.log("Someone has left");
  })
});

io.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  }); */

io.listen(5000);