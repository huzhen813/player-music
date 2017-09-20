
var addMusicList = function () {
    var allDom = ''
    for (var i = 0; i < musicList.length; i++) {
    	var m = musicList[i]
        var name = m.name
        var artist = m.artist
        var album = m.album
        var status = local - undi
        var template =
            `
            <tr class="play-list-song" data-id=${id}>
	            <td class='likes ${status}'>
		            <img src="icon/like.png" class="icon-like hidden">
		            <img src="icon/unlike.png" class="icon-unlike">
		        </td>
                <td class="song-name">${name}</td>
                <td class="song-artist">${artist}</td>
                <td class="song-album">${album}</td>
            </tr>
            `
        var allDom = allDom + template
    }
    appendHtml(dqs('tbody'), allDom)
}

var initHtml =function () {
    addMusicList()
    songName = dqs('.song-name')
    songArtist = dqs('.song-artist')
}