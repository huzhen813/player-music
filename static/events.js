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
    bindEvent('#id-icon-play-forward', 'click', function (event){
        changeMusic('next')
    })
    bindEvent('#id-icon-play-back', 'click', function (event){
        changeMusic('pre')
    })
    bindEvent('.play-list', 'click', function(event){
        listClick(event)
    })
}

var cssEvent = function() {
    
    bindEvent(music, 'canplay', function(event){
        dqs('#id-total-time').innerHTML = transTime(music.duration)
    })
    bindEvent(music, 'timeupdate', function(event){
        dqs('#id-current-time').innerHTML = transTime(music.currentTime)
    })
    bindEvent('.play-list', 'click', function (event) {
        likeToggle(event)
    })
    // 播放模式：目前只有单曲循环和列表循环
    bindEvent('.icon-circle', 'click', function(event){
        toggleClass('.icon-circle', 'hidden')
        music.loop = !music.loop
    })
// TODO---1.chrome不支持currentTime设置，返回0。
// 音量控制，效果
    bindEvent('.icon-volume', 'click', function(event){
        toggleClass('.icon-volume', 'hidden')
        music.muted = !music.muted
    })
}

var functionEvent = function () {
    bindEvent('.play-list-head th', 'click', function (event) {
        sortTable(event)
        addClass('tbody tr', 'play-list-song')
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