<template> 
   <!-- 顶部栏 -->
   <header class="header">
     <slot name="search"></slot>
     <a href="" class="header_title">
       <span class="header_title_text ellipsis">{{title}}</span>
     </a>
     <slot name="login"></slot>
   </header>
</template> 
<script> 
    export default {
        props:{//接收父组件传递来的信息
          title:String
        }
    } 
    
</script> 
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 30%
        transform translateY(-50%)
        width 10%
        height 10%
        .icon-xiazai17
            font-size 20px
            color #ffffff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        width 50%
        color #ffffff
        text-align center
        .header_title_text
          font-size 20px
          display block            
      .header_login
        font-size 14px
        color #ffffff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)                
        .header_login_text 
            color #ffffff
</style>
