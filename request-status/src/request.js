import render from "./render";
import PageError from "./PageError";

const statusText = {
  401: "请重新登录",
  403: "没有操作权限",
  404: "请求不存在",
  500: "服务器异常"
};

export default async function request(url, options = {}, callback) {
  const { timeout, ...restOptions } = options;

  try {
    const response = await Promise.race([
      fetch(url, restOptions),
      timeoutFn(timeout)
    ]);
    const { status } = response;
    if (status === 200) {
      const { success, data, errorMsg } = await response.json();
      if (success) {
        callback(data);
        return;
      }
      render(PageError, { children: errorMsg });
    } else {
      render(PageError, { children: statusText[status] });
    }
  } catch (error) {
    if (error.message === "timeout") {
      render(PageError, {
        key: Math.random(),
        onFetch() {
          request(url, options, callback);
        },
        children: "请求超时，点击重试"
      });
    }
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
