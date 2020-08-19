<template>
    <div class="all">
        <div class="info">
            <ul v-for="(item,index) in Carlist">
                <li>
                    <div class="pic">
                    <img :src="item.image"/>
                    </div>
                    <div class="text">
                        <p>
                            {{item.title}}
                        </p>
                        <p>
                            {{item.desc}}
                        </p>
                        <p>
                            {{'￥'+item.price}}
                            <span>
                            {{'x'+item.count}}
                             </span>
                       
                        </p>
                    </div>
                    <div class="button"  @click="getIndex(index)">
                        <button-click :class="{changeColor:Carlist[index].isCheked}" class="pic"></button-click>
                    </div>
                </li>

            </ul>
            <!--{{Carlist}}-->

        </div>

    </div>
</template>

<script>
    import ButtonClick from './ButtonClick'
    export default {
        name: "caritem",
        components:{
          ButtonClick
        },
        props:{
            Carlist:{
                type:[],
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                num:0
            }
        },
       methods:{
            getIndex(index){
               this.num = index;
                this.Carlist[index].isCheked = !this.Carlist[index].isCheked
                console.log(this.Carlist[index].isCheked)
                // console.log( this.$refs.btn.num)
            }
        }
    }
</script>

<style scoped>
    .all{
        display: flex;
    }
    ul{
        list-style:none;
        padding-bottom: 20px;
    }
    ul li{
        border-bottom: 1px solid black;
        padding-bottom:30px;
    }
    /*.info{*/
        /*position: relative;*/
    /*}*/
    /*ul li{*/
        /*position: absolute;*/
    /*}*/
    img{
        width: 120px;
        height: 160px;
        border-radius:10%;

    }
    .changeColor{
        /*background: url("../../../assets/img/tabbar/selected.svg");*/
        content: url("../../../assets/img/tabbar/notSelect.svg");
        width: 30px;
        height: 30px;

    }


    .info{
        position: relative;
        margin-top: 20px;
        /*padding-bottom: 30px;*/
        /*border-bottom: px solid black;*/
    }
    .button{
        /*position: absolute;*/

        display: inline-block;
        margin-top: 180px;

    }
    .pic{
        float: left;
        /*!*width: 20%;*!*/
        position: absolute;
    }
    .text{
        float: left;
        /*width: 60%;*/

    }
    .text p{
        white-space: nowrap;
        width:250px;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-top: 30px;
        margin-left: 130px;
    }
    .text p span{
        padding-left: 50px;
    }
</style>