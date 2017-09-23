var findMusicNum = function () {
    for (var i = 0; i < songName.length; i++) {
        var a = informationName.innerText
        var b = songName[i].innerText
        if (b == a) {
            return i
        }
    }
}

var musicPlay = function () {
    addClass('hidden', '#id-icon-play')
    removeClass('hidden', '#id-icon-pause')
    addClass('rotated', '.music-cover')
    music.play()
}

var musicPause = function () {
    removeClass('hidden', '#id-icon-play')
    addClass('hidden', '#id-icon-pause')
    removeClass('rotated', '.music-cover')
    music.pause()
}

var updataTime = function (event) {
    var bili = music.currentTime / music.duration
    dqs('#id-time-bar').value = bili * 100
    dqs('#id-current-time').innerHTML = transTime(music.currentTime)
    //如果是时间结束，并且是非单曲循环，自动下一曲
    if (music.currentTime === music.duration && !music.loop) {
        var nextIcon = dqs('#id-icon-play-next')
        nextIcon.click()
    }
}

var listClick = function (event) {
    var target = event.target
    if (target.classList.contains('song-name')) {
        var song = 'music/' + target.innerText + '.mp3'
        var cover = 'cover/' + target.innerText + '.jpg'
        informationName.innerText = target.innerText
        musicCover.src = cover
        music.src = song
        musicPlay()
    }
}

var likeToggle = function (event) {
    var target = event.target
    var condition = target.classList.contains('icon-like')
    if (condition) {
        toggleClass('icon-like-red', target)
    }
}

var findMusic = function () {
    var songNum = songName.length
    var index = findMusicNum()
    
    var pastMusicIndex = (index == 0) ? 1 : (index - mode ) % songNum
    var nextMusicIndex = (index + mode) % songNum
    
    var pastMusicName = songName[pastMusicIndex].innerText
    var nextMusicName = songName[nextMusicIndex].innerText
    var nowMusicName = songName[index].innerText
    var nowAuthorName = songArtist[index].innerText
    
    var coverPath = 'cover/' + nowMusicName + '.jpg'
    var pastCoverPath = 'cover/' + pastMusicName + '.jpg'
    var NextCoverPath = 'cover/' + nextMusicName + '.jpg'
    
    informationName.innerText = nowMusicName
    informationAuthor.innerText = nowAuthorName
    
    dqs('.plate-past').src = pastCoverPath
    dqs('.plate-now').src = coverPath
    dqs('.plate-next').src = NextCoverPath
}

var changeMusic = function (direct) {
    var index = findMusicNum()
    var songNum = songName.length
    if (direct == 'next') {
        var index = (index + mode) % songNum
    } else {
        var index = (songNum * 100 + index - mode) % songNum
    }
    var f = songName[index].innerText
    var song = 'music/' + f + '.mp3'
    var cover = 'cover/' + f + '.jpg'
    informationName.innerText = f
    musicCover.src = cover
    music.src = song
    findMusic()
    musicPlay()
}

var playNext = function (event) {
    changeMusic('next')
}

var playPre = function (event) {
    changeMusic('pre')
}

var iconMode = function (event) {
    toggleClass('none', '.play-mode')
}

var playMode = function (event) {
    var target = event.target
    var songNum = songName.length
    var randomMode = randomBetween(0, songNum)
    var allMode = {
        loop  : 0,
        circle: 1,
        random: randomMode,
        order : songNum,
    }
    var key = target.dataset.value
    mode = allMode[key]
    console.log('mode', mode)
    dqs('.icon-mode').innerText = target.innerText
    //music.loop = !music.loop
    addClass('none', '.play-mode')
}
var volMute = function (event) {
    toggleClass('hidden', '.icon-volume')
    music.muted = !music.muted
}

var searchMusic = function (event) {
    var search = event.target
    var v = search.value
    var res = dqs('tbody tr')
    searchTitle(v, res)
}

var adjustTime = function (event) {
    music.currentTime = music.duration * event.target.value / 100
}

var adjustVolume = function (event) {
    music.volume = event.target.value / 100
}

var transCurrTime = function (event) {
    dqs('#id-total-time').innerHTML = transTime(music.duration)
}

var timeupdateText = function (event) {
    dqs('#id-current-time').innerHTML = transTime(music.currentTime)
}
