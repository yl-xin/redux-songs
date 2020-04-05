import {combineReducers} from 'redux'; // combineReducers is a named export in docs


const songsReducer = ()=>{
    // return an array of objects where every object is a song
    return [
        {title:'Amateur',duration:'3:01'},
        {title:'Being Alive',duration:'5:07'},
        {title:'Devil or Angel',duration:'2:18'},
        {title:'I want it that way',duration:'1:45'},
    ]
}

const selectedSongReducer =(selectedSong=null,action) =>{
    if (action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
});