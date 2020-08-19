<template>
    <div id="listitem" @click="toDetail">
        <img :src="imageShow" @load="imgLoad"/>
        <div id="text">
        <p>{{listitem.title}}</p>
        <span>{{listitem.price}}</span>
        <span class="collect">{{listitem.cfav}}</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: "home-list-item",
        props:{
            listitem:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        computed:{
            imageShow(){
               return this.listitem.image||this.listitem.show.img
            }
        },
        methods:{
            imgLoad(){
                // console.log('sssss')
                this.$bus.$emit('imgLoad')
            },
            toDetail(){
                this.$router.push('/detail/'+this.listitem.iid)
            }

        }


    }
</script>

<style scoped>
    #listitem{
        padding-bottom: 40px;
        position: relative;
        width: 43%;
    }
    #text{
        font-size: 12px;
        position: absolute;
        buttom:5px;
        left: 0px;
        right: 0px;
        /*white-space: nowrap;*/
        overflow: hidden;
        text-align: center;

    }
    #listitem img{
        width: 100%;
        border-radius: 5px;
    }
    #text p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 3px;
    }
    #text .collect{
        position: relative;
    }
    #text span{
        margin-right: 20px;
    }

    #text .collect::before{
        position: absolute;
        content: '';
        left: -14px;
        width: 14px;
        height: 14px;
        background: url("../../assets/img/tabbar/cart.svg") 0 0/14px 14px;
    }
</style>