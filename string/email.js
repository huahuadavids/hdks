/**
 *@author zhangyuhua
 *@DATE 2019-05-02 18:18
 */

const email = str => {
  const result = str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
  if (result == null) return false;
  return true;
}

module.exports = email;