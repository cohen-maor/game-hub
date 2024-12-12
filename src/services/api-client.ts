import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '73fdec5d8dbd4b13866f45d910c6038a'
    }
});