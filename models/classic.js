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
                let key = this._getKey(response.index);
                wx.setStorageSync(key, response);
            }
        })
    }

    getClassic(index, nextOrprevious, sCallback) {
        let key = nextOrprevious == "next" ? this._getKey(index + 1) : this._getKey(index - 1);
        let classic = wx.getStorageSync(key);
        if (!classic) {
            this.request({
                url: "/classic/" + index + "/" + nextOrprevious,
                success: response => {
                    wx.setStorageSync(this._getKey(response.index), response)
                    sCallback(response);
                }
            })
        } else {
            sCallback(classic);
        }
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

    _getKey(index) {
        let key = "classic-" + index;
        return key;
    }
}

export {
    ClassicModel
};