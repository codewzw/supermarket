<template>
    <div class="goods">
        <div class="first">
        <p>{{goods.title}}</p>
        <p>
            <span>￥{{goods.realPrice}}</span>
            <del>{{goods.oldPrice}}</del>
            <span>{{goods.discount}}</span>
        </p>
        </div>
        <div class="second">
            <p v-for="item in goods.columns">{{item}}</p>
        </div>
    </div>



</template>

<script>
    export default {
        name: "goodsdetail",
        props:{
            goods:{
                type:Object,
            }
        }
    }
</script>

<style scoped>
    .goods{
        padding: 0px 10px 0px;
    }
    .first{
        margin-top: 10px;
        position: relative;
    }
    span:first-child{
        color: #f13e3a;
    }
    del{
        font-size:12px
    }
    span:last-child{
        color: #fff;
        background-color: #f13e3a;
        border-radius: 5px;
        font-size: 12px;
        margin-bottom: 10px;
        position: absolute;
    }
    .second{
        display: flex;
        margin-top: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid gray;
    }
    .second p{
        flex: 1;
        display: inline-block;
        color: gray;
        font-size: 12px;
        padding-left:30px;
    }
</style>