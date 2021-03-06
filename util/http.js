import config from '../config.js';
// 记录错误码
const tips = {
    1: '抱歉出现了一个错误',
    1005: 'appkey无效',
    3000: '期刊不存在'
}

class HTTP {
    request(params) {
        // url, data, method
        if (!params.method) {
            params.method = "GET"
        }
        wx.request({
            url: config.api_base_url + params.url,
            method: params.method,
            data: params.data,
            header: {
                "content-Type": "application/json",
                "appkey": config.appkey
            },
            success: response => {
                let code = response.statusCode.toString();
                if (code.startsWith("2")) {
                    // 判断 success 是否存在 
                    params.success && params.success(response.data);
                } else {
                    let error_code = response.data.error_code;
                    this._show_error(error_code);
                }
            },
            fail: err => {
                this._show_error(1);
            }
        })
    }

    _show_error(error_code) {
        if (!error_code) {
            error_code = 1;
        }
        wx.showToast({
            title: tips[error_code],
            icon: "none",
            duration: 2000
        })
    }
}

export {
    HTTP
};