<template>
    <div>
        <home-list :goods="Recommend"></home-list>
    </div>
</template>

<script>
    import HomeList from '../../../components/content/HomeList'
    export default {
        name: "recommend",
        components:{
          HomeList
        },
        props:{
            Recommend:{
                type:Array,
                default(){
                    return []
                }
            }
        },

    }
</script>

<style scoped>

</style>