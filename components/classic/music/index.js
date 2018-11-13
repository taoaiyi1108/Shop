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
    // 组件生命周期
    // 在组件实例进入页面节点树时执行
    attached() {
        this._recoverStatus();
        this._monitorSwitch();
    },
    // 当组件在页面被移除的时候触发
    detached() {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onPlay(e) {
            if (!this.data.playing) {
                mMgr.src = this.properties.src;
                this.setData({
                    playing: true
                });
            } else {
                mMgr.pause();
                this.setData({
                    playing: false
                });
            }

        },
        _recoverStatus() {
            if (mMgr.paused) {
                this.setData({
                    playing: false
                });
                return; // 2个if只能执行一个
            }
            // mMgr.src 代表的是当前播放的音乐src
            if (mMgr.src == this.data.src) {
                this.setData({
                    playing: true
                });
            }
        },
        _monitorSwitch() {
            mMgr.onPlay(() => {
                this._recoverStatus();
            });
            mMgr.onPause(() => {
                this._recoverStatus();
            });
            mMgr.onStop(() => {
                this._recoverStatus();
            });
            mMgr.onEnded(() => {
                this._recoverStatus();
            });
        }
    }
})