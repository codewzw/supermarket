<template>
    <div>
        <div class="more">
            <h2>用户评价</h2>
            <span>更多</span>
        </div>
        <div class="comment">
            <p>
                <img :src="Rates.list[0].user.avatar"/>
                <span>{{Rates.list[0].user.uname}}</span>
            </p>
            <p>
                {{Rates.list[0].content}}
            </p>
            <p>
                <span>{{Rates.list[0].created | Time}}</span>
                <span>{{Rates.list[0].style}}</span>
            </p>
            <p  v-for="item in Rates.list[0].images">
                <img :src="item"/>
            </p>
        </div>
    </div>
</template>

<script>
    import {formatDate} from '../../../common/util'
    export default {
        name: "rates",
        props:{
            Rates:{
            type:Object,
            default(){
                return []
            }
            }
        },
        filters:{
            Time(value){
                const date = new Date(value*1000);
                return formatDate(date,'yyyy-MM-dd')
            }
        }
    }
</script>

<style scoped>
    .more{
        border-top: 2px solid gray;
        border-bottom: 2px solid gray;
        line-height: 50px;
    }
    h2{
        display: inline;
        padding-right: 60%;
    }
    .comment{
        /*position: absolute;*/

    }
    .comment img{
        width: 72px;
        height: 72px;
        float: left;
    }
    .comment p{
        height: 72px;
    }
    .comment span{
        /*position: relative;*/
        line-height: 72px;
        /*color: #ff5777;*/
        vertical-align: middle;
        display: inline-block;
        /*padding-bottom: 36px;*/
    }
</style>