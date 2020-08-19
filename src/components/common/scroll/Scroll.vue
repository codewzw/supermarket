<template>
    <div ref="wrapper" class="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Scroll from 'better-scroll'
    export default {
        name: "scroll",
        data(){
            return{
                scroll:null,
                message:'fucku'
            }
        },

        mounted() {
            this.scroll = new Scroll(this.$refs.wrapper, {
                click: true,
                probeType:3,
                pullUpLoad:true,
            });
            this.scroll.on('scroll', position => {
                // console.log(position)
                this.$emit('backsign',position)
            });
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp')
            })

        },
        methods:{
          scrollTo(x,y,time=300){
              this.scroll.scrollTo(x,y,time)
          },
          finishPullUp(){
              this.scroll.finishPullUp()
          }
        }
    }
</script>

<style scoped>

</style>