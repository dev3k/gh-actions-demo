const core = import("@actions/core");
const github = import("@actions/github");
const exec = import("@actions/exec");

function run() {
  core.notice("Hello From Custom Javascript Action");
}

run();
