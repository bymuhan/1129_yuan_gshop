<template> 
<!-- 搜索页组件 -->
    <section class="search">
        <!-- <header class="header">
            <div class="header_title">
                <span class="header_title_text">搜索</span>
            </div>
        </header> -->
        <HeaderTop title="搜索"></HeaderTop>
        <form action="" class="search_form">
            <input type="search" name="search" class="search_input" placeholder="请输入商家或美食名称">
            <input type="submit" class="search_submit">
        </form>
    </section>
</template> 
<script> 
    import HeaderTop from '../../components/HeaderTop/HeaderTop'
    export default {
        components:{
            HeaderTop
        }
    } 
</script> 
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .search
        width 100%
        height 100%
        .search_form
            clearFix()
            margin-top 45px
            background-color #ffffff
            padding 12px 8px
            input
                height 35px
                padding 0 4px
                border-radius 2px
                font-weight bold 
                outline none
                &.search_input
                    float left
                    width 73%
                    border 4px solid #f2f2f2
                    font-size 14px
                    color #333
                    background-color #f2f2f2
                &.search_submit
                    float right
                    width 18%
                    border 4px solid #02a774
                    font-size 14px
                    color #ffffff
                    background-color #02a774

        

</style>
