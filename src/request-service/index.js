import {baseUrl} from "../config";

export class Api {
    get(url) {
        return fetch(baseUrl + url)
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}

const api = new Api();
export { api };
