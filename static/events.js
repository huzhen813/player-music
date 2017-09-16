
var bindAllEvents = function() {
	let clickEvents = {
		'#id-icon-play': musicPlay,
		'#id-icon-pause': musicPause,
		'#id-icon-play-forward': playNext,
		'#id-icon-play-forward': playPre,
		'.play-list': likeToggle,
		'.play-list': listClick,
		'.icon-circle': playMode,
		'.icon-volume': volMute,
		'.play-list-head th': sortTable,
	}
	let keyupEvents = {
		'.list-search': searchMusic,
	}
	let inputEvents = {
		'#id-time-bar': adjustTime,
		'#id-volume-bar': adjustVolume,
	}
	let endedEvents = {
		'#id-music-playing': playNext,
	}
	let canplayEvents = {
		'#id-music-playing': transCurrTime,
	}
	let timeupdateEvents = {
		'#id-music-playing': timeupdateText,
	}
	
	let allEvents = {
		click: clickEvents,
		input: inputEvents,
		ended: endedEvents,
		canplay: canplayEvents,
		timeupdate: timeupdateEvents,
		keyup: keyupEvents,
	}
	var allEventKeys = Object.keys(allEvents)
	for (var j = 0; j < allEventKeys.length; j++) {
		let eventName = allEventKeys[j]
		let divEvents = allEvents[eventName]
		let keys = Object.keys(divEvents)
		for (var i = 0; i < keys.length; i++) {
			let sel = keys[i]
			bindEvent(sel, eventName, function (event) {
				divEvents[sel](event)
			})
		}
	}
	// var eventName = 'clickEvents'.split('Events')[0]
	// var keys = Object.keys(clickEvents)
	// for (var i = 0; i < keys.length; i++) {
	// 	let sel = keys[i]
	// 	bindEvent(sel, 'click', function (event) {
	// 		clickEvents[sel](event)
	// 	})
	// }
    // bindEvent('#id-icon-play', 'click', function () {
    //     musicPlay()
    // })
    //
    // bindEvent('#id-icon-pause', 'click', function () {
    //     musicPause()
    // })
    
    // bindEvent(music, 'ended', function(event){
    //     playNext(event)
    // })
    
    // bindEvent('#id-icon-play-forward', 'click', function (event){
    //     changeMusic('next')
    // })
    // bindEvent('#id-icon-play-back', 'click', function (event){
    //     changeMusic('pre')
    // })
    
    // bindEvent('.play-list', 'click', function(event){
    //     listClick(event)
    // })
}

var cssEvent = function() {
    // bindEvent(music, 'canplay', function(event){
	 //    transCurrTime(event)
    // })
    
    // bindEvent(music, 'timeupdate', function(event){
	 //    timeupdateText()
    // })
    
    // bindEvent('.play-list', 'click', function (event) {
    //     likeToggle(event)
    // })
    
    // 播放模式：目前只有单曲循环和列表循环
    // bindEvent('.icon-circle', 'click', function(event){
    //     toggleClass('.icon-circle', 'hidden')
    //     music.loop = !music.loop
    // })
// TODO---1.chrome不支持currentTime设置，返回0。
//     bindEvent('.icon-volume', 'click', function(event){
//         toggleClass('.icon-volume', 'hidden')
//         music.muted = !music.muted
//     })
}

var functionEvent = function () {
    // bindEvent('.play-list-head th', 'click', function (event) {
    //     sortTable(event)
    // })
    // bindEvent('.list-search', 'keyup', function(event){
	 //    searchMusic(event)
    // })
    // bindEvent('#id-time-bar', 'input', function(event) {
	 //    adjustTime(event)
    // })
    // bindEvent('#id-volume-bar', 'input', function(event) {
	 //    adjustVolume(event)
    // })
}