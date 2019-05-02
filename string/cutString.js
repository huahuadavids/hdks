/**
 *@author zhangyuhua
 *@DATE 2019-05-02 18:16
 */

const cutstr  = len => {
  let restr = this;
  let wlength = this.replace(/[^\x00-\xff]/g, "**").length;
  if (wlength > len) {
    for (let k = len / 2; k < this.length; k++) {
      if (this.substr(0, k).replace(/[^\x00-\xff]/g, "**").length >= len) {
        restr = this.substr(0, k) + "...";
        break;
      }
    }
  }
  return restr;
}

module.exports = cutstr;