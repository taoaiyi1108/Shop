import {
    HTTP
} from "../util/http.js";

class ClassicModel extends HTTP {
    getLatest(sCallback) {
        this.request({
            url: 'classic/latest',
            success: response => {
                sCallback(response);
            }
        })
    }
}

export { ClassicModel };