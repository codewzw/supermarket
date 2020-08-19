<template>
    <div id="middle">
        <div v-for="(item,index) in Name" @click="change(index)">
            <span :class="{active:index===currentNum}">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "middlebar",
        data(){
          return{
              currentNum:0
          }
        },
        props:{
            Name:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        methods:{
            change(index){
                this.currentNum = index;
                this.$emit('barclick',index)
            }
        }
    }
</script>

<style scoped>
    #middle{
        position: relative;
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background-color: white;
    }
    #middle div{
        flex:1;
    }
    .active{
        color:deeppink;
        border-bottom: 2px solid deeppink;
    }
</style>