/**
 * Created by apple on 03/09/2017.
 */

function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
}

function winOnload() {
    // alert('onload');
}

// window.onload = function () {
//     // 图片浏览器主界面
//     var photoBroswer = $('photoBrowser');
//
//     // 关闭按钮
//     var pb_closeBtn = $('pb_closeBtn');
//     // 图片放大缩小的按钮
//     var pb_magnifierBtn = $('pb_magnifier');
//     // 全屏和退出全屏的按钮
//     var pb_fullWindowBtn = $('pb_fullWindowBtn');
//     // 索引模块
//     var pb_indexDiv = $('pb_indexDiv');
//     // 上一张按钮
//     var ph_preBtn = $('pb_preBtn');
//     // 下一张按钮
//     var ph_preBtn = $('pb_nextBtn');
//     // 图片figure
//     var ph_figure = $('pb_figure');
//
//     pb_closeBtn.onclick = function () {
//         photoBroswer.style.display = 'none';
//     }
//
//     pb_magnifierBtn.onclick = function () {
//         ph_figure.style.transform = 'scale(1.3,1.3)';
//     }
//
//
// }

    /***
     *  // 导航栏
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
     */
