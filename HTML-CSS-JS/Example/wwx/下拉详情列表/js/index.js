// title_list
let title_list;
let salmon_content;

// skyblue

let skyblue_content;

// 获取slateblue

let slateblue_content;

// content列表
let content_list = [];



// 展开收起函数
function unfold_stow(content) {
    for (let i = 0; i < content_list.length; i++) {
        if (content_list[i] != content) {
            content_list[i].style.height = "0px"
        } else {
            if (content.style.height === "80px") {
                content.style.height = "0px"
            } else {
                content.style.height = "80px"
            }
        }
    }
}

window.onload = function () {

    // 获取title_list
    title_list = document.querySelectorAll("div.list_item_title");
    salmon_content = document.querySelectorAll("div.list_item1 > div")[1];

    title_list[0].onclick = function () {
        unfold_stow(salmon_content)
    }



    // 获取skyblue
    skyblue_content = document.querySelectorAll("div.list_item2 > div")[1];

    title_list[1].onclick = function () {
        unfold_stow(skyblue_content)
    }


    // 获取slateblue
    slateblue_content = document.querySelectorAll("div.list_item3 > div")[1];

    title_list[2].onclick = function () {
        unfold_stow(slateblue_content)
    }


    content_list = [salmon_content, skyblue_content, slateblue_content]


}