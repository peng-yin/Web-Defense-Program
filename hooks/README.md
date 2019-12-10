# 学习三问

1. 什么是XX

2. 为什么需要xx, xx的好处

3. 怎么使用


# 什么是hooks

官网： Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

概述：Hook 是一个特殊的函数，它可以让你 “钩入” React 的特性，包括state、生命周期等。例如，useState 是允许你在 React 函数组件中添加 state 的 Hook。

# React为什么需要Hook呢

- 1. 在组件间复用状态逻辑很难

```
在原本的代码中，我们经常使用高阶组件(HOC)/render props等方式来复用组件的状态逻
辑，无疑增加了组件树层数及渲染，使得代码难以理解，而在 React Hook 中，这些功能都可
以通过强大的自定义的 Hook 来实现
```

- 2. 复杂组件变得难以理解

这里存在两种情况：

a. 同一块功能的代码逻辑被拆分在了不同的生命周期函数中

b. 一个生命周期中混杂了多个不相干的代码逻辑


```
二者均不利于我们维护和迭代。例如，组件常常在 componentDidMount 和 
componentDidUpdate 中获取数据。还有，在 componentDidMount 中设置事件监听，而
之后需在 componentWillUnmount 中清除等。同时在 componentDidMount 中也可能还有
其他的功能逻辑，导致不便于理解代码。通过 React Hook 可以将功能代码聚合，方便阅读维护
```

- 3. 其他便利好处

> 在 React 的世界中，有容器组件和 UI 组件之分，在 React Hooks 出现之前，UI组件我们可以使用函数，无状态组件来展示UI，而对于容器组件，函数组件就显得无能为力，我们依赖于类组件来获取数据，处理数据，并向下传递参数给UI组件进行渲染。

- 3.1
不用再考虑该使用无状态组件（Function）还是有状态组件（Class）而烦恼，使用hook后所有组件都将是Function
- 3.2 
不用再纠结使用哪个生命周期钩子函数
- 3.3
不需要再面对this


#  Effect Hook使用

Effect Hook 可以让你在函数组件中执行副作用操作，可以将其当作 componentDidMount ， componentDidUpdate 和 componentWillUnmount 
这三个函数的组合，根据是否需要清除副作用可分为两种。

(副作用操作包括：异步请求，设置订阅以及手动更改 React 组件中的 DOM 等)


# Hook 规则
1. 只能在最顶层使用 Hook
2. 不要在循环，条件或嵌套函数中调用 Hook
3. 只在 React 函数中调用 Hook

