/**
 * Created by apple on 24/08/2017.
 */
function $(id) {
    return typeof id === 'string' ? document.getElementById(id):id;
}

window.onload = function () {
    // 关于我的按钮
    var aboutBtn = $('abountMe_btn');
    // 内容模块
    var content = $('content');
    // 导航栏
    var navi_top = $('navi_top');
    var navi_bottom = $('navi_bottom');
    // 左侧目录显示状态
    var catalogueState = false;
    navi_top.onclick = function () {
        content.style.transform = 'none';
    }
    navi_bottom.onclick = function () {
        if (catalogueState == true){
            // content.style.transform = 'none';
            // catalogueState = false;
        }
    }
    aboutBtn.onclick = function () {
        // 显示左侧目录
        if (catalogueState == false){
            content.style.transform = 'translate(300px,0)';
            content.style.backgroundSize = 'cover';
            catalogueState = true;
        } else {
            // 隐藏
            content.style.transform = 'none';
            content.style.backgroundSize = '0px';
            catalogueState = false;
            // content.style.animationDelay = '0.5s';
            // content.style.animationName = 'hideContentBg';
            // content.style.animationDuration = '0.1s';
        }

    }

    // 获取文章模块
    var content_articles = $('content_articles');
    // childNodes所有子元素
    // children所有直接子元素
    writeArticle(0,'## github+域名实现个人博客\n\n','images/article_01',' - 1.创建github账号\n\n - 2.创建代码仓库\n\n' +
        '- 3.代码仓库命名为"用户名+github.io"\n\n - 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  - 5.代码仓库创建CNAME文件，内容为域名，加不加www都可以\n\n - 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n - 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n');

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.点击右上角新建代码仓库\n\n' +
        '- 3.仓库命名为"你的用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.github仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n' +
        '- 8.本人使用仅会的html、css+js搭建个人网站，模仿的是litten.m\n\n' +
        '- 9.也可以使用hexo，内有封装好的主题',
        new Array("博客","github","原创")
    );

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.点击右上角新建代码仓库\n\n' +
        '- 3.仓库命名为"你的用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.github仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n' +
        '- 8.本人使用仅会的html、css+js搭建个人网站，模仿的是litten.m\n\n' +
        '- 9.也可以使用hexo，内有封装好的主题',
        new Array("前端","域名","博客","github","原创")
    );

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.点击右上角新建代码仓库\n\n' +
        '- 3.仓库命名为"你的用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.github仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n' +
        '- 8.本人使用仅会的html、css+js搭建个人网站，模仿的是litten.m\n\n' +
        '- 9.也可以使用hexo，内有封装好的主题',
        new Array("博客","github","原创","网页开发","litten.me","个人网站")
    );

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.点击右上角新建代码仓库\n\n' +
        '- 3.仓库命名为"你的用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.github仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n' +
        '- 8.本人使用仅会的html、css+js搭建个人网站，模仿的是litten.m\n\n' +
        '- 9.也可以使用hexo，内有封装好的主题',
        new Array("博客","github","原创")
    );

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.点击右上角新建代码仓库\n\n' +
        '- 3.仓库命名为"你的用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.github仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n' +
        '- 8.本人使用仅会的html、css+js搭建个人网站，模仿的是litten.m\n\n' +
        '- 9.也可以使用hexo，内有封装好的主题',
        new Array("博客","github","原创")
    );

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.点击右上角新建代码仓库\n\n' +
        '- 3.仓库命名为"你的用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.github仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n' +
        '- 8.本人使用仅会的html、css+js搭建个人网站，模仿的是litten.m\n\n' +
        '- 9.也可以使用hexo，内有封装好的主题',
        new Array("博客","github","原创")
    );

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.点击右上角新建代码仓库\n\n' +
        '- 3.仓库命名为"你的用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.github仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n' +
        '- 8.本人使用仅会的html、css+js搭建个人网站，模仿的是litten.m\n\n' +
        '- 9.也可以使用hexo，内有封装好的主题',
        new Array("博客","github","原创")
    );
}

