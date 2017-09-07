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

// 元素>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 导航栏
var navi;
var navi_top;
var navi_bottom;
// 获取导航栏菜单(浏览器宽度<=790px时，导航栏顶部左侧的菜单按钮)
var navi_menu;
// 关于我的按钮
var aboutBtn;
// 所有文章按钮
var allArtBtn;
// 导航栏主页按钮
var homeBtn;
// 导航栏相册按钮
var ablumBtn;

// 工具栏
var tools;
// 工具栏-关于我模块
var tools_aboutMe;
// 工具栏-所有文章菜单栏
var tools_allArt;
// 是否显示标签的按钮
var isShowTagBtn;
// 工具栏-显示tags的div
var tools_tags_div;
// tag数组
var tag_arr;
// 工具栏显示状态
var isShowTools;
// 屏幕宽度是否 <= 790px
var isLittleWindow;

// 内容模块-
var content;
// 获取文章模块
var content_articles;
// 相册模块
var content_ablum;
// 相册视频按钮
var content_ablum_video_btn;

// 显示工具栏后出现的蒙版
var hud;

// 图片浏览器模块
var photoBroswer;
var pb_img;
// 图片文字描述
var pb_figcaption;
// 关闭按钮
var pb_closeBtn;
// 图片放大缩小的按钮
var pb_magnifierBtn;
// 全屏和退出全屏的按钮
var pb_fullWindowBtn;
// 索引模块
var pb_indexDiv;
// 上一张按钮
var pb_preBtn;
// 下一张按钮
var pb_nextBtn;
// 图片figure
var pb_figure;

// 变量>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 内容相册模块高度
var content_ablum_width;
// 当前图片浏览器显示的图片尺寸
var pb_img_widht;
var pb_img_height;
// 图片浏览器宽高
var pb_width;
var pb_height;
// 合适的图片宽高
var imgSuitableW;
var imgSuitableH;

function getHtmlElements() {

    // 导航栏
    navi = $('navi');
    navi_top = $('navi_top');
    navi_bottom = $('navi_bottom');
    // 获取导航栏菜单(浏览器宽度<=790px时，导航栏顶部左侧的菜单按钮)
    navi_menu = $('navi_menu');
    // 关于我的按钮
    aboutBtn = $('abountMe_btn');
    // 所有文章按钮
    allArtBtn = $('articles_btn');

    // 导航栏主页按钮
    homeBtn = $('navi_home_a');
    // 导航栏相册按钮
    ablumBtn = $('navi_ablum_a');

    // 工具栏
    tools = $('tools');
    // 工具栏-关于我模块
    tools_aboutMe = $('introduction');
    // 工具栏-所有文章菜单栏
    tools_allArt = $('allArticles');
    // 是否显示标签的按钮
    isShowTagBtn = $('tools_isShowTags_btn');

    // 工具栏-显示tags的div
    tools_tags_div = $('tools_tags');
    // tag文字数组
    tag_arr = new Array('json','原创','博客','网站','html','javascript','css','标签','终端');

    // 工具栏显示状态
    isShowTools = false;
    // 屏幕宽度是否 <= 790px
    isLittleWindow = false;

    // 内容模块-
    content = $('content');
    // 获取文章模块
    content_articles = $('content_articles');
    // 相册模块
    content_ablum = $('content_ablum');
    // 相册视频按钮
    content_ablum_video_btn = $('ablum_menu_video');

    // 显示工具栏后出现的蒙版
    hud = $('hud');

    // 图片浏览器模块
    photoBroswer = $('photoBrowser');
    pb_img = $('pb_img');
    pb_figcaption = $('pb_figcaption');
    // 关闭按钮
    pb_closeBtn = $('pb_closeBtn');
    // 图片放大缩小的按钮
    pb_magnifierBtn = $('pb_magnifier');
    // 全屏和退出全屏的按钮
    pb_fullWindowBtn = $('pb_fullWindowBtn');
    // 索引模块
    pb_indexDiv = $('pb_indexDiv');
    // 上一张按钮
    pb_preBtn = $('pb_preBtn');
    // 下一张按钮
    pb_nextBtn = $('pb_nextBtn');
    // 图片figure
    pb_figure = $('pb_figure');
}

/**
 * 启动入口
 */
window.onload = function () {

    // 获取所有需要用的元素
    getHtmlElements();

    // 处理工具栏的显示和隐藏
    showOrHideTools();

    // 创建工具栏所有文章模块的标签
    createTags(tag_arr,tools_tags_div);

    // 工具栏-是否显示tag标签按钮
    dealToolsTagBtnClick();

    // 发表文章
    composeArticles();

    // 浏览器配置
    photoBroswerConfig();
}

// 系统方法，当浏览器宽度改变时自动调用
window.onresize = function () {
    // 处理工具栏
    tools_windowOnResize();
    // 处理图片浏览器
    pb_windowOnResize();
    // 重新设置内容相册模块图片尺寸(一行放四张图片，平分宽度，高度相等于宽度)
    resetContentAblumPicturesSize();
}

// 重新设置内容相册模块图片尺寸(一行放四张图片，平分宽度，高度相等于宽度)
function resetContentAblumPicturesSize() {
    // clientWidth 不包括边框
    // offsetWidth 包括边框
    // padding left right = 30 ,margin left right = 30 , scroll bar = 15
    // content_ablum_width = content_ablum.clientWidth - 120;
    // var picW = content_ablum_width / 4;
    // if (document.documentElement.clientWidth <= 790){
    //     content_ablum_width = content_ablum.clientWidth - 10 * 2;
    // }
    // if (document.documentElement.clientWidth <= 590){
    //     // 一行显示两张图片
    //     picW = content_ablum_width / 2;
    // }
    content_ablum_width = document.documentElement.clientWidth <= 790?content_ablum.clientWidth-10*2:content_ablum.clientWidth - 120;
    var picW = document.documentElement.clientWidth <= 590?content_ablum_width/2:content_ablum_width/4;
    // var figures = document.getElementsByTagName('figure');
    var figures = document.getElementsByClassName('photo_li_figure');
    for (var i=0;i<figures.length;i++){
        var fig = figures[i];
        fig.style.display = 'none';
        fig.style.width = picW+'px';
        fig.style.height = picW+'px';
        fig.style.display = 'inline-block';
    }
}

// 处理工具栏的显示和隐藏
function showOrHideTools() {

    // 切换内容模块
    homeBtn.onclick = function () {
        content_articles.style.display = 'block';
        content_ablum.style.display = 'none';
    }
    ablumBtn.onclick = function () {
        content_articles.style.display = 'none';
        content_ablum.style.display = 'block';
        // 处理内容模块相册图片(初始化)
        resetContentAblumPicturesSize();
    }

    content_ablum_video_btn.onclick = function () {
        alert("Not found video now.");
    }

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

    // 点击了内容模块，隐藏工具栏
    content_articles.onclick = function () {
        if (isShowTools == true){
            showTools(isAboutMeBtn);
        }
    }
    content_ablum.onclick = function () {
        if (isShowTools == true){
            showTools(isAboutMeBtn);
        }
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
            content_ablum.style.opacity = 0.5;
            content.style.backgroundColor = 'transparent';
            isShowTools = true;
            tools.style.boxShadow = 'none';
        } else { // 隐藏
            tools.style.transform = 'none';
            content.style.transform = 'none';
            content_articles.style.opacity = 1;
            content_ablum.style.opacity = 1;
            content.style.backgroundColor = '#eaeaea';
            isShowTools = false;
            tools.style.boxShadow = '1px 1px 5px black';
        }
    }
}

// 处理工具栏是否显示tag的按钮
function dealToolsTagBtnClick() {
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
}

// 这里主要处理当工具栏是显示状态时，浏览器宽度逐渐小于等于790px时，改变界面布局
function tools_windowOnResize(){
    if (document.documentElement.clientWidth <= 790 && isShowTools == true){
        navi.style.transform = 'translate(300px,0)';
        content.style.backgroundColor = '#eaeaea';
        content_articles.style.opacity = 1;
        content_ablum.style.opacity = 1;
        tools.style.position = 'fixed';
        hud.style.display = 'block';
        tools.style.zIndex = '1200';
        tools.style.boxShadow = '1px 1px 5px black';
    }else if(document.documentElement.clientWidth > 790 && isShowTools == true){
        navi.style.transform = 'none';
        content.style.backgroundColor = 'transparent';
        content_articles.style.opacity = 0.5;
        content_ablum.style.opacity = 0.5;
        hud.style.display = 'none';
        tools.style.zIndex = '0';
        tools.style.boxShadow = 'none';
    }

    // 隐藏或显示文章左侧黑条
    showOrHideAllArticlesLftLine();
}

/**
 * 当宽度<=790px隐藏或显示所有文章左边黑色线条
 */
function showOrHideAllArticlesLftLine() {
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

/**
 * @method 点击图片，弹出图片浏览器显示图片
 * @description 在figure添加onclick事件，调用此方法，传入参数,本方法内部会对图片尺寸进行相应对处理，达到适应屏幕对尺寸而不被拉伸导致图片不好看
 * @param imgN 图片名，相对路径
 * @param desc 图片配字
 */
function pb_showFigure(imgN,desc) {

    photoBroswer.style.display = 'block';
    pb_figcaption.innerText = desc;
    pb_img.setAttribute('src',imgN);

    var img = new Image();
    img.src = imgN;
    img.onload = function () {
        pb_img_widht = this.width;
        pb_img_height = this.height;
        // 初始化figure尺寸
        // pb_height = photoBroswer.offsetHeight;
        // imgSuitableH = pb_height - 45 * 2;
        // pb_figure.style.height = imgSuitableH+'px';
        // pb_figure.style.width = (1-((pb_img_height-imgSuitableH)/pb_img_height))*pb_img_widht+'px';
        pb_windowOnResize();
    }
}

// 屏幕尺寸发生改变时调用
function pb_windowOnResize() {
    pb_width = photoBroswer.offsetWidth;
    pb_height = photoBroswer.offsetHeight;
    // imgSuitableW = pb_width - 50 * 2;
    imgSuitableH = pb_height - 45 * 2;
    imgSuitableW = document.documentElement.clientWidth<=790?pb_width:pb_width - 50 * 2;
    // 重新设置图片尺寸
    resetImgSize();
}

/**
 * 根据浏览器宽高，重新设置图片的尺寸
 */
function resetImgSize() {
    if (pb_img_widht >= pb_img_height){
        pb_figure.style.width = imgSuitableW + 'px';
        pb_figure.style.height = (1-((pb_img_widht-imgSuitableW)/pb_img_widht))*pb_img_height+'px';
    }else {
        pb_figure.style.height = imgSuitableH + 'px';
        pb_figure.style.width = (1-((pb_img_height-imgSuitableH)/pb_img_height))*pb_img_widht+'px';
    }
}


/**
 * 处理图片浏览器
 */
function photoBroswerConfig() {

    pb_closeBtn.onclick = function () {
        reducePb_figure();
        photoBroswer.style.display = 'none';
    }

    pb_figure.onclick = function () {
        pb_magnifierBtn.onclick();
    }


    var pb_isBig = false;
    // 点击了放大镜
    pb_magnifierBtn.onclick = function () {
        if (pb_isBig == false){
            enlargePb_figure();
        }else {
            reducePb_figure();
        }
    }
    // 放大图片
    function enlargePb_figure() {
        pb_figure.style.transform = 'translate(-50%,-50%) scale(1.5,1.5)';
        pb_isBig = true;
        pb_magnifierBtn.style.backgroundPosition = '-146px -15px';
    }
    // 缩小图片
    function reducePb_figure() {
        pb_figure.style.transform = 'translate(-50%,-50%) scale(1,1)';
        pb_isBig = false;
        pb_magnifierBtn.style.backgroundPosition = '-102px -15px';
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