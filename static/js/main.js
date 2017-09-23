var initialize = function () {
    initHtml()
    music.volume = 0.1
    mode = 1
}

var __main = function () {
    music = dqs('#id-music-playing')
    // TODO，给每个DOM添加src
    initialize()
    bindAllEvents()
    
    setInterval(function () {
        updataTime()
    }, 1000)
}

__main()
