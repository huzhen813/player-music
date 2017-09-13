
// 初始化
var initialize = function (){
    initHtml()
    music.volume = 0.1
    music.loop = false
}

var bindEvents = function () {
    playEvent()
    cssEvent()
    functionEvent()
}

var __main = function(){
    initialize()
    bindEvents()

    setInterval(function () {
        updataTime()
    }, 100)
}

__main()
