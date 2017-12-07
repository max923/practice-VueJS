<template>
  <li>
      * {{item.name}} *
  </li>
    
</template>

<script>
    export default {
        name: 'Item',
        data () {
            return {}
        },
        props: {
            item: {
                type: Object,
                default: {}
            },
        }
    }
</script>