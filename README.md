### 慕课网 - Node.js+MongoDB建站攻略（一期）参考源码

> *在线学习的动力来自于无私的分享，如果对您有帮助，请给我个Star。*

此程序基于[慕课网](http://www.imooc.com/learn/75)Scott老师的Node.js+MongoDB建站攻略（第一期）视频教程编写，当前所有模块程序均为最新版本，截止2017年4月，代码中包含详细的注释，非常适合初学者。

#### Demo使用流程
##### 1、 **本地环境安装`Node.js`**
* 1.1、 具体的安装方法，建议多看几篇博客文章，熟悉后再去尝试。如果不考虑对Node.js进行版本管理（_适用于对**Node.js**有一定了解的同学_），安装时可以一路**next**。
* 1.2、 Node.js中文网：[nodejs.cn](http://nodejs.cn/)
* 1.3、 Node.js中文网提供的下载页：[传送门](http://nodejs.cn/download/)，选择操作系统对应的版本下载。
* 1.4、 检测Node.js是否安装成功，命令窗口[cmd]`$ node -v`。若出现具体的版本号，表示安装成功。
![Node.js是否安装成功检测](http://ojzaff7fe.bkt.clouddn.com/nodejs%E7%89%88%E6%9C%AC%E6%A3%80%E6%B5%8B.jpg)

##### 2、 **安装`MongoDB`**
* 2.1、 MongoDB中文网：[mongodb.org.cn](http://www.mongodb.org.cn/)
* 2.2、 MongoDB下载链接：[传送门](https://www.mongodb.com/download-center#atlas)
* 2.3、 MongoDB中文网教程（包含安装）：[传送门](http://www.mongodb.org.cn/tutorial/)
![MongoDB中文网教程](http://ojzaff7fe.bkt.clouddn.com/mongodb%E6%95%99%E7%A8%8B%EF%BC%88%E5%8C%85%E5%90%AB%E5%AE%89%E8%A3%85%EF%BC%89.jpg)
* 2.4、 检测MongoDB是否安装成功，命令窗口[cmd]`$ mongo -version`。若出现具体的版本号，表示安装成功。
![MongoDB安装成功输出信息](http://ojzaff7fe.bkt.clouddn.com/mongodb%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F%E8%BE%93%E5%87%BA%E4%BF%A1%E6%81%AF.jpg)
* 2.5、 MongoDB安装成功后，将安装路径下的`bin`目录，例如博主的是：`"C:\Develop\MongoDB\Server\3.4\bin"`添加到系统环境变量，这样便可以直接在命令窗口[cmd]直接执行bin文件里面的命令。
![bin文件目录](http://ojzaff7fe.bkt.clouddn.com/mongo-bin-%E7%9B%AE%E5%BD%95.jpg)
* 2.6、 例如：Windows 10 环境变量添加流程。
![环境变量添加流程](http://ojzaff7fe.bkt.clouddn.com/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E6%B7%BB%E5%8A%A0%E6%B5%81%E7%A8%8B.jpg)
* 2.7、 设置存储路径，建议在C盘下创建`C:/data/db`目录文件夹，这是MongoDB数据库默认的数据存储路径，但需要手动创建。

##### 3、 启动`MongoDB`服务：`mongod`
* 3.1、 如果本地存在`C:/data/db`文件夹，命令窗口[cmd]`$ mongod`，便可开启MongoDB服务，启动后**请勿关闭窗口**;
![mongod开启服务](http://ojzaff7fe.bkt.clouddn.com/mongod%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1.jpg)
* 3.2、 同时，再新开一个命令窗口[cmd]`$ mongo`，就可以用命令来管理数据库，例如：数据的**增删改查**；
![mongo](http://ojzaff7fe.bkt.clouddn.com/mongo%E6%89%A7%E8%A1%8C%E6%95%B0%E6%8D%AE%E5%BA%93%E5%91%BD%E4%BB%A4.jpg)

##### 4、 安装`bower`依赖：`$ bower install`
* 4.1、 在Demo项目文件夹下，按住`shift`键的同时按下鼠标右键，选择在此处打开命令窗口，执行命令：`$ bower install`；
![mongo](http://ojzaff7fe.bkt.clouddn.com/%E9%BC%A0%E6%A0%87%E5%8F%B3%E9%94%AE%E6%89%93%E5%BC%80powershell.jpg)

##### 5、 安装`npm`依赖：`$ npm install`
* 5.1、 在Demo项目文件夹下，按住`shift`键的同时按下鼠标右键，选择在此处打开命令窗口，执行命令：`$ npm install`；

##### 6、 启动项目入口文件：`$ node app.js`
* 6.1、 在Demo项目文件夹下，按住`shift`键的同时按下鼠标右键，选择在此处打开命令窗口，执行命令：`$ node app`；

##### 7、 浏览器查看效果
* 7.1、  `http://localhost:3000`查看首页效果。
* 7.2、  `http://localhost:3000/admin/list`列表页
* 7.3、  `http://localhost:3000/admin/movie`后台录入页

**至此，本案例源码使用流程介绍完毕。在此过程遇到问题的同学，请前往[评论区](http://itpoet.cn/2017/12/19/build-movie-website-based-on-nodejs-and-mongodb/)留言。**

