<template>
    <div id="app">
        <div id="box">
            <ul id="tit">多因素将令美国经济复苏动能减弱</ul>
            <ul id="content">
                由于新冠变异病毒奥密克戎毒株在多国加速传播，投资者担忧情绪近期再度上升。分析指出，在疫情加速传播、关键支出法案在美国国会遇阻以及美联储将加速货币政策转向等因素的叠加作用下，美国经济增长动力或将减弱。
            </ul>
            <picture>
            <img src="../assets/pic1.png">
            </picture>
        </div>
        
        
        <ul id="date">2021</ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'newsItem',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
    #box{
        width:80%;
        height: 80%;
        align-items: center;
        flex:50%;
    }
    #tit{
        position:center;
        font-size: 18px;
        width:80%;
        padding: 0px;
        margin:0 10%; 
    }

    #content{
        font-size: 13px;
        padding: 0;
        width:80%;
        margin:0 10%;
    }

    picture{
        height:80%;
        width:20%;
        align-items: right;
        margin: 0 5%;
    }

    #date{
        width: 100%;
    }

</style>
