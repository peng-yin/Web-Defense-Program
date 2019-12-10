import render from "./render";
import request from "./request";
import App from "./App";

(async () => {
  const data = await request();
  render(App, { data });
})();
