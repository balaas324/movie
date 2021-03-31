import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"

export const MovieControls = ({movie, type}) => {
    const {removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched} = useContext(GlobalContext)
    return (
        <div className="inner-card controls">
            {type === 'watchlist' && (
                <>
                    <button 
                    className="ctrl-btn"
                    onClick={()=>addMovieToWatched(movie)}
                    >
                        eye
                    </button>

                    <button 
                     className="ctrl-btn"
                     onClick={() => removeMovieFromWatchlist(movie.id)}>
                        x
                    </button>
                    
                </>
            )}

            {type === 'watched' && (
                <> 
                    <button 
                     className="ctrl-btn"
                     onClick={()=>moveToWatchlist(movie)}
                    >
                        closed eye
                    </button>

                    <button 
                     className="ctrl-btn"
                     onClick={()=>removeFromWatched(movie.id)}
                    >
                        x
                    </button>
                </>
            )}
        </div>
    )
}
