<template>
    <swiper>
    <swiper-item v-for="item in banners">
        <a :href="item.link">
        <img :src="item.image" @load="swiperimg"/>
        </a>
    </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from '../../../components/common/swiper'
    export default {
        name: "home-swiper",
        props:{
          banners:{
              type:Array,
              default(){
                  return []
              }
          }
        },
        components:{
            Swiper,
            SwiperItem
        },
        methods:{
            swiperimg(){
                this.$emit('swiperimg')
            }
        }
    }
</script>

<style scoped>

</style>