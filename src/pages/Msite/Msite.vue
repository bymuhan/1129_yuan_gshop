 <template> 
 <!-- 首页组件 -->
    <div class="msite">
        <!-- <header class="header">
            <a href="" class="header_search">
                <i class="iconfont icon-xiazai17"></i>
            </a>    
            <a href="" class="header_title">
                <span class="header_title_text ellipsis">昌平区</span>
            </a>
            <a href="" class="header_login">
                <span class="header_login_text">登录 | 注册</span>
            </a>
        </header>     -->
        <HeaderTop title="昌平区北七家宏福科技园">
            <router-link slot="search" to="/search" class="header_search">
                <i class="iconfont icon-xiazai17"></i>
            </router-link>  
            <router-link slot="login" to="/login" class="header_login">
                <span class="header_login_text">登录 | 注册</span>
            </router-link>  
        </HeaderTop>   
        <!-- 首页导航 -->
        <nav class="msite_nav border-1px">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <!-- 滑轮模块 -->
                    <div class="swiper-slide">
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/1.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/1.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/1.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/1.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/1.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/3.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/3.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/3.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                    </div>
                    <div class="swiper-slide">    
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/2.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/2.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/2.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/2.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/2.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/2.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/2.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="#" class="link_to_food">
                            <div class="food_container">
                                <img src="../../images/nav/2.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                    </div>                    
                </div>
                <!-- 分页器 -->
                <div class="swiper-pagination"></div>
            </div> 
        </nav>
        <!-- 首页附件商家 -->
        <div class="msite_shop_list border-1px">
            <div class="shop_header">
                <i class="iconfont icon-fujinshangjia"></i>
                <span class="shop_header_title">附件商家</span>
            </div>
            <!-- 商家列表 -->
            <ShopList />
            <!-- <div class="shop_container">
                <ul class="shop_list">
                    <li class="shop_li border-1px">
                        <a href="">
                            <div class="shop_left">
                                <img src="../../images/shop/1.jpg" alt="" class="shop_img">
                            </div>
                            <div class="shop_right">
                                <section class="shop_detail_header">
                                    <h4 class="shop_title">锄禾日当午，汗滴禾下土</h4>
                                    <ul class="shop_detail_ul">
                                        <li class="suppoets">保</li>
                                        <li class="suppoets">准</li>
                                        <li class="suppoets">票</li>
                                    </ul>
                                </section>
                                <section class="shop_rating_order">
                                    <section class="shop_rating_order_left">
                                        <div class="star star-24">
                                            <span class="star-item on"></span>
                                            <span class="star-item on"></span>
                                            <span class="star-item on"></span>
                                            <span class="star-item half"></span>
                                            <span class="star-item off"></span>
                                        </div>
                                        <div class="rating_section">3.6</div>
                                        <div class="order_section">月销106单</div>
                                    </section>
                                    <section class="shop_rating_order_right">
                                        <span class="delivery_style delivery_left">外卖专送</span>
                                        <span class="delivery_style delivery_right">准时达</span>
                                    </section>
                                </section>
                                <section class="shop_distance">
                                    <p class="shop_delivery_msg">
                                        <span>￥20起送</span>
                                        <span class="segmentation">/</span>
                                        <span>配送费约￥5</span>
                                    </p>
                                </section>
                            </div>
                        </a>
                    </li>
                </ul>
            </div> -->
        </div>
    </div>    
</template> 
<script> 
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    import HeaderTop from '../../components/HeaderTop/HeaderTop'
    import ShopList from '../../components/ShopList/ShopList'
    export default {
        components:{
            HeaderTop,
            ShopList
        },
        mounted(){
            // 创建一个Swiper实例对象，来实现轮播
            new Swiper('.swiper-container',{
                pagination:{//如果需要分页器
                    el:'.swiper-pagination'
                },
                loop:true//可以轮播
            })
        }
    } 
</script> 
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .msite
        width 100%
        .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #ffffff
            .swiper-container
                width 100%
                height 100%
                .swiper-wrapper 
                    width 100% 
                    height 100%
                    .swiper-slide
                        display flex
                        justify-content center  
                        align-items flex-start
                        flex-wrap wrap
                        .link_to_food
                            width 25%
                            .food_container
                                display block
                                width 100%
                                text-align center
                                padding-bottom 10px
                                font-size 0
                                img 
                                    display inline-block
                                    width 50px
                                    height 50px
                            span 
                                display block
                                width 100%
                                text-align center
                                font-size 13px
                                color #666
                .swiper-pagination
                    >span.swiper-pagination-bullet-active
                        background #02a774
        .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #ffffff
            .shop_header
                padding 10px 10px 0 10px
                .icon-fujinshangjia
                    margin-left 5px
                    color #999
                .shop_header_title
                    color #999
                    font-size 14px
                    line-height 20px
           
                                                    

</style>
