# 打包主要流程
1. 读取入口文件里面的内容
2. 分析入口文件，递归的读取模块所依赖的文件内容，生成AST语法树
3. 根据AST语法树，生成浏览器能够运行的代码


# 具体细节
1. 获取主模块内容
2. 分析模块
    - 如何转AST (@babel/parser)
    - 依赖收集 (@babel/traverse)
    - es6 转 es5 (@babel/core  @babel/preset-env)

3. 处理模块里面的内容
4. 递归所有的模块
5. 注意两个关键字 require  exports
6. 生成最终代码