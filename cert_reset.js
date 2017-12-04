var exec = require('child_process').exec;
var fs = require("fs");

// cd /root/proxy/letsencrypt && ./letsencrypt-auto certonly --manual --email info@get-hey.com -d get-hey.com -d www.get-hey.com -d widget.get-hey.com -d admin.get-hey.com -d get-hey.com -d www.get-hey.com -d widget.get-hey.com -d admin.get-hey.com

// construct bash cmd
// console.log("\n *START* \n");
var _content = fs.readFileSync("config.json");
var content = JSON.parse(_content);
console.log("Output Content : \n"+ content.name);

var _cmd = "cd "+content.path+" && sudo ./letsencrypt-auto certonly --manual --email "+content.email;

for (var _e in content.domains){
	_cmd += (" -d " + content.domains[_e]);
}
// console.log("\n # OUTPUT :", _cmd);


// run bash cmd
dir = exec(_cmd, function(err, stdout, stderr) {
  if (err) {
    // should have err.code here?
  }
  console.log(stdout);
});

dir.on('exit', function (code) {
  // exit code is code
});