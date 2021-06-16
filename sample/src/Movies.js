import React,{ useEffect,useState } from 'react'
import axios from './Components/Axios'
import {imageUrl} from './Constants/Constants'

function Movies(props) {
    const [movie, setMovie] = useState()
    useEffect(()=>
   axios.get(props.url).then(Response=>{
       console.log(Response.data.results)
       setMovie(Response.data.results)
   }))

    

    return (
       
        <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}}
        className='banner'>
            
            <h1 className='title'>{movie ? movie.title :""}</h1>
           
         
          <h2>hi</h2>
        </div>
    )
}

export default Movies
