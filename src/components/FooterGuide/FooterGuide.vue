<template> 
    <!-- 底部组件 -->
    <footer class="footer_guide border-1px">
        <!-- 选中颜色on类的-----:class="{on:isCurrent('/msite')}" -->
        <div class="guide_item" :class="{on:'/msite' === $route.path}" @click="goTo('./msite')">
            <span class="item_icon">
                <i class="iconfont icon-u"></i>
            </span>
            <span>外卖</span>
        </div>
        <div class="guide_item" :class="{on:'/search' === $route.path}" @click="goTo('./search')">
            <span class="item_icon">
                <i class="iconfont icon-xiazai17"></i>
            </span>
            <span>搜索</span>
        </div>
        <div class="guide_item" :class="{on:'/order' === $route.path}" @click="goTo('./order')">
            <span class="item_icon">
                <i class="iconfont icon-icon"></i>
            </span>
            <span>订单</span>
        </div>
        <div class="guide_item" :class="{on:'/profile' === $route.path}" @click="goTo('./profile')">
            <span class="item_icon">
                <i class="iconfont icon-geren1"></i>
            </span>
            <span>我的</span>
        </div>
    </footer>
</template> 
<script> 
    export default {
        methods:{
            goTo(path){
                this.$router.replace(path)
            }
            // inCurrent(path){
            //     return this.$route.path === path
            // }
        }
    } 
    // 通过注入路由器，我们可以在任何组件内
    // 通过 this.$router 访问路由器
    // 通过 this.$route 访问当前路由
</script> 
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .footer_guide
        top-border-1px(#e4e4e4)
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #fff
        width 100%
        height 50px
        display flex
        .guide_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            margin 5px
            color #999999
            &.on    
                color #02a774
            span 
                font-size 12px
                margin-top 2px
                margin-bottom 2px 
                .iconfont
                    font-size 22px   
</style>
