var mongoose = require('mongoose');
var movieSchema = require('../schemas/movie.js'); //引入'../schemas/movie.js'导出的模式模块

// 编译生成movie模型
var movie = mongoose.model('movie', movieSchema);

// 将movie模型[构造函数]导出
module.exports = movie;