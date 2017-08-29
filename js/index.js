/**
 * Created by apple on 24/08/2017.
 */

/**
 * 根据id获取元素
 * @param id 元素绑定的id字符串
 * @returns {Element} id绑定的元素
 */
function $(id) {
    return typeof id === 'string' ? document.getElementById(id):id;
}

window.onload = function () {

    // childNodes所有子元素
    // children所有直接子元素

    // 导航栏
    var navi = $('navi');
    var navi_top = $('navi_top');
    var navi_bottom = $('navi_bottom');
    // 关于我的按钮
    var aboutBtn = $('abountMe_btn');

    // 工具栏
    var tools = $('tools');
    // 工具栏显示状态
    var isShowTools = false;
    // 屏幕宽度是否 <= 790px
    var isLittleWindow = false;

    // 内容模块-
    var content = $('content');
    // 获取文章模块
    var content_articles = $('content_articles');

    // 获取hud
    var hud = $('hud');
    hud.onclick = function () {
        navi.style.transform = 'none';
        content.style.backgroundColor = 'transparent';
        content_articles.style.opacity = 0.5;
        hud.style.display = 'none';
        tools.style.zIndex = '0';
        tools.style.transform = 'none';
        content.style.transform = 'none';
        content_articles.style.opacity = 1;
        content.style.backgroundColor = '#eaeaea';
        isShowTools = false;
    }

    navi_top.onclick = function () {
        // content.style.transform = 'none';
    }
    navi_bottom.onclick = function () {
    }


    // 获取导航栏菜单
    var navi_menu = document.getElementById('navi_menu');
    navi_menu.onclick = function () {
        aboutBtn.onclick();
        window.onresize();
        // if (isShowTools == false){
        //     content_articles.style.opacity = 0.5;
        //     // content.style.backgroundColor = 'transparent';
        //     isShowTools = true;
        //     tools.style.position = 'fixed';
        //     hud.style.display = 'block';
        //     tools.style.zIndex = '1200';
        //     tools.style.transform = 'translate(300px,0)';
        //     navi.style.transform = 'translate(300px,0)';
        //     content.style.transform = 'translate(600px,0)';
        // } else {
        //     // 隐藏
        //     tools.style.transform = 'none';
        //     content.style.transform = 'none';
        //     content_articles.style.opacity = 1;
        //     content.style.backgroundColor = '#eaeaea';
        //     isShowTools = false;
        // }

    }

    aboutBtn.onclick = function () {
        // 显示工具模块目录
        if (isShowTools == false){
            content.style.transform = 'translateX(300px)';
            tools.style.transform = 'translateX(300px)';
            content_articles.style.opacity = 0.5;
            content.style.backgroundColor = 'transparent';
            isShowTools = true;
            tools.style.boxShadow = 'none';
        } else {
            // 隐藏
            tools.style.transform = 'none';
            content.style.transform = 'none';
            content_articles.style.opacity = 1;
            content.style.backgroundColor = '#eaeaea';
            isShowTools = false;
            tools.style.boxShadow = '1px 1px 5px black';
        }
    }

    window.onresize = function(){
        if (document.documentElement.clientWidth <= 790 && isShowTools == true){
            navi.style.transform = 'translate(300px,0)';
            content.style.backgroundColor = '#eaeaea';
            // content_articles.style.backgroundColor = 'transparent';
            content_articles.style.opacity = 1;
            tools.style.position = 'fixed';
            hud.style.display = 'block';
            tools.style.zIndex = '1200';
            tools.style.boxShadow = '1px 1px 5px black';
        }else if(document.documentElement.clientWidth > 790 && isShowTools == true){
            navi.style.transform = 'none';
            content.style.backgroundColor = 'transparent';
            content_articles.style.opacity = 0.5;
            hud.style.display = 'none';
            tools.style.zIndex = '0';
            tools.style.boxShadow = 'none';
        }

        // 所有文章左侧顶部的黑条
        var art_leftLines = document.getElementsByClassName('article_leftLine');

        if (document.documentElement.clientWidth <= 790 ) {
            for (var i=0;i<content_articles.children.length;i++){
                var li = content_articles.children[i];
                li.style.marginTop = '0px';
                li.style.marginLeft = '0';
                li.style.marginRight = '0';
                li.style.marginBottom = '10px';
                li.style.padding = '10px 10px 0px 10px';
                li.style.height = '770px';
                li.style.fontSize = '14px';
            }
            for (var i=0;i<art_leftLines.length;i++){
                var leftLine = art_leftLines[i];
                leftLine.style.display = 'none';
            }

        }else {
            for (var i=0;i<content_articles.children.length;i++){
                var li = content_articles.children[i];
                li.style.marginTop = '30px';
                li.style.marginLeft = '30px';
                li.style.marginRight = '30px';
                li.style.marginBottom = '0px';
                li.style.padding = '30px 60px 0px 60px';
                li.style.height = '800px';
                li.style.fontSize = '17px';
            }
            for (var i=0;i<art_leftLines.length;i++){
                var leftLine = art_leftLines[i];
                leftLine.style.display = 'block';
            }
        }
    }

    // 发表文章
    composeArticles();
}

function updateInterface(isShowTools,isLittleWindow) {

    if (isShowTools == true && isLittleWindow == true){

    }else if (isShowTools == true && isLittleWindow == false){

    }else if (isShowTools == false && isLittleWindow == true){

    }else if (isShowTools == false && isLittleWindow == false){

    }
}


function composeArticles() {

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
