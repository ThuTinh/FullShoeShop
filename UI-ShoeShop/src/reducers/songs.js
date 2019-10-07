import *as Types from '../constants/actionType'

var inintState = [
    // {
    //     id:1,
    //     nameSong: 'mot con heo',
    //     singer: 'Thu Tinh',
    //     composition: 'Cho Hoi',
    //     releaseYear: 2019
    // },
    // {
    //     id:2,
    //     nameSong: 'mot con heo',
    //     singer: 'Thu Tinh',
    //     composition: 'Cho Hoi',
    //     releaseYear: 2019
    // },
    // {
    //     id:3,
    //     nameSong: 'mot con heo',
    //     singer: 'Thu Tinh',
    //     composition: 'Cho Hoi',
    //     releaseYear: 2019
    // }


]

const songs = (state = inintState, action) => {

    switch (action.type) {
        case Types.GET_SONGS:
            state = action.songs;
            return [...state];
        case Types.DELETE_SONG:
            if (state.length >= 0) {
                let i = findIndex(state, action.id);
                if (action.id != -1) {
                    state = state.splice(action.id, 1);
                }
            }

            return [...state];
            break;
        case Types.UPDATE_SONG:
            break;
        case Types.CREATE_SONG:
            state.push(action.song);
            return [...state]
            break;
        default:
            return [...state];

    }
}

var findIndex = (songs, id) => {
    var result = -1;
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].id === id) {
            result = i;
            break;
        }
    }
    return result;

}
export default songs;
