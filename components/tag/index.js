// components/tag/index.js
Component({
    // 小程序默认 不会启用 slot 必须手动配置
    options: {
        multipleSlots: true
    },
    // 接收外部传进来的css样式
    // 允许自定义多个，用一个数组接收
    externalClasses: ['tag-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        text: String,
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTap(event){
            this.triggerEvent('tapping',{
                text:this.properties.text
            })
        }
    }
})