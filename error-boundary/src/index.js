import render from "./render";
import request from "./request";
import App from "./App";

request(
  "https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312",
  {},
  data => {
    render(App, { data });
  }
);
