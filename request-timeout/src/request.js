import render from "./render";
import PageError from "./PageError";

async function baseRequest(url, options) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return fetch(url, options);
}

export default async function request(url, options = {}, callback) {
  const { timeout, ...restOptions } = options;

  try {
    const response = await Promise.race([
      baseRequest(url, restOptions),
      timeoutFn(timeout)
    ]);
    const { data } = await response.json();
    callback(data);
  } catch (error) {
    render(PageError, {
      key: Math.random(),
      onFetch() {
        request(url, { ...options, timeout: timeout + 200 }, callback);
      },
      children: "请求超时，点击重试"
    });
    throw error;
  }
}

function timeoutFn(ms = 3000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error("timeout"));
    }, ms);
  });
}
