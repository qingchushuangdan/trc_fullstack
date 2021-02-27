# HTTP 请求由三部分构成
   1. 请求头
    - 请求头包含请求的附加信息，由关键字/值对组成，每行一对，关键字和值用英文冒号“:”分隔。
   2. 请求行(请求行包含请求方法、URL、协议版本)   例:(GET /images/logo.png HTTP/1.1)+
    - 请求方法包含 8 种：GET、POST、PUT、DELETE、PATCH、HEAD、OPTIONS、TRACE。
    - URL 即请求地址，由 <协议>：//<主机>：<端口>/<路径>?<参数> 组成
    - 协议版本即 http 版本号
   3. 实体
    - 请求体，可以承载多个请求参数的数据，包含回车符、换行符和请求数据，并不是所有请求都具有请求数据。


- GET 和 POST 的区别
    1. GET能缓存，POST不能
    2. POST比GET更安全一点点，是因为GET请求的参数默认包含在URL里(当然放在body里面也行)，
    且会被浏览器保存历史记录，POST不会
    3. 因为浏览器URL长度限制导致GET请求会受影响
    4. POST支持更多的编码类型且不会数据类型限制


- 常见的状态码
    - 2XX 成功
    200 OK，表示从客户端发来的请求在服务器端被正确处理 
    204 No content，表示请求成功，但响应报文不含实体的主体部分
    205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，
    但是与 204 响应不同在于要求请求方重置内容 206 Partial Content，进行范围请求

    - 3XX 重定向
    301 moved permanently，永久性重定向，表示资源已被分 配了新的 URL
    302 found，临时性重定向，表示资源临时被分配了新的 URL 
    303 see other，表示资源存在着另一个 URL，应使用GET方 法获取资源
    304 not modified，表示服务器允许访问资源，但因发生请求 未满足条件的情况
    307 temporary redirect，临时重定向，和302含义类似，
    但是期望客户端保持请求方法不变向新的地址发出请求

    - 4XX 客户端错误
    400 bad request，请求报文存在语法错误
    401 unauthorized，表示发送的请求需要有通过 HTTP 认证 的认证信息
    403 forbidden，表示对请求资源的访问被服务器拒绝
    404 not found，表示在服务器上没有找到请求的资源

    - 5XX 服务器错误
    500 internal sever error，表示服务器端在执行请求时发生了 错误
    501 Not Implemented，表示服务器不支持当前请求所需要 的某个功能
    503 service unavailable，表明服务器暂时处于超负载或正在 停机维护，无法处理请求
