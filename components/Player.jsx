export const Player = ({fn,song }) => {
    return (
        <div>
            <button onClick={()=>{
                fn(false,null);
            }} className="btn btn-success">Back to Songs</button>
            <br />
            <br />
            <p>
                <img src={song.artworkUrl100} />
                <br />
                <br />
                <b>{song?.artistName} {song?.trackName}</b>
            </p> 
            <br />
            <br />
            <audio controls>
                <source src={song?.previewUrl} type="audio/mp4" />
                Your Browser does not support the audio element.
            </audio>
        </div>)
}