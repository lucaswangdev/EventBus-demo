# EventBus-demo

## Examples
```javascript
  const event = new EventBus();

  const callbackName = (value) => {
    console.log('callbackName run', value)
  }
  event.on("firstEvent", callbackName)
  event.emit("firstEvent", {name: "lucas"}); // callbackName run {name: 'lucas'}
```
## Other
参考：https://juejin.cn/post/7069047378258919460
