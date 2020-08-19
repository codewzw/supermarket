<template>
    <div class="BarItem" @click="tonext">
        <div><slot name="pic"></slot></div>
        <div><slot name="text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "tab-bar-item",
        props:{
            path:String,
        },
        methods:{
            tonext(){
                console.log('ssss')
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .BarItem{
        flex:1;
        text-align:center;

    }
   img{
       height:24px;
       width: 24px;

   }
</style>