<template>
    <div>

    <nav-bar class="navbar">
        <div slot="center">
            购物车
        </div>
    </nav-bar>
        <scroll class="content" ref="scroll">
    <div>
        <car-item :Carlist="Carlist"></car-item>
    </div>
        </scroll>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
    import CarItem from './childCopms/Caritem'
    // import ButtonClick from './childCopms/ButtonClick'
    import NavBar from '../../components/common/navbar/NavBar'
    import BottomBar from './childCopms/BottomBar'
    import Scroll from '../../components/common/scroll/Scroll'
    export default {
        name: "page3",
        components:{
            CarItem,
            NavBar,
            BottomBar,
            Scroll
            // ButtonClick
        },
        data(){
            return{
                Carlist:this.$store.state.CarList
            }
        },
        mounted(){
            this.$refs.scroll.scroll.refresh();
        }

    }
</script>

<style scoped>
    .navbar{
        background-color: deeppink;
        color: #ffffff;
        width: 100%;
    }
    .content{
        height: calc(100vh - 49px - 49px - 30px);
        overflow: hidden;
    }
</style>