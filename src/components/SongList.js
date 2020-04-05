import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'; // redux doesn't auto detect action, it treats it as a normal function

class SongList extends Component {
    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div className='item' key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={()=>{this.props.selectSong(song)}}
                        >Select</button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>

            );
        });
    }


    render(){
        // console.log(this.props.songs);
        // console.log(this.props);
    return <div className="ui divided list"> {this.renderList()}</div>;
    }
}

const mapStateToProps = (state)=>{
    // console.log(state);
    return {songs:state.songs};
}
// pass action creator into connect() function help call dispatch funtion
export default connect(mapStateToProps,{
    selectSong:selectSong
})(SongList);