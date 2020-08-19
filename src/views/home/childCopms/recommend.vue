<template>
    <div id="recommend">
        <div v-for="item in recommends" class="re-item">
            <a :href="item.link">
                <img :src="item.image">
                <p>{{item.title}}</p>
            </a>

        </div>
    </div>
</template>

<script>
    export default {
        name: "recommend",
        props:{
            recommends:{
                type:Array,
                default(){
                    return[]
                }
            }
        }
    }
</script>

<style scoped>
    #recommend{
        display: flex;
        border-bottom: 8px solid #666666;
    }
    .re-item{
        flex: 1;
        text-align: center;
    }
    .re-item img{
        width: 65px;
        height: 65px;
    }
</style>