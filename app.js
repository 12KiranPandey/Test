const http=require("http");
const server = http.createServer((req, res) => {
    res.end("server is running");
  }).listen(3007);

  console.log("Hello");
  console.log("Hello1");