
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
            dqs('.plate-past').src = pastCover
            dqs('.plate-now').src = cover
            dqs('.plate-next').src = NextCover
            musicCover.src = cover
            music.src = song
            break
        }
    }
}

var musicPlay = function(){
	addClass('hidden', '#id-icon-play')
	removeClass('hidden', '#id-icon-pause')
	addClass('rotated', '.music-cover')
	music.play()
}

var musicPause = function() {
	removeClass('hidden', '#id-icon-play')
	addClass('hidden', '#id-icon-pause')
	removeClass('rotated', '.music-cover')
	music.pause()
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

var updataTime = function () {
    var bili = music.currentTime / music.duration
    dqs('#id-time-bar').value = bili * 100
    dqs('#id-current-time').innerHTML = transTime(music.currentTime)
    //如果是时间结束，并且是非单曲循环，自动下一曲
    if (music.currentTime === music.duration && !music.loop){
        var nextIcon = dqs('#id-icon-play-forward')
        nextIcon.click()
    }
}

var listClick = function(event) {
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
}

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

var playNext = function () {
	changeMusic('next')
}

var playPre = function () {
	changeMusic('pre')
}

var playMode = function () {
	toggleClass('.icon-circle', 'hidden')
	music.loop = !music.loop
}

var volMute =function () {
	toggleClass('.icon-volume', 'hidden')
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
