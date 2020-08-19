<template>
    <div>
    <keep-alive exclude="detail">
    <router-view></router-view></keep-alive>
    <tab-bar>
        <tab-bar-item path="/shouye">
            <img slot="pic" src="../../assets/img/tabbar/cart.svg">
            <p slot="text">首页</p>
        </tab-bar-item>
        <tab-bar-item path="/page2">
            <img slot="pic" src="../../assets/img/tabbar/sub_account.svg">
            <div slot="text"><p>XX</p></div>
        </tab-bar-item>
        <tab-bar-item path="/page3">
            <img slot="pic" src="../../assets/img/tabbar/time.svg">
            <div slot="text"><p>BB</p></div>
        </tab-bar-item>
        <tab-bar-item path="/page4">
            <img slot="pic" src="../../assets/img/tabbar/view.svg">
            <div slot="text"><p>AA</p></div>
        </tab-bar-item>
    </tab-bar>
    </div>
</template>

<script>
    import TabBarItem from "../common/TabBar/TabBarItem";
    import TabBar from '../common/TabBar/TabBar'
    export default {
        components: {
            TabBarItem,
            TabBar},
        name: "main-tab-bar"
    }

</script>

<style scoped>

</style>