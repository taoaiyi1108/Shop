// components/like/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        like: {
            type: Boolean, //Boolean 默认值是false
        },
        count: {
            type: Number // Number 默认值是0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        yesSrc: "images/like.png",
        noSrc: "images/like@dis.png"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onLike(event) {
            let like = this.properties.like;
            let count = this.properties.count;
            count = like ? count - 1 : count + 1;
            this.setData({
                count,
                like:!like
            });

            // 点赞逻辑
            let behavior = this.properties.like?"like":"cancel";
            this.triggerEvent('like',{
                behavior
            },{})
        }
    }
})