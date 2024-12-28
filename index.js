#!/usr/bin/env node

import path from "node:path";
import * as url from "node:url";
import { execSync } from "node:child_process";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const AVAILABLE_OPTIONS = {
  dev: { alias: "p", describe: "generated path" },
};

yargs(hideBin(process.argv))
  .scriptName("[script-name]")

  .command("$0", "[command-name]", AVAILABLE_OPTIONS, (argv) => {
    console.log("argv", argv.dev);
  })

  .epilog("[epilog]")

  .strictOptions()

  .parse();
