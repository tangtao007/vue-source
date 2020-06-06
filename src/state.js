export function initState(vm) {
  const opts = vm.$options;
  console.log(opts);

  // vue的数据来源　属性　方法　数据　计算属性　watch
  if (opts.props) {
    initProps(vm);
  }
}
