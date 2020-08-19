<template>

    <div class="all">
    <nav-bar-item @titleClick="titleClick" ref="nav"></nav-bar-item>

    <div>
        <scroll
            class="content"
            ref="scroll"
            @backsign="backsign"
        >
            <ul>
            <li v-for="item in $store.state.CarList">
                {{item}}
            </li>
        </ul>
        <detail-swiper :topImages="topImages"></detail-swiper>
        <goods-detail :goods="goods"></goods-detail>
        <shop-info :shops="shops"></shop-info>
        <goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"></goods-info>
        <params :GoodsParam="GoodsParam" ref="params"></params>
        <rates :Rates="rates" ref="rates"></rates>
        <recommend :Recommend="recommends" ref="recommends"></recommend>
        </scroll>
    </div>
        <bottom-nav-bar @addToCar="addToCar"></bottom-nav-bar>
        <back-top @click.native="backclick" v-show="isOut"/>

    </div>
</template>

<script>
    import NavBarItem from './childCopms/NavBarItem'
    import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '../../network/detail'
    import DetailSwiper from './childCopms/detailswiper'
    import GoodsDetail from './childCopms/goodsdetail'
    import shopInfo from './childCopms/shopInfo'
    import Params from './childCopms/goodsparam'
    import Scroll from '../../components/common/scroll/Scroll'
    import GoodsInfo from "./childCopms/goodsInfo";
    import Rates from './childCopms/rates'
    import Recommend from './childCopms/recommend'
    import BottomNavBar from './childCopms/BottomNavBar'
    import BackTop from '../../components/content/backtop'
    import {debounce} from '../../common/util'
    export default {
        components: {
            Recommend,
            Shop,
            NavBarItem,
            DetailSwiper,
            Goods,
            GoodsDetail,
            GoodsInfo,
            shopInfo,
            Scroll,
            Params,
            Rates,
            BottomNavBar,
            BackTop
                        },
        name: "detail",
        data(){
            return{
                id:null,
                topImages:[],
                goods:{},
                shops:{},
                detailInfo:{},
                GoodsParam:{},
                rates:{},
                recommends:[],
                getOffSet:null,
                toY:[],
                currentNum:0,
                isOut:false,
            }
        },
        created(){
            // console.log(this.$route.params.iid)
           this.id=this.$route.params.iid;
            this.getDetail(this.id);
            this.getRecommend();
            this.getOffSet = debounce(()=>{
                this.toY = [];
                this.toY.push(0);
                this.toY.push(this.$refs.params.$el.offsetTop);
                this.toY.push(this.$refs.rates.$el.offsetTop);
                this.toY.push(this.$refs.recommends.$el.offsetTop);
                console.log(this.toY)
            },200)
        },
        methods:{
            getDetail(id){
                getDetail(id).then(res=>{
                    console.log(res)
                    const data = res.result
                    this.topImages=res.result.itemInfo.topImages
                    // console.log(this.topImages)
                    this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
                    this.shops = new Shop(data.shopInfo)
                    this.detailInfo = data.detailInfo
                    this.GoodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
                    this.rates = data.rate

                });

            },
            getRecommend(){
                getRecommend().then(res=>{

                    this.recommends = res.data.list
                    // console.log(this.recommends)
                })
            },
            imgLoad(){
                console.log('hhh')
                this.$refs.scroll.scroll.refresh();
                this.getOffSet();
            },
            titleClick(index){
                console.log(index);
                console.log(-this.toY[index])
                this.$refs.scroll.scrollTo(0,-this.toY[index],500)
            },
            backsign(position){
                this.isOut = (-position.y>1000);
                const y = -(position.y);
                // console.log(this.toY[1])
                let length = this.toY.length;
                for(let i=0;i<length;i++){
                    if(this.currentNum!==i&&((i<length-1&&y>=this.toY[i]&&y<this.toY[i+1])||(i===length-1&&y>=this.toY[i]))){
                        this.currentNum = i;
                        this.$refs.nav.isChange = i;
                        console.log(i)
                    }

                    // if(y>this.toY[0]&&y<this.toY[i+1]){
                    //     console.log(i)
                    // }
                }
                // console.log(y)
            },
            addToCar(){
              console.log('添加到购物车');
              const products = {};
                // id:null,
                //     topImages:[],
                //     goods:{},
                // shops:{},
                // detailInfo:{},
                // GoodsParam:{},
                // rates:{},
                // recommends:[],
                //     getOffSet:null,
                //     toY:[],
                //     currentNum:0,
                //     isOut:false,
              products.image = this.topImages[0];
              products.title = this.goods.title;
              products.desc = this.goods.desc;
              products.price = this.goods.realPrice;
              products.iid = this.id;
                this.$store.dispatch('addCar',products)

            },
            backclick(){
                // console.log(this.$refs.scrollup)
                this.$refs.scroll.scroll.scrollTo(0,0,300)

                // this.$refs.scrollup.scroll.refresh();

                // this.$refs.scrollup.scrollTo(0,0)

            },
    }
    }
</script>

<style scoped>
    .all{
        /*height: 100vh;*/
        position: relative;
        z-index: 9;
        background-color: white;
    }
    .content{

            height: calc(100vh - 49px - 49px);
        /*position: absolute;*/
        /*top: 49px;*/
        /*bottom: 0px;*/
            overflow: hidden;
    }
</style>