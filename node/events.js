const Event = require('events').EventEmitter;

let ev = new Event();

ev.on('msg',function(a,b,c){
  console.log('收到了msg事件：',a,b,c);
});

ev.emit('msg',12,5,88);

// function msg(a,b,c){
//
// }
