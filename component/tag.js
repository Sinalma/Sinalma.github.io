/**
 * Created by apple on 27/08/2017.
 */
// 快速创建标签

// window.onload = function () {

    // var content = document.getElementById('content');

    // var tags = new Array("旧事","原创","swift");
    // for (var i=0;i<tags.length;i++){
    //     var tag = createTag(tags[i]);
    //     // tag.float = left;
    //     tag.style.display = 'inline-block';
    //     tag.style.marginLeft = '20px';
    //     content.appendChild(tag);
    // }
// }

/**
 * @method 同时创建多个文章标签
 * @description 实现细节 : 一个div为父元素，内有一个利用border实现的三角，和利用radius实现的圆点，
 * 文字利用a标签包裹，不设置宽度，并padding向右移动
 * @param tags 存放标签名称的数组
 * @param superV 显示标签的父元素
 */
function createTags(tags,superV) {
    for (var i=0;i<tags.length;i++){
        var tag = createTag(tags[i]);
        tag.style.display = 'inline-block';
        tag.style.marginLeft = '20px';
        superV.appendChild(tag);
    }
}

/**
 * @method 创建单个标签
 * @param name 标签名称
 * @return {Element} 自定义的标签元素
 */
function createTag(name){
    var tag = document.createElement('div');
    tag.style.backgroundColor = '#b98f6e';
    tag.style.width = '50px';
    tag.style.height = '20px';
    tag.style.position = 'relative';
    // tag.style.marginTop = '100px';
    tag.style.borderBottomRightRadius = '5px';
    tag.style.borderTopRightRadius = '5px';
    
    var circle = createCircle();
    var triangle = createTriangle();
    var text_a = createText();
    text_a.innerText = name;
    tag.appendChild(triangle);
    tag.appendChild(circle);
    tag.appendChild(text_a);

    // 事件
    tag.style.cursor = 'pointer';
    tag.onmouseover = function () {
        tag.style.opacity = '0.7';
    }
    tag.onmouseout = function () {
        tag.style.opacity = '1';
    }
    tag.onclick = function () {
        var searchBar = $('tools_search');
        searchBar.value = "#"+tag.textContent;
    }
    return tag;
}

function createCircle() {
    var circle = document.createElement('div');
    circle.style.backgroundColor = 'white';
    circle.style.width = '5px';
    circle.style.height = '5px';
    circle.style.borderRadius = '2.5px';
    circle.style.position = 'absolute';
    circle.style.top = '50%';
    circle.style.left = '0';
    circle.style.transform = 'translateY(-50%)';
    return circle;
}

function createTriangle() {
    var triangle = document.createElement('div');
    triangle.style.width = '0';
    triangle.style.height = '0';
    triangle.style.borderTop = '10px solid transparent';
    triangle.style.borderLeft = '10px solid transparent';
    triangle.style.borderRight = '10px solid #b98f6e';
    // triangle.style.borderRight = '10px solid red';
    triangle.style.borderBottom = '10px solid transparent';
    triangle.style.position = 'absolute';
    triangle.style.left = '-20px';
    triangle.style.top = '0';
    return triangle;
}

function createText() {
    var text_a = document.createElement('a');
    text_a.style.backgroundColor = '#b98f6e';
    text_a.style.height = '100%';
    text_a.style.color = 'white';
    text_a.style.fontSize = '14px';
    text_a.style.position = 'absolute';
    text_a.style.left = '10px';
    text_a.style.top = '50%';
    text_a.style.transform = 'translateY(-50%)';
    text_a.style.textDecoration = 'none';
    text_a.style.borderBottomRightRadius = '5px';
    text_a.style.borderTopRightRadius = '5px';
    text_a.style.paddingRight = '10px';
    text_a.style.boxSizing = 'border-box';
    return text_a;
}