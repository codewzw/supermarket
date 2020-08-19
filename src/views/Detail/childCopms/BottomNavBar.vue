<template>
    <div class="bottombar">
        <div class="kefu">
            客服
        </div>
        <div class="dianpu">
            店铺
        </div>
        <div class="shoucang">
            收藏
        </div>
        <div class="gouwuche" @click="addToCar">
           加入购物车
        </div>
        <div class="buy">
            购买
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom-nav-bar",
        methods:{
            addToCar(){
                this.$emit('addToCar')
            }
        }
    }
</script>

<style scoped>
    .bottombar{
        position: relative;
        z-index: 9;
        display: flex;
        height: 49px;
        text-align: center;
        line-height: 49px;
    }
    .bottombar div{
        flex: 1;
    }
    .gouwuche{
        background-color: yellow;
    }
    .buy{
        background-color: deeppink;
    }
</style>