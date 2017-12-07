<template>
    <div>
        <p>{{title}}</p>
        <ul>
            <li v-for="(item,key) in dataList">
                <Item :item="item" />
            </li>
        </ul>
        <input 
            type="text"
            v-model="inputValue"
            placeholder="Typing text"
        />
        <button @click="addItem">Add item</button>
        <br/>
        <router-link to="/">href to Home</router-link>
    </div>
</template>

<script>
    import Item from '@/components/Item'
    export default {
        name: 'product',
        components: {
           Item 
        },
        data () {
            return {
                title: 'This is product',
                text: 'Hello product',
                inputValue: '',
                dataList: [
                    {
                        name: 'Iphone'
                    },
                    {
                        name: 'Samsong'
                    },
                    {
                        name: 'Nokia'
                    }
                ]
            }
        },
        methods: {
            addItem() {
                this.dataList.push({
                    name: this.inputValue
                })
            }
        }
    }
</script>
<!-- 
 有加 scoped 代表style只能在這component作用
-->
<style scoped>

    ul{
        list-style: none;
    }
</style>