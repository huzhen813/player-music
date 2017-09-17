var initialize = function () {
    initHtml()
    music.volume = 0.1
    music.loop = false
}

var __main = function () {
    music = dqs('#id-music-playing')
    // TODO，给每个DOM添加src
    initialize()
    bindAllEvents()
    
    setInterval(function () {
        updataTime()
    }, 100)
}

__main()
