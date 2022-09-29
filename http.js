const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  }
  if (req.url === "/about") {
    res.end("welcome to about page");
  }
  res.end(
    `<h1>Opps!</h1>
    <a href="/"> back </a>`
  );
});
server.listen(5000);
