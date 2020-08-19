<template>
    <div id="homelist">
        <home-list-item v-for="item in goods" :listitem="item">

        </home-list-item>
    </div>
</template>

<script>
    import HomeListItem from './HomeListItem'
    export default {
        name: "home-list",
        components:{
            HomeListItem
        },
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        // updated(){
        //     console.log('+++');
        //     console.log(this.goods)
        // }
    }
</script>

<style scoped>
    #homelist{

        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>