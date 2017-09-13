/**
 * Created by yongzhi on 2017/9/13.
 */
var playEvent = function() {
    bindEvent('#id-icon-play', 'click', function () {
        musicPlay()
    })
    bindEvent('#id-icon-pause', 'click', function () {
        musicPause()
    })
    bindEvent(music, 'ended', function(event){
        playNext(event)
    })
    bindEvent(nextIcon, 'click', function (event){
        changeMusic('next')
    })
    bindEvent(preIcon, 'click', function (event){
        changeMusic('pre')
    })
    bindEvent(playList, 'click', function(event){
        listClick(event)
    })
}

var cssEvent = function() {
    bindEvent(music, 'canplay', function(event){
        totalTime.innerHTML = transTime(music.duration)
    })
    bindEvent(music, 'timeupdate', function(event){
        currentTime.innerHTML = transTime(music.currentTime)
    })
    bindEvent('.play-list', 'click', function (event) {
        likeToggle(event)
    })
    // 播放模式：目前只有单曲循环和列表循环
    bindEvent('.icon-circle', 'click', function(event){
        toggleClass(singleCircleIcon, 'hidden')
        toggleClass(listCircleIcon, 'hidden')
        music.loop = !music.loop
    })
// TODO---1.chrome不支持currentTime设置，返回0。
// 音量控制，效果
    bindEvent('.icon-volume', 'click', function(event){
        toggleClass(volumeIcon, 'hidden')
        toggleClass(volumeMuteIcon, 'hidden')
        music.muted = !music.muted
    })
}

var functionEvent = function () {
    bindEvent('.play-list-head th', 'click', function (event) {
        sortTable(event)
        var trs = dqs('tbody tr')
        addClass(trs, 'play-list-song')
    })
    bindEvent('.list-search', 'keyup', function(event){
        var search = event.target
        var v = search.value
        var res = dqs('tbody tr')
        searchTitle(v, res)
    })
    bindEvent('#id-time-bar', 'input', function(event) {
        music.currentTime = music.duration * event.target.value / 100
    })
    bindEvent('#id-volume-bar', 'input', function(event) {
        music.volume = event.target.value / 100
    })
}