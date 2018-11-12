// components/classic/music/index.js
import {
    classicBeh
} from '../classic-beh.js';

const mMgr = wx.getBackgroundAudioManager();

Component({
    /**
     * 组件的属性列表
     */
    behaviors: [classicBeh],
    properties: {
        src: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        pauseSrc: 'images/player@pause.png',
        playSrc: 'images/player@play.png',
        playing: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onPlay(e) {
            console.log(e)
            if (!this.data.playing) {
                mMgr.src = this.properties.src;
            }else {
                mMgr.pause();
            }
            this.setData({
                playing: !this.data.playing
            });
        }
    }
})