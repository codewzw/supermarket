<template>
    <div>
        <p>{{detailInfo.detailImage[0].key}}</p>
        <div class="pic1">
            <img v-for="item in detailInfo.detailImage[0].list" :src="item" @load="imgLoad"/>
        </div>
        <!--<p>{{detailInfo.detailImage[1].key}}</p>-->
        <!--<div class="pic1">-->
            <!--<img v-for="item in detailInfo.detailImage[1].list" :src="item" />-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "goods-info",
        props:{
            detailInfo:{
                type:Object
            }
        },
        mounted(){
            console.log("=======")
            // console.log(this.detailInfo.detailImage[0].key)
        },
        data(){
          return{
              counter:0,
              currentNum:0
          }
        },
        methods:{
            imgLoad(){
                console.log("compelete")
                if(++this.counter===this.currentNum)
                    this.$emit('imgLoad')
            }
        },
        watch:{
            detailInfo(){
            this.currentNum = this.detailInfo.detailImage[0].list.length
            }
        }
    }
</script>

<style scoped>
    img{
        width:100%;
    }
</style>