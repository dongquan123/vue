//跳转过去的component组件,xxx.vue

<template>
  <div>
    <div>这里才是首页</div>
  </div>
</template>

 

<script>

import router2 from '@/router'

import router from 'vue-router'

export default {

  name: 'secondRouter',

  
  data () {

    return {

      msg: 'Welcome to Your Vue.js App'

    }

  },

  methods:{

  }

}

</script>