<template>
<!-- 
    一定要用一個 element wrapper 包住全部
    EX:
    錯誤: <p></p>
         <div></div>

    正確: <div>
            <p></p>
            <div></div>
        </div>
-->
<div>
    <p>{{title}}</p>
    <p>{{text}}</p>
    <button @click="handleBtnClick">Change Route to product</button>
    <br/>
    <router-link to="product">href to Product</router-link>
</div>

</template>

<script>
// https://vuejs-tips.github.io/cheatsheet/ VueJS ApiList
    export default {
        name: 'home',
        data () {
            return {
                title: 'This is home',
                text: 'Hello home'
            }
        },
        methods: {
            handleBtnClick () {
                this.$router.push({ path: '/product' }) 
            }
        }
    }
</script>

