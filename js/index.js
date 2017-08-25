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

    // 获取文章模块
    var content_articles = $('content_articles');
    // childNodes所有子元素
    // children所有直接子元素
    writeArticle(0,'## github+域名实现个人博客\n\n','images/article_01',' - 1.创建github账号\n\n - 2.创建代码仓库\n\n' +
        '- 3.代码仓库命名为"用户名+github.io"\n\n - 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  - 5.代码仓库创建CNAME文件，内容为域名，加不加www都可以\n\n - 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n - 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n');


    /**
     * <li>
     <div class="leftLine"></div>
     <div class="art_title"></div>
     <div class="art_picture"></div>
     <div class="art_mainText"></div>
     <div class="art_foot">
     <div class="art_tag"></div>
     <a href="" class="art_fullTextBtn">展开全文 >></a>
     </div>
     </li>
     * */

    // createLi();


}

function writeArticleToLi(title,imgName,content) {

}

// 快速创建文章-li
function createLi() {
    var li = document.createElement('li');
    content_articles.appendChild(li);
    li.style.backgroundColor = 'red';
    li.style.width = '100%';
    li.style.height = '750px';
    li.style.position = 'relative';
    li.style.marginTop = '30px';
    li.style.padding = '30px 60px 0px 60px';
    li.style.boxSizing = 'border-box';
    li.style.overflow = hidden;
    return li;
}

function writeArticle(i,title,imgName,content) {
    var art_li = content_articles.children[i];
    var art_title = art_li.children[1];
    var art_picture = art_li.children[2];
    var art_content = art_li.children[3];
    art_title.innerHTML = marked(title);
    var img = document.createElement('img');
    img.setAttribute('src','images/inner_picture01.jpg');
    art_picture.appendChild(img);
    img.style.width = '100%';
    img.style.height = '100%';
    art_content.innerHTML = marked(content);
    var art_tag = art_li.children[4].children[0];
}