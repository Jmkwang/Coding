//min ≤ r ≤ max
function RandomNumBoth(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}

//min ≤ r < max
function RandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.floor(Rand * Range); //舍去
    return num;
}

//min < r ≤ max
function RandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    if(Math.round(Rand * Range)==0){       
      return Min + 1;
    }
    var num = Min + Math.round(Rand * Range);
    return num;
}

//min < r < max 
function RandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    if(Math.round(Rand * Range)==0){
      return Min + 1;
    }else if(Math.round(Rand * Max)==Max)
    {
      index++;
      return Max - 1;
    }else{
      var num = Min + Math.round(Rand * Range) - 1;
      return num;
    }
}