const program = require('commander');

import calc from "./calc";

program
.version('0.0.1')
.description('Command Line Node Calculator')

program
.command("calc <action> <left> <right>")
.alias('c')
.description('Multiply two numbers')
.action((action, left, right) => console.log(calc.performCalculation(action, left, right)))

program.parse(process.argv)

