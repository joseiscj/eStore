import axios from "axios";

class BaseService {
    constructor() {
      this.baseUrl = 'http://localhost:3001'
    }

    getProducts = async path => {
        let url = `${this.baseUrl}${path}`;
        let response = await axios.get(url)
        .catch(error => console.log('[AXIOS] ERROR ' + error));

        return response;
    }
}

  export default (new BaseService());


// const api = axios.create(
//     { baseURL: "http://localhost:3001" } );

// export default api;