## 先在根目录下，安装pnpm install typescript esbuild minimist -D -w 安装到当前的根目录下

## 新建.npmrc 并写入shamefully-hoist=true 目的是将安装的依赖拍平

```
新建 pnpm-workspace.yaml
packages:
    - "packages/*"
```

## npx tsc init 安装typescript配置

```
在tsconfig.json 里面添加如下配置
"baseUrl": ".",
    "paths": {
      "@vue/*": ["packages/*/src"]
    }
```

## 新建packages/shared 和packages/reactivity 并配置好package.json

## pnpm install @vue/shared --filter @vue/reactivity --workspace

## 将当前packages/shared 安装到 @vue/reactivity, 作为@vue/reactivity的依赖, 要修改packages里面，指定的版本号 "@vue/shared": "workspace:\*"
