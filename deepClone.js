deepClone(target){
    let copy =target instanceof Array ? []:{};
    for(key in target){
        let value =target[key]
        copy[key]=value&& typeof value ==='object' ? clone(value):value
    }
return copy

}