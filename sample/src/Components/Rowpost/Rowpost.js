import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import axios from '../Axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import Youtube from 'react-youtube';




function Rowpost(props) {
     const [movies, setMovies] = useState([])
     const [urlId,setUrlId] = useState('')
   useEffect(()=>
   axios.get(props.url).then(Response=>{
       console.log(Response.data.results)
       setMovies(Response.data.results)
   }))
  
   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
        
  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-us`).then(Response=>{
        if(Response.data.results.length!==0){
            setUrlId(Response.data.results[0])
        }else{
            console.log('Array empty')
        }
    })
  }

    return (
        
        <div className='row'>
            
            <h2>{props.title}</h2>
            <div className="posters">
                
                {movies.map((obj)=>
               
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
                
                )}
              
            </div>

            { urlId && <Youtube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default Rowpost
