<template>
    <div >
        <div @click="changeColor">
        <img src="../../../assets/img/tabbar/selected.svg"/>
        </div>
        <!--<div v-else>-->
         <!--<img src="../../../assets/img/tabbar/selected.svg"/>-->
        <!--</div>-->
        <!--<button @click="ww">==</button>-->
    </div>
</template>

<script>
    import {debounce} from '../../../common/util'
    export default {
        name: "button-click",
        // data(){
        //   return{
        //       num:null,
        //       isChange:false
        //   }
        // },
        props:{
            num:0
        },
        // mounted(){
        //     console.log(this.index)
        // }
        methods: {
            ww() {
                console.log(this.num)
            },
            changeColor(){
                // console.log(this.num)
                // this.isChange = !this.$store.state.CarList[num].isCheked
            }
        }
        //
        //


    }
</script>

<style scoped>

    img{
        width: 30px;
        height: 30px;

    }
</style>