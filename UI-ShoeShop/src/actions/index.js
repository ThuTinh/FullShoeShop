import * as Types from '../constants/actionType'
import callApi from '../utils/apiCaller'

export const actGetSongsRequest = () => {
    return (dispatch) => {
        return callApi('songs', 'GET', null).then(res => {
            dispatch(actGetSongs(res.data));
            console.log(res);

        });

    }
}

export const actDeleteSongRequest = (id) => {
    return (dispatch) => {
        return callApi(`songs/${id}`, 'DELETE', null).then(res => {
            dispatch(actGetSongsRequest());
        })
    }
}

export const actCreateSongRequest = (song) => {
    return (dispatch) => {
        return callApi('songs', 'POST', {
            nameSong: song.nameSong,
            singer: song.singer,
            composer: song.composer,
            releaseYear: song.releaseYear
        }).then(res => {
            dispatch(actGetSongsRequest());
        })
    }
}

export const actUpdateSongRequest = (song, id)=>{
    return (dispatch)=>{
        return callApi(`songs/${id}`, 'PUT',song).then(res=>{
            dispatch(actGetSongsRequest());
        })
    }
}

export const actCreateSong = (song) => {
    return {
        type: Types.CREATE_SONG,
        song
    }

}
export const actGetSongs = (songs) => {
    return {
        type: Types.GET_SONGS,
        songs
    }
}
export const actDeleteSong = (id) => {
    return {
        type: Types.DELETE_SONG,
        id
    }
}