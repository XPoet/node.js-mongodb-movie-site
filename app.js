var express = require('express');  // 加载express模块
var app = express(); // 启动Web服务器
var port = process.env.PORT || 3000; // 设置端口号：3000

var path = require('path'); // 引入path模块的作用：因为页面样式的路径放在了bower_components，告诉express，请求页面里所过来的请求中，如果有请求样式或脚本，都让他们去bower_components中去查找

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/imovie'); // 连接mongodb本地数据库imovie

var movie = require('./models/movie.js'); // 载入mongoose编译后的模型

app.locals.moment = require('moment');

var serveStatic = require('serve-static');  // 静态文件处理
app.use(serveStatic('public'));

var bodyParser = require('body-parser');  // 因为后台录入页有提交表单的步骤，故加载此模块方法（bodyParser模块来做文件解析），将表单里的数据进行格式化
app.use(bodyParser.urlencoded({extended: true}));

var _ = require('underscore'); // _.extend用新的字段替换老的字段

app.set('views', './views/pages');     // 设置视图默认的文件路径
app.set('view engine', 'jade');  // 设置模板引擎jade
// app.set('view engine', 'pug');  // 设置模板引擎pug

//== 旧版
//app.use(express.bodyParser());
// app.use(express.static(path.join(__dirname, 'bower_components')))

app.listen(port);
console.log('i_movie start on port' + port);

// 编写主要页面路由
// index page
app.get('/', function (req, res) {
    movie.fetch(function (err, movies) {
        if (err) {
            console.log(err);
        }
        res.render('index', {
            title: 'i_movie 首页',
            movies: movies
        });
    });
});

// detail page
app.get('/movie/:id', function (req, res) {
    var id = req.params.id;
    movie.findById(id, function (err, movie) {
        res.render('detail', {
            title: 'i_movie' + movie.title,
            movie: movie
        });
    });
});

// admin page
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'i_movie 后台录入页',
        movie: {
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
    });
});

// admin update movie
app.get('/admin/update/:id', function (req, res) {
    var id = req.params.id;
    if (id) {
        movie.findById(id, function (err, movie) {
            res.render('admin', {
                title: 'imovie 后台更新页',
                movie: movie
            });
        });
    }
});

// admin post movie
app.post('/admin/movie/new', function (req, res) {
    console.log(req.body.movie);
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;
    if (id != 'undefined') {
        movie.findById(id, function (err, movie) {
            if (err) {
                console.log(err);
            }
            _movie = _.extend(movie, movieObj);
            _movie.save(function (err, movie) {
                if (err) {
                    console.log(err);
                }
                res.redirect('/movie/' + movie._id);
            });
        });
    } else {  // 新加的电影
        _movie = new movie({
            doctor: movieObj.doctor,
            title: movieObj.title,
            country: movieObj.country,
            language: movieObj.language,
            year: movieObj.year,
            poster: movieObj.poster,
            summary: movieObj.summary,
            flash: movieObj.flash
        });
        _movie.save(function (err, movie) {
            if (err) {
                console.log(err);
            }
            res.redirect('/movie/' + movie._id);
        });
    }
});

// list page
app.get('/admin/list', function (req, res) {
    movie.fetch(function (err, movies) {
        if (err) {
            console.log(err);
        }
        res.render('list', {
            title: 'i_movie 列表页',
            movies: movies
        });
    });
});

// list delete movie data
app.delete('/admin/list', function (req, res) {
    var id = req.query.id;
    if (id) {
        movie.remove({_id: id}, function (err, movie) {
            if (err) {
                console.log(err);
            } else {
                res.json({success: 1});
            }
        });
    }
});
