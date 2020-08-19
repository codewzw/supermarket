<template>
        <nav-bar class="all">
            <img src="../../../assets/img/tabbar/arrow_left.svg" slot="left" @click="back"/>
            <div slot="center" class="center"><p v-for="(item,index) in TopName"  @click="changeColor(index)" :class="{change:index===isChange}">{{item}}</p></div>
        </nav-bar>
</template>

<script>
    import NavBar from '../../../components/common/navbar/NavBar'
    export default {
        name: "nav-bar-item",
        components:{
            NavBar
        },
        data(){
            return{
                TopName:['商品','参数','评论','推荐'],
                isChange:0
            }
        },
        // props:{
        //     OffSet:{
        //         type:Object,
        //         default(){
        //             return []
        //         }
        //     }
        // },
        methods:{
            changeColor(index){
                this.isChange = index
                this.$emit('titleClick',index)
            },
            back(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    /*.all{*/
        /*z-index: 9;*/
    /*}*/
    .center{
        display: flex;
    }
    .center p{
        flex: 1;
    }
    .change{
        color: deeppink;
    }
    img{
        width: 48px;
        heigth:48px;
    }
</style>