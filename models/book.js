import {
    HTTP
} from '../util/http-p.js';

class BookModel extends HTTP {
    getHotList() {
        return this.request({
            url: "book/hot_list"
        })
    }

    getBookCount() {
        return this.request({
            url: "book/favor/count"
        });
    }

    getBookDetail(bookid) {
        return this.request({
            url: `book/${bookid}/detail`
        });
    }

    getLikeStatus(bid) {
        return this.request({
            url: `/book/${bid}/favor`
        })
    }

    getComments(bid) {
        return this.request({
            url: `book/${bid}/short_comment`
        })
    }
}

export {
    BookModel
};