const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  // Get Input Information
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  // Upload Dist Folder
  const s3Uri = `s3://${bucket}`;
  // you need env var AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);
  core.notice("Hello From Custom Javascript Action");
}

run();
