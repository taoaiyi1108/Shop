// components/search/index.js
import {
    KeywordModel
} from '../../models/keyword.js';

import {
    BookModel
} from '../../models/book.js';

const keywordModel = new KeywordModel();
const bookModel = new BookModel();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        more: {
            type: String,
            observer:"_load_more"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        historyWords: [],
        hotWords: [],
        dataArray: [],
        searching: false,
        q: ''
    },

    attached() {
        // const historyWords = keywordModel.getHistory();
        // const hotWords = keywordModel.getHot();
        this.setData({
            historyWords: keywordModel.getHistory()
        });
        keywordModel.getHot().then(res => {
            this.setData({
                hotWords: res.hot
            });
        })
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onCancel(event) {
            this.triggerEvent('cancle', {}, {})
        },
        onConfirm(event) {
            this.setData({
                searching: true
            });
            const q = event.detail.value || event.detail.text;
            bookModel.search(0, q).then(res => {
                this.setData({
                    dataArray: res.books,
                    q: q
                });
                keywordModel.addToHistory(q);
            });
        },
        onDelete(event) {
            this.setData({
                searching: false
            });
        },
        _load_more(){
            console.log(123)
        }
    }
})