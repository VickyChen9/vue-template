<template>
  <div id="app">

  <el-container>
  <el-header class="pd0">
  <router-view v-if="isRouterAlive" name="header"></router-view>
  </el-header>
    <el-main>
    <router-view v-if="isRouterAlive">
    </router-view>
    </el-main>
  </el-container>

  </div>
</template>

<script>
  export default {
    name: 'App',
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true,
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isRouterAlive = true;
        })
      }
    }
  }
</script>

<style>
#app {
position:absolute;width:100%;height:100%;
}
</style>
