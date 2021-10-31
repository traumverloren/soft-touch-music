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
  console.log(data.data)
});

// choose 32 as length cuz it was highest # that didn't error
// choose 0 as command cuz not sending a command, just want to read and arbitarily chose 0
wire.stream(0, 32, 500); // setup i2c stream: command = 0???, length=32???, delay=500ms

