<template>
    <div class="all">
        <div class="logo">
            <img :src="shops.logo"/>
            <span>{{shops.name}}</span>
        </div>
        <div class="second">
            <p>{{shops.sells}}
            <br/>
            <span>总销量</span></p>
            <p>{{shops.goodsCount}}
            <br/>
            <span>全部宝贝</span></p>
        </div>
        <div class="third" v-for="item in shops.score">
            <p :class="{color:item.isBetter}" class="color2">
                <span>{{item.name}}</span>
                <span>{{item.score}}</span>
                <span v-if="item.isBetter">高</span>
                <span v-else>低</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shop-info",
        props:{
            shops:{
                type:Object
            }
        }
    }
</script>

<style scoped>
    .all{
        position: relative;
    }
    .logo{
        margin-top: 20px;
        display: flex;
    }
    img{
        width: 60px;
        height:60px;
    }
    .logo span{
        padding-left: 20px;
        margin-top: 20px;
        
    }
    .second{
        margin-top: 30px;
        position: absolute;
        margin-left: 20px;
        border-right: 1px solid gray;
        padding-right: 30px;
    }
    .second p{
        float: left;
        padding-left: 20px;
    }
    .third{
        margin-top: 20px;
        margin-left: 230px;
    }
    .color2{
        color:red;
    }
    .color{
        color:green
    }
</style>