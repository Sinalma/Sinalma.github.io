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
    // var isShowCatalogue = false;
    // var catalogueAnimState = false;
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
        // alert('0');
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
        }
    }
}