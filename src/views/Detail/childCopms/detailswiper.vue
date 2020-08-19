<template>

    <swiper class="changeimg">
        <swiper-item v-for="item in topImages">
            <img :src="item"/>
        </swiper-item>
    </swiper>

</template>

<script>
    import {Swiper,SwiperItem} from '../../../components/common/swiper'
    export default {
        name: "detailswiper",
        components:{
            Swiper,
            SwiperItem

        },
        props:{
            topImages:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        updated(){
            console.log(this.topImages)
        }
        
    }
</script>

<style scoped>
    .changeimg{
        height: 500px;
        overflow: hidden;
    }
</style>