// 节流
export const throttle = (fn,delay = 1000) => {

    // 上一次的执行时间
    let lastTime = 0
    return function (){
        let _this = this
        let _arguments = arguments
        let now = new Date().getTime()
        // 只有当距离上一次执行超过了delay才能再次执行

        if(now - lastTime > delay){
            fn.apply(_this,_arguments)
            lastTime = now
        }
    }
}