
var bindAllEvents = function() {
	let clickEvents = {
		'#id-icon-play'        : musicPlay,
		'#id-icon-pause'       : musicPause,
		'#id-icon-play-next': playNext,
		'#id-icon-play-pre': playPre,
		'.play-list'           : listClick,
		'.icon-circle'         : playMode,
		'.icon-volume'         : volMute,
		'.play-list-head th'   : sortTable,
		'.likes': likeToggle,
	}
	let keyupEvents = {
		'.list-search': searchMusic,
	}
	let inputEvents = {
		'#id-time-bar'  : adjustTime,
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
		click     : clickEvents,
		input     : inputEvents,
		ended     : endedEvents,
		canplay   : canplayEvents,
		timeupdate: timeupdateEvents,
		keyup     : keyupEvents,
	}
	var allEventKeys = Object.keys(allEvents)
	for (var j = 0; j < allEventKeys.length; j++) {
		let eventName = allEventKeys[j]
		let singleEvents = allEvents[eventName]
		let keys = Object.keys(singleEvents)
		for (var i = 0; i < keys.length; i++) {
			let sel = keys[i]
			bindEvent(sel, eventName, function (event) {
				singleEvents[sel](event)
			})
		}
	}
}