var i2c = require('i2c');
var address = 0x30;
console.log("set address");
var wire = new i2c(address, {device: '/dev/i2c-1'}); 
console.log("init wire");

wire.scan(function(err, data) {
  // result contains an array of addresses
  console.log(data);
});

wire.on('data', function(data) {
  // result for continuous stream contains data buffer, address, length, timestamp
  console.log(data)
});

wire.stream(0, 0x20, 500); // continuous stream, delay in ms

