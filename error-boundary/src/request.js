export default function request(url, options = {}, callback) {
  // callback({ rest: { amount: "10" } }); // 正常返回
  callback({}); // 异常返回
}
