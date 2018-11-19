const http = require('http');

let server = http.createServer((req,res)=>{
  let str = '';              //?


  res.on('data',data=>{
    str+=data;
  });
  res.on('end',()=>{
    console.log(str);
  });

  res.end();
});

server.listen(8080);
