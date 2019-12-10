import React, { useState, useEffect } from "react";

import "./styles.css";

let timer = null;

export default function App(props) {
  const { data } = props;
  // useState 有两个返回值分别为当前 state 及更新 state 的函数
  // 其中 count 和 setCount 分别与 this.state.count 和 this.setState 类似
  const [count, setCount] = useState(0)

  const [obj, setObject] = useState({
    count: 0,
    name: "yinpeng"
  });

  // 1. 不需要清除副作用
  // 相当于 componentDidMount 和 componentDidUpdate，在挂载和更新时均会执行第一个参数的函数
  useEffect(() => {
    document.title = `You clicked ${count} times`;// 使用浏览器的 API 更新页面标题
  }, [count]);// 第二个参数作用为仅在 [count] 更改时更新，需要注意的是该参数为一个数组，只要有一个元素变化即会执行 effect



  // 2. 需要清除副作用
  // 有时为了防止内存泄漏，需要清除一些副作用
  useEffect(() => {
    timer = setInterval(() => {
      setObject(prevCount => prevCount.count + 1);
    }, 1000);
    // 返回值可类比 componentWillUnmount，返回的是清除函数
    // 返回值(如果有)则在组件销毁或者调用第一个参数中的函数前调用（后者也可理解为执行当前 effect 之前对上一个对应的 effect 进行清除）
    return () => {
      document.title = "componentWillUnmount";
      clearInterval(timer);
    };
  }, []); // 空数组代表第二个参数不变，即仅在挂载和卸载时执行 

  return (
    <div className="App">
      <h1>Hello {data.name}</h1>
      <p>You clicked {count} times</p>
      <p>You clicked {obj.count} count</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => clearInterval(timer)}>Click me</button>
    </div>
  );
}
