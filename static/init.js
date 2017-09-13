/**
 * Created by yongzhi on 2017/9/13.
 */

var addMusicList = function () {
    for (var i = 0; i < musicList.length; i++) {
        var name = musicList[i].name
        var artist = musicList[i].artist
        var album = musicList[i].album
        var template =
            `
            <tr class="play-list-song">
                <td class="song-name">${name}</td>
                <td class="song-artist">${artist}</td>
                <td class="song-album">${album}</td>
            </tr>
            `
        appendHtml(dqs('tbody'), template)
    }
}

var addLikeIcon = function() {
    var likesIcon = `
        <td class='likes'>
            <img src="icon/like.png" class="icon-like hidden">
            <img src="icon/unlike.png" class="icon-unlike">
        </td>
    `
// 喜欢按钮（事件委托，在事先存在的父元素上绑定事件）
    var tr = dqs('tbody tr')
    for (var i = 0; i < tr.length; i++){
        tr[i].insertAdjacentHTML('afterbegin', likesIcon)
    }
}
var initHtml =function () {
    addMusicList()
    addLikeIcon()
    songName = dqs('.song-name')
    songArtist = dqs('.song-artist')
}