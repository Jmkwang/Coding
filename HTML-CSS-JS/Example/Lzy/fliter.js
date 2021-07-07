arr = [1,2,3,4,5,6,7];

function filter(arr, rule){
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        let val = arr[i];
        if(rule(val)){
            continue;
        } else {
            newArr.push(val);
        }
    }
    console.log(newArr);
}

// filter(arr, function(val){
//     //传入规则
//     return val > 3          
// })



function for_each(arr, funcs){
    for(let count = 0; count < arr.length; count++){
        funcs(count)
    }
}

for_each(arr, function(count){
    console.log(arr[count])
})