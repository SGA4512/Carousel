import axios from 'axios';
/*
    Using axios to make request to flickr API.
*/
export default axios.create({
    baseURL: 'https://www.flickr.com/services/rest/'
});