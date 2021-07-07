function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getNewIndexArr(count){
    let indexArr = [];
    let index;
    for(let i = 0; i < count; i++){
        do{
            index = random(0, count - 1)
        }while(index == indexArr.length || indexArr.includes(index))

        indexArr.push(index)
    }
    return indexArr
}

function dislocate(arr){
    let newArr = [];
    let newIndexArr = getNewIndexArr(arr.length);
    for(let i = 0; i < newIndexArr.length; i++){
        newArr.push(arr[newIndexArr[i]])
    }
    return newArr
}

console.log(dislocate([1,2,3,4]));