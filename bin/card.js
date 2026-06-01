#!/usr/bin/env node



const fs = require("fs")
const path = require("path")
const clear = require("clear")
const output = fs.readFileSync(path.join(__dirname, "output"), "utf8")

clear()

console.log(output)
