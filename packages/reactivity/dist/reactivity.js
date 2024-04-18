// packages/shared/src/index.ts
var isObject = (value) => {
  return typeof value === "object" && value !== null;
};

// packages/reactivity/src/effect.ts
var effect = () => {
  console.log("aaaa2222a", isObject({}));
};
var run = () => {
  console.log("\u5927\u5E05\u54E5\u6CA1\u51FA\u6765");
};

// packages/reactivity/src/reactive.ts
var reactive = (ob) => {
  console.log("ob", ob);
};
export {
  effect,
  reactive,
  run
};
//# sourceMappingURL=reactivity.js.map
