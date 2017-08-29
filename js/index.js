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
    var navi = $('navi');
    var navi_top = $('navi_top');
    var navi_bottom = $('navi_bottom');
    var tools = $('tools');
    // 左侧目录显示状态
    var isShowTools = false;
    navi_top.onclick = function () {
        content.style.transform = 'none';
    }
    navi_bottom.onclick = function () {
        if (catalogueState == true){
            // content.style.transform = 'none';
            // isShowTools = false;
        }
    }
    var content_articles = document.getElementById('content_articles');
    aboutBtn.onclick = function () {
        // 显示左侧目录
        if (isShowTools == false){
            content.style.transform = 'translate(300px,0)';
            tools.style.transform = 'translate(300px,0)';
            content_articles.style.opacity = 0.5;
            content.style.backgroundColor = 'transparent';
            isShowTools = true;
        } else {
            // 隐藏
            tools.style.transform = 'none';
            content.style.transform = 'none';
            content_articles.style.opacity = 1;
            content.style.backgroundColor = '#eaeaea';
            isShowTools = false;

        }

    }
    window.onresize = function(){
        if (document.documentElement.clientWidth <= 790 && isShowTools == true){
            navi.style.transform = 'translate(300px,0)';
            content.style.backgroundColor = '#eaeaea';
            // content_articles.style.backgroundColor = 'transparent';
            content_articles.style.opacity = 1;
            tools.style.position = 'fixed';
        }else if(document.documentElement.clientWidth > 790 && isShowTools == true){
            navi.style.transform = 'none';
            content.style.backgroundColor = 'transparent';
            content_articles.style.opacity = 0.5;
        }
        if (document.documentElement.clientWidth <= 790 ) {
            for (var i=0;i<content_articles.children.length;i++){
                var li = content_articles.children[i];
                li.style.marginLeft = '0';
                li.style.marginRight = '0';
                li.style.marginBottom = '10px';
                li.style.padding = '10px 10px 0px 10px';
            }
        }else {
            for (var i=0;i<content_articles.children.length;i++){
                var li = content_articles.children[i];
                li.style.marginTop = '30px';
                li.style.marginLeft = '30px';
                li.style.marginRight = '30px';
                li.style.padding = '30px 60px 0px 60px';
            }
        }
    }
    // 获取导航栏菜单
    var navi_menu = document.getElementById('navi_menu');
    var catalogue = document.getElementById('catalogue');
    navi_menu.onclick = function () {
        // catalogue.style.transform = 'none';
        // catalogue.style.opacity = '1';
        content.style.transform = 'translate(300px,0)';
        // content.style.backgroundSize = 'cover';
        isShowTools = true;
    }

    // 获取文章模块
    var content_articles = $('content_articles');
    // childNodes所有子元素
    // children所有直接子元素

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

