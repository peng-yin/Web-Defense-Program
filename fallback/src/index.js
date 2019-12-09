import render from "./render";
import { request } from "./request";
import App from "./App";

request(data => {
  render(App, { data });
});
