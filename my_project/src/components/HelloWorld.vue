//点击跳转

<template>

  <p>

    点击新增 动态路由: "secondRouter"

    <br/>

    <el-button @click="srouter" type="primary">新增动态路由</el-button>

 

  </p>

</template>

 

<script>

import router from 'vue-router'

import {constantRouterMap} from '@/router'


 

export default {

  name: 'HelloWorld:',

  mounted(){

  },

  data () {

    return {

      msg: 'Welcome to Your Vue.js App'

    }

  },

  methods:{

    srouter(){

      let newRoutes=constantRouterMap.concat([{path:'/ssssecondRouter',

        component :resolve => require(["@/views/login/secondRouter"], resolve )

      }])

      this.$router.addRoutes(newRoutes)

      this.$router.push({path:'/ssssecondRouter'})

    }

  }

}

</script>