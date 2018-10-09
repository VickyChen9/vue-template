<template>
  <div class="Header">
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo pdl20 pdr20"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">
     <router-link :to="{path:'/index'}">处理中心</router-link>
  </el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">
      选项1
    </el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">我的工作台3</template>
    <el-menu-item index="3-1">选项3-1</el-menu-item>
    <el-menu-item index="3-2">选项3-2</el-menu-item>
    <el-menu-item index="3-3">选项3-3</el-menu-item>
  </el-submenu>
  </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    inject: ['reload'],
   data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
