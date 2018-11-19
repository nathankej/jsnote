const http= require('http');

// let server=http.createServer((req,res)=>{
//   //request
//
//   //response
//   res.write('aaa');
//   res.end();
// });
// //listen
// server.listen(8080);
let server= http.createServer((req,res)=>{
  res.write('abc');
  res.end();
})
server.listen(8080);
