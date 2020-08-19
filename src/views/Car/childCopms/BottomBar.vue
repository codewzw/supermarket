<template>
    <div class="bottom">
        <div class="check" @click="change">
        <button-click :class="{button:!type}"></button-click><span>全选</span>
       </div>
        <div>
            合计：{{money}}
        </div>
        <div>
            总数:{{totalNum}}
        </div>
    </div>
</template>

<script>
    import ButtonClick from './ButtonClick'
    export default {
        name: "bottom-bar",
        components:{
            ButtonClick
        },
        computed:{
            money(){
                let sum = 0
              return '￥' + this.$store.state.CarList.filter(item=>{
                  return !item.isCheked
              }).reduce((preValue,item)=>{
                  return sum+=item.price * item.count
              },0)
            },
            totalNum(){

                return this.$store.state.CarList.filter(item=>
                     !item.isCheked
                ).length
            }
        },
        data(){
            return{
                type:false
            }
        },
        updated(){
            let a = true
            console.log('updated');
            for(let item in this.$store.state.CarList){
                a = a &&  !this.$store.state.CarList[item].isCheked
            }
            this.type = a
            console.log(a+'aa')
        },
        methods:{
            change(){

                for(let item in this.$store.state.CarList){
                    // this.type=true&&this.$store.state.CarList[item].isCheked
                    // console.log(this.$store.state.CarList[item].isCheked)
                    this.$store.state.CarList[item].isCheked=this.type

                }
                this.type=!this.type
                // a=!a
                // this.type=false
                // console.log(this.$store.state.CarList)
                // console.log(this.type)
            }

        }
        // mounted(){
        //   console.log(this.$store.state.Carlist.length)
        // }
    }
</script>

<style scoped>
    .bottom{
        position: absolute;
        bottom:49px;
        background-color: lightgray;
        width: 100%;
        display: flex;
        /*height: 30px;*/
    }
    div{
        flex: 1;
    }
    .button{
        /*float: left;*/
        content: url("../../../assets/img/tabbar/notSelect.svg");
        width:30px;
        height: 30px;
    }
    .button span{
        margin-top: 10px;
    }
</style>