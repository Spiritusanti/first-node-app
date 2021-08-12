const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<body><h1>Welcome! Add you username below!</h1>");
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username'/><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<body><h1>Current Users</h1>");
    res.write(
      "<ul><li>User 1</li><li>user 2 </li><li>user 3 </li><li>user 4 </li><li>user 5 </li></body>"
    );
    res.write("</html>");
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      return res.end();
    });
  }
  res.write("<html>");
  res.write("<head><title>Assigment 1</title></head>");
  res.write("<body><h1>Hello from my NodeJS app</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
