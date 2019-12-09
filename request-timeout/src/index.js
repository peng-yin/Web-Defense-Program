import render from "./render";
import request from "./request";
import App from "./App";

request(
  "https://cnodejs.org/api/v1/topics",
  {
    timeout: 2000
  },
  data => {
    render(App, { data });
  }
);
