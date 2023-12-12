const fs = require('fs');

const requestHandler = (req,res) => {

    const url = req.url;
const method = req.method;
const body = [];

    if(url === '/'){

        fs.readFile('message.txt' , {encoding : "utf-8"} , (err,Data) =>{
          if(err){
            console.log(err);
          }
          console.log(`data from file` + ' ' +Data);
          res.write('<html');
          res.write('<head><title>Enter message</title></head>');
          res.write(`<body>${Data}</body>`);
          res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        
       
        res.write('<html>');  
        
        return res.end();
      });
       }else if(url === '/message' && method === 'POST'){
      
         req.on('data', (chunk) =>{
          console.log(chunk);
          body.push(chunk);
         });
         return req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split('=')[1];
                fs.writeFile('message.txt', message , (err) => {
                  if(err){
                    console.log(err);
                  }
      
                   console.log('indise fs.writefile');
                  res.statusCode = 302;
                  res.setHeader('Location','/');
                  return res.end();
                }); 
          });
        }
       else{
           res.setHeader('Content-Type', 'text/html');
           res.write('<html>');
           res.write('<head><title>My first Page </title></head>');
           res.write('<body><h1>Welcome home </h1></body>');
           res.write('<html>');
      
        }

}

// module.exports = requestHandler; 

// module.exports = {
//     handler : requestHandler,
//     sometext : 'some Hard Coded Text'
// };

module.exports.handler = requestHandler;
module.exports.sometext = 'some Hard Coded Text';


