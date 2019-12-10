# Web-Defense-Program

### 前端防御性编程

一个页面在呈现给用户之前需要经过静态资源加载、后端接口请求和渲染这三个过程，我们要做的就是在各个过程中防御可能出现的异常情况，保持流畅的用户体验，同时还要应对来自外部的攻击。


1. 防网络

> 在页面内容呈现给用户之前，会一直保持loading动画的效果，避免因网络原因造成用户体验的中断。

2. 防接口

> 静态资源加载完成之后，我们开始和后端进行通信获取页面数据，首先我们需要处理以下几种可能异常的情况。

- 2.1 超时

一个网页从访问到呈现出来，用户能容忍的等待时间大概是3~5s，在除去静态资源加载的时间大概1~2s左右，接口请求应该在3s内返回结果。

如果碰到用户网络较差，而我们又没有设置接口超时，页面会一直处于loading的状态，用户得不到有效的反馈会直接离开。所以我们需要设置合理的超时时间，并在触发超时的情况下给予用户反馈。

- 2.2 错误处理

通用错误处理: 拿到请求的结果之后，首先我们把网络相关的错误处理掉

业务错误处理: 接下来再处理后端正常返回的业务错误，先和后端约定下返回的数据结构

- 2.3 请求取消

组件unmount的时候取消请求

3. 防渲染

- 3.1 异常处理

- 3.2 可降级

- 3.3 防重处理：

> 按钮防重

```
function App() {
  const [applying, setApplying] = useState(false);
  const handleSubmit = async () => {
    if (applying) return;
    setApplying(true);
    try {
      await request();
    } catch (error) {
      setApplying(false);
    }
  };
  return (
    <div className='App'>
      <button onClick={handleSubmit}>
        {applying ? '提交中...' : '提交'}
      </button>
    </div>
  );
}

```

好处是不影响用户对整体页面的操作，坏处是需要页面管理状态。

> 全局防重

进行页面的整体遮盖，例如：

```
function request(url) {
  Loading.show('请求中...');
  try {
    await fetch(url);
  } catch (error) {
    // show error
  } finally {
    Loading.hide();
  }
}
function App() {
  const handleSubmit = () => {
    request();
  };
  return (
    <div className='App'>
      <button onClick={handleSubmit}>提交</button>
    </div>
  );
}

```

好处是不用页面管理自己的状态，坏处是提示比较重，会阻塞用户其它操作。

4. 防攻击

xss、csrf

