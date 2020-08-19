<template>
    <div class="index">
    <nav-bar class="back"><div slot="center">购物车</div></nav-bar>
      <middle-bar :Name="['流行','新款','精选']" class="middle" @barclick="barclick" ref="swiper2" v-show="isShow"></middle-bar>
    <scroll

        class="content"
        ref="scrollup"
        @backsign="backSign"
        @pullingUp="pullup"
    >

    <home-swiper :banners="banners" @swiperimg="swiperimg" ></home-swiper>
    <recommend :recommends="recommends"></recommend>
    <popular></popular>
    <middle-bar :Name="['流行','新款','精选']" class="middle" @barclick="barclick" ref="swiper"></middle-bar>
    <home-list :goods="goods[Tname].list"></home-list>
    </scroll>
    <back-top @click.native="backclick" v-show="isOut"/>
    </div>
</template>

<script>
    import NavBar from '../../components/common/navbar/NavBar'
    import MiddleBar from '../../components/content/middlebar'
    import {getHomeMultidata,getHomeGoods} from "../../network/home";
    import HomeSwiper from './childCopms/HomeSwiper';
    import HomeList from '../../components/content/HomeList'
    import Recommend from './childCopms/recommend';
    import Popular from './childCopms/popular'
    import Scroll from '../../components/common/scroll/Scroll'
    import BackTop from '../../components/content/backtop'
    export default {
        name: "shouye",
        components:{
            HomeList,
            NavBar,
            MiddleBar,
            HomeSwiper,
            Recommend,
            Popular,
            Scroll,
            BackTop,

        },
        data(){
            return{
                banners:[],
                recommends:[],
                goods:{
                    'pop':{page:0,list:[]},
                    'new':{page:0,list:[]},
                    'sell':{page:0,list:[]},
                },
                Tname:'pop',
                isOut:false,
                isShow:false,
                FarFromTop:0,
                Distance:0
            }
        },
        created(){
           this.getHomeMultidata()
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
           this.getHomeGoods('sell')
        },
        mounted(){
            this.$bus.$on('imgLoad',()=>{
               this.$refs.scrollup.scroll.refresh();
            })

        },
        activated(){
            this.$refs.scrollup.scrollTo(0,this.Distance,0)
        },
        deactivated(){
            this.Distance = this.$refs.scrollup.scroll.y
        },
        methods:{
            //组建通信
            barclick(index){

              switch (index){
                  case 0:
                      this.Tname='pop';
                      break
                  case 1:
                      this.Tname='new';
                      break
                  case 2:
                      this.Tname='sell';
                      break
              }
              this.$refs.swiper.currentNum = index;
              this.$refs.swiper2.currentNum = index;
            },
            backSign(position){
              this.isOut = (-position.y>1000),
              this.isShow = (-position.y)>this.FarFromTop
            },
            backclick(){
                // console.log(this.$refs.scrollup)
                this.$refs.scrollup.scroll.scrollTo(0,0,300)

                // this.$refs.scrollup.scroll.refresh();

                // this.$refs.scrollup.scrollTo(0,0)

            },
            swiperimg(){
                this.FarFromTop = this.$refs.swiper.$el.offsetTop
            },
            //网络请求
            pullup(){
                // console.log('pull up')
                this.getHomeGoods(this.Tname)
                this.$refs.scrollup.finishPullUp();
                // this.$refs.scrollup.scroll.refresh();
            },
            getHomeMultidata(){
                getHomeMultidata().then(res=>{
                    this.banners = res.data.banner.list,
                        this.recommends = res.data.recommend.list
                })
            },
            getHomeGoods(type){
                const page = this.goods[type].page+1;
                getHomeGoods(type,page).then(res=>{
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page+=1;
                    // console.log(res)
                })
            }
        }
    }
</script>

<style scoped>
    .back{
        background-color: #ff8198;
        color: #ffffff;

    }
    .index{
        /*padding-top: 49px;*/
        position: relative;
        height: 100vh;
    }
    .content{
        /*height: 300px;*/
        overflow: hidden;
        position: absolute;
        top: 49px;
        bottom:46.1px;
        left: 0;
        right: 0;
    }
    .middle{

        position: relative;
        z-index: 9;
    }
</style>