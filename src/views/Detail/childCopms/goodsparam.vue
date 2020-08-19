<template>
    <div class="all">
        <table v-for="item in GoodsParam.sizes" class="table1">
            <tr v-for="tr in item">
                <th v-for="th in tr">{{th}}</th>
            </tr>
        </table>
        <table class="table2">
            <tr v-for="tr in GoodsParam.infos">
                <td>{{tr.key}}</td>
                <td>{{tr.value}}</td>
            </tr>

        </table>
        <!--<p v-for="item in GoodsParam.sizes">{{item}}</p>-->
    </div>
</template>

<script>
    export default {
        name: "goodsparam",
        props:{
            GoodsParam:{
                type:Object
            }
        },
        // mounted(){
        //     console.log(this.GoodsParam)
        // }
    }
</script>

<style scoped>
    table{
        /*margin-left: 50%;*/
    }
    .table1{
        padding-left: 5%;
        width:400px;
        line-height: 40px;
    }
    .table2{
        padding-left: 5%;
        width:600px;
        line-height: 40px;
    }
    td:last-child{
        padding-left: 50px;
        color: deeppink;
        word-wrap:break-word;
        font-size: 15px;
    }

</style>