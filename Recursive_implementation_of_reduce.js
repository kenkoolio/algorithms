function reduce(arr,fn,acc=0,i=0) {
    if(i >= arr.length){return acc}
    return reduce(arr,fn,fn(acc,arr[i],i,arr),++i)
}