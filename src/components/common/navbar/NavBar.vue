<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "nav-bar"
    }
</script>

<style scoped>
    .nav-bar{
        height: 49px;
        width: 100%;
        display: flex;
        text-align: center;
        line-height: 49px;
        /*position: fixed;*/
        /*z-index: 8;*/
        /*top: 0;*/
        /*right: 0;*/
    }
    .center{
        flex: 1;
    }
    .left,.right{
        width:60px;
    }
</style>