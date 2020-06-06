import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";
export default {
  input: "./src/index.js", // 入口文件
  output: {
    file: "./dist/umd/vue.js", // 编译之后的路径文件名
    name: "Vue", // 指定打包后全局变量的名字
    format: "umd", //统一模块规范
    sourcemap: true, // es6 -> es5 开启源码调试，可以找到源代码的位置
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    process.env.ENV === "dev"
      ? serve({
          open: true,
          openPage: "index.html",
          port: 3000,
          contentBase: "./public/",
        })
      : null,
  ],
};
