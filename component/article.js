/**
 * Created by apple on 27/08/2017.
 */
/**
 * @method : 创建文章
 * @description : 内层是用li实现一篇文章的缩略显示
 * @param title : 文章的标题
 * @param imgN : 第一张插图的名称，需要相对路径
 * @param artText : 文章的正文，markdown格式
 * @param tags : 文章需要添加的标签
 */
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

// 创建标签模块中的标签图标
function createTagIcon() {
    var tagIcon = document.createElement('img');
    tagIcon.setAttribute('src','images/tagicon.png');
    tagIcon.style.width = '16px';
    tagIcon.style.height = '16px';
    tagIcon.style.float = 'left';
    tagIcon.style.marginTop = '2.5px';

    return tagIcon;
}

// 出啊姑娘就爱你文章的底部模块
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

    // 添加文章标签模块
    var tagIcon = createTagIcon();
    artTag.appendChild(tagIcon);
    // 添加标签
    createTags(tags,artTag);
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

// 创建文章内容结尾的'查看更多'按钮
function createMoreBtn() {
    var a = document.createElement('a');
    a.innerText = 'more >>';
    a.style.color = '#1d88ca';
    a.style.cursor = 'pointer';
    return a;
}

// 创建正文
function createArtContent(artText) {
    var div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '250px';
    div.innerHTML = marked(artText);
    div.style.marginTop = '30px';
    // div.style.backgroundColor = 'purple';
    div.style.overflow = 'hidden';
    div.style.lineHeight = '25px';
    // 不换行时开启
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

/***>>>>>>>>>>>>>>>>>>>>>>>>>>以下方法不推荐使用>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @method : 创建单个标签，不包含小圆点
 * @description : 不推荐使用，接口已改，导入tag.js,调用createTags方法创建多个标签
 * @param tagN : 标签内的文字
 */
// function createTag(tagN) {
//     var a = document.createElement('a');
//     a.style.backgroundColor = '#ba9575';
//     a.style.height = '20px';
//     a.style.lineHeight = '20px';
//     a.style.color = 'white';
//     a.style.fontSize = '11px';
//     a.style.marginLeft = '20px';
//     a.style.float = 'left';
//     a.style.paddingLeft = '10px';
//     a.style.paddingRight = '10px';
//     a.style.borderTopLeftRadius = '30px';
//     a.style.borderBottomLeftRadius = '30px';
//     a.style.borderTopRightRadius = '10px';
//     a.style.borderBottomRightRadius = '10px';
//     a.style.position = 'relative';
//     a.style.cursor = 'pointer';
//     a.onmouseover = function () {
//         a.style.opacity = '0.7';
//
//     }
//     a.onmouseout = function () {
//         a.style.opacity = '1';
//
//     }
//     a.innerText = tagN;
//     return a;
// }


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
/**
 * @method : html存在所有子元素时，调用此接口赋值文章数据
 * @description : 并且格式如上
 * @param i : ul中当前文章的索引
 * @param title : 文章标题文字
 * @param imgName : 第一种插图的名称
 * @param content : markdown格式的正文,目前不支持正文插入图片
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