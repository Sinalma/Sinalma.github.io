/**
 * Created by apple on 03/09/2017.
 */

function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function () {
alert('');
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