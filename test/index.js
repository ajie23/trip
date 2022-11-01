function debounce(fn,delay){
    let timer=null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timeout=setTimeout(() => {
            fn.apply(this)
        }, delay);
    }
}

function throttle(fn){
    let timer=null
    return function(){
        if(timer) return;
        timer=setTimeout(()=>{fn.apply(this,arguments);timer=null},1000)
    }
}