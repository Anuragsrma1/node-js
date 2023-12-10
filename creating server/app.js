const http = require('http');

const server = http.createServer((req,res) => {
   console.log(req);
  console.log("Anurag");
});
server.listen(4000);
