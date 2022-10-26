import axios from 'axios';

const API_KEY = '29924264-5d5e566662b34a1c46cf6af93';
const BASE_URL = 'https://pixabay.com/api/';


export const NewsApiService = async(query,pageNumber)=>{
  const fetchImages ={
    baseURL: BASE_URL,
    params:{
      q:query,
      key:API_KEY,
      image_type:"photo",
      orientation:"horizontal",
      page:pageNumber,
      per_page:12,
    }
  };

  const result = await axios(fetchImages);

  return result;
}