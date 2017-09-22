var addMusicList = function () {
    for (var i = 0; i < musicList.length; i++) {
        var m = musicList[i]
        var name = m.name
        var artist = m.artist
        var album = m.album
        var template =
            `
            <tr class="play-list-song">
	            <td class='likes'>
	                <i class="iconfont icon-like">&#xe631;</i>
		        </td>
                <td class="song-name">${name}</td>
                <td class="song-artist">${artist}</td>
                <td class="song-album">${album}</td>
            </tr>
            `
        appendHtml(dqs('tbody'), template)
    }
}

var initHtml = function () {
    addMusicList()
    songName = dqs('.song-name')
    songArtist = dqs('.song-artist')
}