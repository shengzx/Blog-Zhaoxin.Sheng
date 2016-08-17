var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'blog');
db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function () {
  console.log("连接数据库成功！");
  var blogSchema = 
  new mongoose.Schema({
    name: String,
    discribe: String,
    view: Number
  });
  //虚拟属性
  blogSchema.virtual('name_view').get(function () {
    return this.name + '被浏览' + this.view;
  });
  //虚拟方法set 属性
  // PersonSchema.virtual('name.full').set(function(name){
  //     var split = name.split(' ');
  //     this.name.first = split[0];
  //     this.name.last = split[1];
  //   });
  //文档函数
  blogSchema.methods.views = function () {
    console.log("浏览次数" + this.view);
  };
  var blogModel = db.model('blogs',blogSchema);
  var blogm = { name: '盛照鑫的博客－node', discribe: '这是我用mongo+node mongoose 创建的实体', view: 1 };
  // var blogEnity = new blogModel(blogm);
  // blogEnity.save();
  var blogEnity =  blogModel.find(function(err,blog){
        console.log(blog);
        console.log(blog.name_view);
  });
   
})