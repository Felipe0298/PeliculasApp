import axios from 'axios';
//Aca realizare las peticiones a la API

const movieDB = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie",
    params:{
       api_key:"9154a1cb8093afddf581316bd3d4f1aa",
       language: "es-ES"
    }
})

export default movieDB