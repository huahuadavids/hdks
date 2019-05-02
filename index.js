/**
 *@author zhangyuhua
 */
const math = require("./math")
const string = require("./string")

const utils = {
  ...math,
  ...string
}

console.log(utils.toRMB(19773))
console.log(utils.add(20.2, 2))

module.exports = utils

