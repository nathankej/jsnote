const crypto = require('crypto');

//function md5(str){
  let obj = crypto.createHash('md5');
  obj.update('123');
  obj.update('4');
  obj.update('56');

  console.log(obj.digest('hex'));
  //return obj.digest('hex');
//}

//console.log(md5(123456));
