import {
    ClassicModel
} from "../../models/classic.js";
import {
    LikeModel
} from "../../models/like.js";
var classicModel = new ClassicModel();
var likeModel = new LikeModel();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        classic: null,
        latest: true,
        first: false,
        likeCount: 0,
        likeStatus: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // 第一种 
        // wx.request({
        //     url: 'https://bl.7yue.pro/v1/classic/latest',
        //     header:{
        //         "appkey":"FmsjdqBOmqDyd9Pt"
        //     },
        //     success: response =>{
        //         this.setData({
        //             data: response
        //         })
        //     }
        // })
        // 第二种
        // http.request({
        //     url: 'classic/latest',
        //     success: response => {
        //         console.log(response)
        //     }
        // })
        // 第三种
        classicModel.getLatest(res => {
            this.setData({
                classic: res,
                likeCount: res.fav_nums,
                likeStatus: res.like_status
            })
        });
    },

    onLike(event) {
        let behavior = event.detail.behavior;
        likeModel.like(behavior, this.data.classic.id, this.data.classic.type);
    },

    onNext(e) {
        this._updateClassic("next");
    },

    onPrevious(e) {
        this._updateClassic("previous");
    },

    _updateClassic(nextOrprevious) {
        let index = this.data.classic.index;
        classicModel.getClassic(index, nextOrprevious, res => {
            this._getLikeStatus(res.id, res.type);
            this.setData({
                classic: res,
                latest: classicModel.isLatest(res.index),
                first: classicModel.isFirst(res.index)
            });
        })
    },

    _getLikeStatus(artID, category) {
        likeModel.getClassicLikeStatus(artID, category, res => {
            this.setData({
                likeCount: res.fav_nums,
                likeStatus: res.like_status
            });
        });
    }
})