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
        classic: null
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
                classic: res
            })
        });
    },

    onLike(event) {
        let behavior = event.detail.behavior;
        likeModel.like(behavior, this.data.classic.id, this.data.classic.type);
    }
})