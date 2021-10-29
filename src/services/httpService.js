import axios from "axios";

const url = 'https://api.themoviedb.org/3/';
const apikey = 'fbe256cf90fcadaa7dce241db14ae31c';
const language = 'tr-TR';

const getStreamingMovie = async () => {
    const requestUrl = url+'movie/now_playing';
    const params = {
        api_key: apikey,
        language: language,
        page: Math.floor(Math.random() * 10)+1
    };
    const response = await axios.get(requestUrl, {params: params});
    return response;
}

const getPopularTv = async () => {
    const requestUrl = url+'tv/popular';
    const params = {
        api_key: apikey,
        language: language,
        page: Math.floor(Math.random() * 10)+1
    };
    const response = await axios.get(requestUrl, {params: params});
    return response;
}

const getPopularMovie = async () => {
    const requestUrl = url+'movie/popular';
    const params = {
        api_key: apikey,
        language: language,
        page: Math.floor(Math.random() * 10)+1
    };
    const response = await axios.get(requestUrl, {params: params});
    return response;
}

const getTrends = async (type) => {
    const requestUrl = url+'trending/all/'+type
    const params = {
        api_key: apikey,
        language: language,
        page: Math.floor(Math.random() * 10)+1
    };
    const response = await axios.get(requestUrl, {params: params});
    return response
}

export {getStreamingMovie, getPopularTv, getPopularMovie, getTrends};