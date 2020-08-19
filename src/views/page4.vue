<template>
  <div>
      <div @click="what">
          <img src="../assets/img/tabbar/selected.svg"/>
      </div>
      <button-click></button-click>
  </div>
</template>

<script>
    import ButtonClick from './Car/childCopms/ButtonClick'
    export default {
        name: "page4",
        components:{
            ButtonClick
        },
        methods:{
            what(){
                console.log('sssa')
            }
        }
    }
</script>

<style scoped>

</style>