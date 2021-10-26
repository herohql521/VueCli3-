<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
        <!-- <router-view v-if="$route.meta.keepAlive"></router-view> -->
      </keep-alive>
      <!-- </transition>
      <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>-->
    </transition>
    <!-- 通过查看播放列表的length来看看播放页面是否可以显示 -->
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  height: 100vh;
  width: 100vw;
}
</style>

