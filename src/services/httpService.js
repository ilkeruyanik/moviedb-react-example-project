import axios from "axios";

const url = 'https://api.themoviedb.org/3/';
const apikey = 'fbe256cf90fcadaa7dce241db14ae31c';
const language= 'tr-TR';

const params = {
    api_key: 'fbe256cf90fcadaa7dce241db14ae31c',
    language: 'tr-TR',
    page: 1
}

const getRequest = async (uri) => {
    const requestUrl = url+uri;
    return await axios.get(requestUrl, {params: params});
}

export {getRequest};