import config from '../config.js';
// 记录错误码
const tips = {
    1: '抱歉出现了一个错误',
    1005: 'appkey无效',
    3000: '期刊不存在'
}

class HTTP {
    request({
        url,
        data = {},
        method = "GET"
    }) {
        // ES6 的解构赋值 {url, data = {}, mehtod = "GET"}
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method)
        })
    }

    _request(url, resolve, reject, data = {}, method = "GET") {
        // url, data, method
        wx.request({
            url: config.api_base_url + url,
            method: method,
            data: data,
            header: {
                "content-Type": "application/json",
                "appkey": config.appkey
            },
            success: response => {
                const code = response.statusCode.toString();
                if (code.startsWith("2")) {
                    resolve(response.data);
                } else {
                    const error_code = response.data.error_code;
                    this._show_error(error_code);
                    reject(); // 只是改变promise的状态 不需要把错误的信息传出去
                }
            },
            fail: err => {
                this._show_error(1);
                reject(); // 只是改变promise的状态 不需要把错误的信息传出去
            }
        })
    }

    _show_error(error_code) {
        if (!error_code) {
            error_code = 1;
        }
        const tip = tips[error_code];
        wx.showToast({
            title: tip ? tip : tips[1],
            icon: "none",
            duration: 2000
        })
    }
}

export {
    HTTP
};