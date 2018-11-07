import {
    ClassicModel
} from "../../models/classic.js";
var classic = new ClassicModel();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
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
        classic.getLatest( res => {
            this.setData({
                classic:res
            })
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})