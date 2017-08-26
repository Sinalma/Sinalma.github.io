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
        '- 2.创建代码仓库\n\n' +
        '- 3.代码仓库命名为"用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.代码仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n',
        new Array("博客","github","原创")
    );

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.创建代码仓库\n\n' +
        '- 3.代码仓库命名为"用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.代码仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n',
        new Array("博客","github","原创")
    );

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.创建代码仓库\n\n' +
        '- 3.代码仓库命名为"用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.代码仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n',
        new Array("博客","github","原创")
    );

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.创建代码仓库\n\n' +
        '- 3.代码仓库命名为"用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.代码仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n',
        new Array("博客","github","原创")
    );

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.创建代码仓库\n\n' +
        '- 3.代码仓库命名为"用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.代码仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n',
        new Array("博客","github","原创")
    );

    writeArticleToLi(
        '## github+域名实现个人博客\n\n',
        'images/inner_picture01.jpg',
        '- 1.创建github账号\n\n ' +
        '- 2.创建代码仓库\n\n' +
        '- 3.代码仓库命名为"用户名+github.io"\n\n ' +
        '- 4.购买域名，阿里云.top域名第一年只要1元钱\n\n  ' +
        '- 5.代码仓库创建CNAME文件，内容为域名，加不加www都可以\n\n ' +
        '- 6.解析域名，选择CNAME，主机记录为www，内容为"github用户名+github.io"\n\n ' +
        '- 7.打开浏览器，输入域名即可访问github上的代码仓库\n\n',
        new Array("博客","github","原创")
    );
}

function writeArticleToLi(title,imgN,artText,tags) {
    var li = createLi();
    var leftLine = createLeftLine();
    li.appendChild(leftLine);
    var titleDiv = createTitle(title);
    li.appendChild(titleDiv);
    var img = createPicture(imgN);
    li.appendChild(img);
    var artContent = createArtContent(artText);
    li.appendChild(artContent);
    var moreBtn = createMoreBtn();
    li.appendChild(moreBtn);
    var foot = createArtFoot(tags);
    li.appendChild(foot);
}

function createTagIcon() {
    var tagIcon = document.createElement('img');
    tagIcon.setAttribute('src','images/tagicon.png');
    tagIcon.style.width = '16px';
    tagIcon.style.height = '16px';
    // tagIcon.style.position = 'absolute';
    // tagIcon.style.top = '50%';
    // tagIcon.style.left = 0;
    tagIcon.style.float = 'left';
    tagIcon.style.marginTop = '2.5px';
    // tagIcon.style.transform = 'translateY(-50%)';

    return tagIcon;
}

function createTag(tagN) {
    var a = document.createElement('a');
    a.style.backgroundColor = '#ba9575';
    // a.style.width = '40px';
    a.style.height = '20px';
    a.style.lineHeight = '20px';
    a.style.color = 'white';
    a.style.fontSize = '11px';
    a.style.marginLeft = '20px';
    a.style.float = 'left';
    a.style.paddingLeft = '10px';
    a.style.paddingRight = '10px';
    a.style.borderTopLeftRadius = '30px';
    a.style.borderBottomLeftRadius = '30px';
    a.style.borderTopRightRadius = '10px';
    a.style.borderBottomRightRadius = '10px';
    a.style.position = 'relative';
    a.style.cursor = 'pointer';
    a.onmouseover = function () {
        a.style.opacity = '0.7';

    }
    a.onmouseout = function () {
        a.style.opacity = '1';

    }
    // 绘制左侧小圆点
    // var circle = document.createElement('div');
    // circle.style.backgroundColor = 'red';
    // circle.style.width = '5px';
    // circle.style.height = '5px';
    // circle.style.borderRadius = '2.5px';
    // circle.style.position = 'absolute';
    // circle.style.top = '50%';
    // circle.style.left = '1px';
    // circle.style.transform = 'translateY(-50%)';
    // a.appendChild(circle);
    a.innerText = tagN;
    return a;
}

function createArtFoot(tags) {
    var foot = document.createElement('div');
    foot.style.width = '100%';
    foot.style.height = '80px';
    foot.style.borderTop = '1px solid #cccccc';
    foot.style.position = 'relative';
    foot.style.marginTop = '30px';

    // 创建左侧标签模块
    var artTag = document.createElement('div');
    artTag.style.width = '70%';
    artTag.style.height = '20px';// 100%
    artTag.style.position = 'absolute';
    artTag.style.top = '50%';//0
    artTag.style.transform = 'translateY(-50%)';
    artTag.style.left = '0';

    // 添加文章标签
    var tagIcon = createTagIcon();
    artTag.appendChild(tagIcon);
    for (var i=0;i<tags.length;i++){
        var tag = createTag(tags[i]);
        artTag.appendChild(tag);
    }
    foot.appendChild(artTag);

    // 创建右侧展开全文按钮
    var artFullTextBtn = document.createElement('a');
    artFullTextBtn.style.cursor = 'pointer';
    artFullTextBtn.style.display = 'block';
    artFullTextBtn.innerText = '展开全文 >>';
    artFullTextBtn.style.width = '80px';
    artFullTextBtn.style.height = '25px';
    artFullTextBtn.style.lineHeight = '25px';
    artFullTextBtn.style.fontSize = '13px';
    artFullTextBtn.style.color = 'white';
    artFullTextBtn.style.backgroundColor = '#4d4d4d';
    artFullTextBtn.style.borderRadius = '3px';
    artFullTextBtn.style.textAlign = 'center';
    artFullTextBtn.style.position = 'absolute';
    artFullTextBtn.style.top = '50%';
    artFullTextBtn.style.right = '0';
    artFullTextBtn.style.transform = 'translateY(-50%)';
    foot.appendChild(artFullTextBtn);

    artFullTextBtn.onmouseover = function () {
        artFullTextBtn.style.backgroundColor = 'black';
    }
    artFullTextBtn.onmouseout = function () {
        artFullTextBtn.style.backgroundColor = '#4d4d4d';
    }
    artFullTextBtn.onclick = function () {
        alert('0')
    }

    return foot;
}

// 查看更多按钮
function createMoreBtn() {
    var a = document.createElement('a');
    a.innerText = 'more >>';
    a.style.color = '#1d88ca';
    // a.style.marginTop = '30px';
    a.style.cursor = 'pointer';
    return a;
}

// 正文
function createArtContent(artText) {
    var div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '250px';
    div.innerHTML = marked(artText);
    div.style.marginTop = '30px';
    // div.style.backgroundColor = 'purple';
    div.style.overflow = 'hidden';
    div.style.lineHeight = '25px';
    // 不换行
    // div.style.whiteSpace = 'nowrap';
    // div.style.textOverflow = 'ellipsis';
    // div.style.overflow = 'hidden';
    return div;
}

// 创建第一张配图
function createPicture(imaName) {
    var img = document.createElement('img');
    img.style.width = '400px';
    img.style.height = '250px';
    img.setAttribute('src',imaName);
    img.style.marginTop = '20px';
    return img;
}

// 创建标题
function createTitle(title) {
    var titleDiv = document.createElement('div');
    titleDiv.innerHTML = marked(title);
    return titleDiv;
}

// 创建文章左侧黑色竖线条
function createLeftLine() {
    var leftLine = document.createElement('div');
    leftLine.style.width = '5px';
    leftLine.style.height = '80px';
    leftLine.style.position = 'absolute';
    leftLine.style.left = '0';
    leftLine.style.top = '0';
    leftLine.style.backgroundColor = 'black';
    return leftLine;
}

// 快速创建文章-li
function createLi() {
    var li = document.createElement('li');
    content_articles.appendChild(li);
    li.style.backgroundColor = 'white';
    // li.style.width = '100%';
    li.style.height = '820px';//765
    li.style.position = 'relative';
    li.style.marginTop = '30px';
    li.style.marginLeft = '30px';
    li.style.marginRight = '30px';
    li.style.padding = '30px 60px 0px 60px';
    li.style.boxSizing = 'border-box';
    li.style.overflow = 'hidden';
    return li;
}

// html存在所有子元素时，调用此接口赋值文章数据
// 并且格式如下
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