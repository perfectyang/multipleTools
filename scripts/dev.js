import esbuild from "esbuild";
import minimist from "minimist";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
// node 中 的 命令 函 参数 通过 process 来 获取 process.argv
const args = minimist(process.argv.slice(2));
const __filename = fileURLToPath(import.meta.url); // 获取 文件 的 绝对 路 径 file: -> /usr
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const target = args._[0] || "reactivity"; // 打包 哪个 项 目
const format = args.f || "iife"; // 打包 后 的 模块 化 规范
// console.log(target, format);


// 入 口 文件
const entry = resolve(__dirname, `../packages/${target}/src/index.ts`);
const pkg = require(`../packages/${target}/package.json`);

console.log("entryl", entry);

esbuild
  .context({
    entryPoints: [entry],
    outfile: resolve(__dirname, `../packages/${target}/dist/${target}.js`),
    bundle: true,
    sourcemap: true,
    format,
    platform: "browser",
    globalName: pkg.buildOptions?.name,
  })
  .then((ctx) => {
    console.log("start dev");
    return ctx.watch();
  });
