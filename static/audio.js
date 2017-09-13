
// 查找音乐
var findMusic = function (){
    for (var i = 0; i < songName.length; i++){
        var a = informationName.innerText
        var b = songName[i].innerText
        if (b == a){
            var currentMusicIndex = i % songName.length
            var pastMusicIndex = (currentMusicIndex - 1 + songName.length) % songName.length
            var nextMusicIndex = (currentMusicIndex + 1) % songName.length
            var pastMusicName = songName[pastMusicIndex].innerText
            var nextMusicName = songName[nextMusicIndex].innerText
            var nowMusicName = songName[currentMusicIndex].innerText
            var nowAuthorName = songArtist[currentMusicIndex].innerText
            var song = "music/" + nowMusicName + '.mp3'
            var cover = "cover/" + nowMusicName + '.jpg'
            var pastCover = "cover/" + pastMusicName + '.jpg'
            var NextCover = "cover/" + nextMusicName + '.jpg'
            informationName.innerText = nowMusicName
            informationAuthor.innerText = nowAuthorName
            platePast.src = pastCover
            plateNow.src = cover
            plateNext.src = NextCover
            musicCover.src = cover
            music.src = song
            break
        }
    }
}
// 音乐播放
var musicPlay = function(){
    music.play()
    playIcon.classList.add('hidden')
    pauseIcon.classList.remove('hidden')
    musicCover.classList.add('rotated')
}
// 音乐暂停
var musicPause = function() {
    music.pause()
    playIcon.classList.remove('hidden')
    pauseIcon.classList.add('hidden')
    musicCover.classList.remove('rotated')
}
var playNext = function() {
    
    for (var i = 0; i < songName.length; i++){
        var a = informationName.innerText
        var b = songName[i].innerText
        if (a == b){
            // 在此处设置播放结束后下一曲的序号
            // 可以设置音乐循环模式,将orderLoop的计算方式更换一下即可
            var orderLoop = (i + 1) % songName.length
            var f = songName[orderLoop].innerText
            var song = "music/" + f + '.mp3'
            var cover = "cover/" + f + '.jpg'
            informationName.innerText = f
            musicCover.src = cover
            music.src = song
            findMusic()
            musicPlay()
            break
        }
    }
}

// 播放进度实时更新(修改为歌曲播放时开启定时器，暂停和页面load时清除定时器)
var updataTime = function () {
    var musicBarWidth = musicBar.clientWidth
    var playedBarWidth = (music.currentTime / music.duration) * musicBarWidth
    playedBar.style.width = playedBarWidth + 'px'
    currentTime.innerHTML = transTime(music.currentTime)
    //如果是时间结束，并且是非单曲循环，自动下一曲
    if (music.currentTime === music.duration && !music.loop){
        nextIcon.click()
    }
}

// 播放模式：目前只有单曲循环和列表循环
listCircleIcon.addEventListener('click', function(event){
    singleCircleIcon.classList.remove('hidden')
    listCircleIcon.classList.add('hidden')
    music.loop = true
})
singleCircleIcon.addEventListener('click', function(event){
    singleCircleIcon.classList.add('hidden')
    listCircleIcon.classList.remove('hidden')
    music.loop = false
})

// 设置播放进度条
var timeControl = function (event) {
    var tw = musicBar.clientWidth
    var nt = (event.offsetX / tw) * music.duration;
    music.currentTime = nt;
    var pw = (music.currentTime / music.duration) * tw
    playedBar.style.width = pw + 'px'
}

// TODO---1.chrome不支持currentTime设置，返回0。

// 音量控制，效果
volumeIcon.addEventListener('mouseover', function(event){
    volumeBar.classList.remove('hidden')
})
volumeIcon.addEventListener('mouseout', function(event){
    volumeBar.classList.add('hidden')
})
volumeBar.addEventListener('mouseover', function(event){
    volumeBar.classList.remove('hidden')
})
volumeBar.addEventListener('mouseout', function(event){
    volumeBar.classList.add('hidden')
})
volumeMuteIcon.addEventListener('click', function(event){
    volumeIcon.classList.remove('hidden')
    volumeMuteIcon.classList.add('hidden')
    music.muted = false
})
volumeIcon.addEventListener('click', function(event){
    volumeIcon.classList.add('hidden')
    volumeMuteIcon.classList.remove('hidden')
    music.muted = true
})

var volumeControl = function (event) {
    var totalVolume = dqs('#id-total-volume')
    var targetWidth = totalVolume.clientWidth
    var newCurrentVolume = event.offsetX / targetWidth
    music.volume = newCurrentVolume
    var currentVolumeWidth = newCurrentVolume * targetWidth
    currentVolume.style.width = currentVolumeWidth + 'px'
}

// 歌曲列表点击，播放音乐
playList.addEventListener('click', function(event){
    var target = event.target
    if (target.classList.contains('song-name')){
        var song = "music/" + target.innerText + '.mp3'
        var cover = "cover/" + target.innerText + '.jpg'
        informationName.innerText = target.innerText
        musicCover.src = cover
        music.src = song
        findMusic()
        musicPlay()
    }
})

bindEvent('.list-search', 'keyup', function(event){
    var search = event.target
    var v = search.value
    var res = dqs('tbody tr')
    searchTitle(v, res)
})


var likeToggle = function (event) {
    var target = event.target
    var targetParent = target.parentElement
    var condition = targetParent.classList.contains('likes')
    if (condition) {
        var likeIcon = findElement(targetParent, '.icon-like')
        var unlikeIcon = findElement(targetParent, '.icon-unlike')
        toggleClass(likeIcon, 'hidden')
        toggleClass(unlikeIcon, 'hidden')
    }

}
// 音乐播放结束后播放下一首

// 切换歌曲，只需要找出当前music.src的值
var changeMusic = function (direct){
    if (music.attributes["src"]){
        var currentSrcIndex = 0
    } else {
        for (var i = 0; i < songName.length; i++){
            var b = informationName.innerText
            var c = songName[i].innerText
            if (c == b){
                var currentSrcIndex = i % songName.length
                break
                }
            }
        }
    if (direct === 'next'){
        var currentSrcIndex = (currentSrcIndex + 1) % songName.length
    } else {
        var currentSrcIndex = (currentSrcIndex - 1 + songName.length * 100) % songName.length
    }
    var f = songName[currentSrcIndex].innerText
    var song = "music/" + f + '.mp3'
    var cover = "cover/" + f + '.jpg'
    informationName.innerText = f
    musicCover.src = cover
    music.src = song
    findMusic()
    musicPlay()
}


// 初始化
var initialize = function (){
    initHtml()
    music.volume = 0.1
    currentVolume.style.width = '7px'
    // music.loop = true
}

var bindEvents = function () {
    bindEvent('.volume-bar', 'click', function (event){
        volumeControl(event)
    })
    
    bindEvent('.time-bar', 'click', function (event){
        timeControl(event)
    })
    // 给播放、暂停按钮绑定事件
    bindEvent('#id-icon-play', 'click', function () {
        musicPlay()
    })
    bindEvent('#id-icon-pause', 'click', function () {
        musicPause()
    })
    bindEvent(music, 'canplay', function(event){
        totalTime.innerHTML = transTime(music.duration)
    })
    bindEvent(music, 'timeupdate', function(event){
        currentTime.innerHTML = transTime(music.currentTime)
    })
    bindEvent(music, 'ended', function(event){
        playNext(event)
    })
    // 下一曲// 上一曲
    nextIcon.addEventListener('click', function (event){
        changeMusic('next')
    })
    preIcon.addEventListener('click', function (event){
        changeMusic('pre')
    })
    // 绑定排序事件
    bindEvent('.play-list-head th', 'click', function (event) {
        sortTable(event)
        var trs = dqs('tbody tr')
        addClass('play-list-song', trs)
    })
    bindEvent('.play-list', 'click', function (event) {
        likeToggle(event)
    })
}
var __main = function(){
    initialize()
    bindEvents()
    
    setInterval(function () {
        updataTime()
    }, 1000)
}
__main()
