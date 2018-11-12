import {
    HTTP
} from "../util/http.js";

class ClassicModel extends HTTP {
    getLatest(sCallback) {
        this.request({
            url: 'classic/latest',
            success: response => {
                sCallback(response);
                this._setLatestIndex(response.index);
            }
        })
    }

    getClassic(index, nextOrprevious, sCallback) {
        this.request({
            url: "/classic/" + index + "/" + nextOrprevious,
            success: response => {
                sCallback(response);
            }
        })
    }

    isFirst(index) {
        return index == 1 ? true : false
    }

    isLatest(index) {
        let latestIndex = this._getLatestIndex();
        return latestIndex == index ? true : false;
    }

    _setLatestIndex(index) {
        wx.setStorageSync("latest", index);
    }

    _getLatestIndex() {
        let index = wx.getStorageSync("latest");
        return index;
    }
}

export {
    ClassicModel
};