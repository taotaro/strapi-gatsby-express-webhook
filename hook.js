const spawn = require('child_process').spawn;
const express = require('express');
const router = express.Router();

router.post("/", async (req, res) => {
var child = spawn('cd /home/taotaro-blog/frontend && yarn build', {
  shell: true
});
child.stderr.on('data', function (data) {
  console.error("STDERR:", data.toString());
});
child.stdout.on('data', function (data) {
  console.log("STDOUT:", data.toString());
});
child.on('exit', function (exitCode) {
  console.log("Child exited with code: " + exitCode);
});
res.status(200)
});

module.exports = router;
