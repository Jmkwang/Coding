let images = [
       "images/1.jpg",
       "images/2.jpg",
       "images/3.jpg",
       "images/4.jpg",
       "images/5.jpg",
]
let imgDom;
let diansDOM;

let data = {
       currentIndex: 0,
       currentYuanIsKuan: true,
}

function changeDom() {
       let currentIndex = data.currentIndex;
       let currentYuanIsKuan = data.currentYuanIsKuan;
       imgDom.setAttribute("src", images[currentIndex]);  //change img src
       diansDOM[currentIndex].setAttribute("style", currentYuanIsKuan ? "width:60px" : "width:30px");

}

function setData(newData) {
       for (let key in newData) {
              data[key] = newData[key]
       }
       changeDom();
}

function limit(data, min, max) {
       if (data > max) {
              data = min
       }
       if (data < min) {
              data = max
       }
       return data;
}

$(function () {
       imgDom = document.getElementsByTagName("img")[0];
       diansDOM = document.getElementsByClassName("dians")[0].children;
       arrowL = document.getElementsByClassName("arrowL");  //*
       arrowR = document.getElementsByClassName("arrowR");  //*
       console.log(arrowL, arrowR);
       
       
       setData({ currentYuanIsKuan: true, currentIndex: 0 });

       timer = setInterval(function () {
              setData({ currentYuanIsKuan: false })
              setData({ currentYuanIsKuan: true, currentIndex: limit(data.currentIndex + 1, 0, 4) })
       }, 2000)

       for (let i = 0; i < diansDOM.length; i++) {
              diansDOM[i].onmouseenter = function () {
                     if (timer) {
                            clearInterval(timer)
                            timer = null
                     }
              }
              diansDOM[i].onmouseleave = function () {
                     if (timer) {
                            return;
                     }
                     timer = setInterval(function () {
                            setData({ currentYuanIsKuan: false })
                            setData({ currentYuanIsKuan: true, currentIndex: limit(data.currentIndex + 1, 0, 4) })
                     }, 2000)
              }

              diansDOM[i].onclick = function (event) {
                     let index = Number(event.target.getAttribute("indexself"))
                     setData({ currentYuanIsKuan: false })
                     setData({ currentYuanIsKuan: true, currentIndex: limit(index, 0, 4) })

              }

              
       }
       
       arrowL.onclick = function (){
              console.log("L");
              setData({ currentYuanIsKuan: false })
              setData({ currentYuanIsKuan: true, currentIndex: limit(data.currentIndex - 1, 0, 4)})
       }

       arrowR.onclick = function (){
              console.log("R");
              setData({ currentYuanIsKuan: false })
              setData({ currentYuanIsKuan: true, currentIndex: limit(data.currentIndex + 1, 0, 4)})
       }
})



