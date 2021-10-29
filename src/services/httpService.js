import axios from "axios";
import env from "react-dotenv";

const url = env.URL;
const params = {
    api_key: env.API_KEY,
    language: 'tr-TR',
    page: 1
}

const getRequest = async (uri) => {
    const requestUrl = url+uri;
    return await axios.get(requestUrl, {params: params});
}

export {getRequest};