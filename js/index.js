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
    // 所有文章按钮
    var allArtBtn = $('articles_btn');

    // 导航栏主页按钮
    var homeBtn = $('navi_home_a');
    // 导航栏相册按钮
    var ablumBtn = $('navi_ablum_a');

    // 工具栏
    var tools = $('tools');
    // 工具栏-关于我模块
    var tools_aboutMe = $('introduction');
    // 工具栏-所有文章菜单栏
    var tools_allArt = $('allArticles');
    // 工具栏显示状态
    var isShowTools = false;
    // 屏幕宽度是否 <= 790px
    var isLittleWindow = false;

    // 内容模块-
    var content = $('content');
    // 获取文章模块
    var content_articles = $('content_articles');
    // 相册模块
    var content_ablum = $('content_ablum');

    // 切换内容模块
    homeBtn.onclick = function () {
        content_articles.style.display = 'block';
        content_ablum.style.display = 'none';
    }
    ablumBtn.onclick = function () {
        content_articles.style.display = 'none';
        content_ablum.style.display = 'block';
    }


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

    // 点击导航栏，收起工具栏
    navi_top.onclick = function () {
        // content.style.transform = 'none';
    }
    navi_bottom.onclick = function () {
    }

    // 获取导航栏菜单(浏览器宽度<=790px时，导航栏顶部左侧的菜单按钮)
    var navi_menu = document.getElementById('navi_menu');
    navi_menu.onclick = function () {
        aboutBtn.onclick();
        window.onresize();
    }

    // 当前点击的是否是关于我的按钮
    var isAboutMeBtn = false;
    // 当前工具栏显示的模块,0是初始值，1是所有文章,2是关于我
    var curToolsShowModule = 0;
    allArtBtn.onclick = function () {
        isAboutMeBtn = false;
        showTools(isAboutMeBtn);
    }
    aboutBtn.onclick = function () {
        isAboutMeBtn = true;
        showTools(isAboutMeBtn);
    }

    /**
     * @method 显示或隐藏工具栏
     * @description 当点击所有文章和关于我时调用此方法显示工具栏对应模块，当点击导航栏和右侧内容模块时调用此方法收起工具栏
     * @param inner_isAboutMeBtn 是否点击了'关于我'的按钮
     */
    function showTools(inner_isAboutMeBtn) {
        if (inner_isAboutMeBtn == true){
            tools_aboutMe.style.opacity = '1';
            tools_allArt.style.opacity = '0';
            tools_aboutMe.style.display = 'block';
            tools_allArt.style.display = 'none';
            // 前后两次点击的不是相同的按钮，则不用工具栏的隐藏操作
            if (curToolsShowModule == 1){
                curToolsShowModule = 2;
                return;
            }
            curToolsShowModule = 2;
        }else {
            tools_aboutMe.style.opacity = '0';
            tools_allArt.style.opacity = '1';
            tools_aboutMe.style.display = 'none';
            tools_allArt.style.display = 'block';
            // 前后两次点击的不是相同的按钮，则不用工具栏的隐藏操作
            if (curToolsShowModule == 2){
                curToolsShowModule = 1;
                return;
            }
            curToolsShowModule = 1;
        }
        if (isShowTools == false){    // 显示工具模块
            content.style.transform = 'translateX(300px)';
            tools.style.transform = 'translateX(300px)';
            content_articles.style.opacity = 0.5;
            content.style.backgroundColor = 'transparent';
            isShowTools = true;
            tools.style.boxShadow = 'none';
        } else { // 隐藏
            tools.style.transform = 'none';
            content.style.transform = 'none';
            content_articles.style.opacity = 1;
            content.style.backgroundColor = '#eaeaea';
            isShowTools = false;
            tools.style.boxShadow = '1px 1px 5px black';
        }
    }

    // 系统方法，当浏览器宽度改变时自动调用
    // 这里主要处理当工具栏是显示状态时，浏览器宽度逐渐小于等于790px时，改变界面布局
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
            // 隐藏每个文章左侧黑色线条
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
            // 显示每个文章左侧黑色线条
            for (var i=0;i<art_leftLines.length;i++){
                var leftLine = art_leftLines[i];
                leftLine.style.display = 'block';
            }
        }
    }

    // 工具栏-显示tags的div
    var tools_tags_div = $('tools_tags');
    var tag_arr = new Array('json','原创','博客','网站','html','javascript','css','标签','终端');
    createTags(tag_arr,tools_tags_div);

    // 工具栏-是否显示tag标签按钮
    var isShowTagBtn = $('tools_isShowTags_btn');
    var isShowTag = true;
    isShowTagBtn.onclick = function () {
        isShowTag = !isShowTag;
        if (isShowTag == false){
            isShowTagBtn.style.backgroundImage = 'url("images/icon_slider_off.png")';
            tools_tags_div.style.display = 'none';
        }else {
            isShowTagBtn.style.backgroundImage = 'url("images/icon_slider_on.png")';
            tools_tags_div.style.display = 'block';
        }
    }

    // 发表文章
    composeArticles();

    photoBroswerConfig();
}

function pb_showFigure(imgN,desc) {
    var photoBroswer = $('photoBrowser');
    photoBroswer.style.display = 'block';
    var pb_img = $('pb_img');
    var pb_figcaption = $('pb_figcaption');
    pb_img.setAttribute('src',imgN);
    pb_figcaption.innerText = desc;
}

/**
 * 处理图片浏览器
 */
function photoBroswerConfig() {
    // 图片浏览器主界面
    var photoBroswer = $('photoBrowser');

    // 关闭按钮
    var pb_closeBtn = $('pb_closeBtn');
    // 图片放大缩小的按钮
    var pb_magnifierBtn = $('pb_magnifier');
    // 全屏和退出全屏的按钮
    var pb_fullWindowBtn = $('pb_fullWindowBtn');
    // 索引模块
    var pb_indexDiv = $('pb_indexDiv');
    // 上一张按钮
    var ph_preBtn = $('pb_preBtn');
    // 下一张按钮
    var ph_preBtn = $('pb_nextBtn');
    // 图片figure
    var ph_figure = $('pb_figure');

    pb_closeBtn.onclick = function () {
        photoBroswer.style.display = 'none';
    }

    pb_magnifierBtn.onclick = function () {
        ph_figure.style.transform = 'scale(1.3,1.3)';
    }
}

/**
 * @method 当屏幕宽度改变时，更新界面布局
 * @description 根据当前屏幕尺寸(仅宽度)和是否显示工具栏模块，重新布局界面
 * @param isShowTools 是否显示工具栏模块
 * @param isLittleWindow 浏览器宽度是否<=790px
 */
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