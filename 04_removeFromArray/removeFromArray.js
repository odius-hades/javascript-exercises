function removeFromArray(arr,num,...moreNum){
    if(moreNum.length > 0){
        let arrDiff = arr.filter(x => !moreNum.includes(x));
        return arrDiff.filter(function(remove){
            return remove != num;
        });
    } else {
        return arr.filter(function(remove){
            return remove != num;
        });
    }
}
// Do not edit below this line
module.exports = removeFromArray;

//if arr.typeOf !== num.typeOf || arr.typeOf !== moreNum.typeOf