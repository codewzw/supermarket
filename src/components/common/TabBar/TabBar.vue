<template>
    <div id="Tabbar">

        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tab-bar"
    }


</script>

<style scoped>
    #Tabbar{
        border-top: 1px black solid;
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f0f0f0;
    }
</style>