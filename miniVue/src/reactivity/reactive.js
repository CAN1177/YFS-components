export function reactive(target) {
  if (typeof target !== "object") {
    console.error("reactive ${target} 必须是一个对象");
    return target;
  }
  // reactive 是通过 ES6 中的 Proxy 特性实现的属性拦截
  return new Proxy(target, mutableHandlers);
}
