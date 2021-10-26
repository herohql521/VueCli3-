
<template>
  <div>
     <keep-alive>
      <router-view class="main-body"></router-view>
    </keep-alive>
    <!-- 底部导航条 -->
    <nav class="tab-wrapper border-top">
      <ul class="tab-con">
        <router-link  v-for="(item,index) in tabIcons" tag="li" replace :to="'/'+item.linkTo" :key="index" class="tabbar ripple">
          <i :class="item.icon"></i>
          <span class="icon-text">{{item.text}}</span>
      </router-link>
        
      </ul>
    </nav>
   
  </div>
</template>

<script>
import { tabIcons } from '@/getIcons/getData'

export default {
  name: 'taBbar',
  data () {
    return {
      tabIcons
    }
  },
  mounted () {
    this.iniData()
  },

  methods: {
    async iniData () {
      this.tabIcons = tabIcons()
    }
  },
}
</script>

<style lang="less" scoped>
@import url("~styles/global.less");
@import url("~styles/border.css");
@import url("//at.alicdn.com/t/font_2222007_igytwm3src9.css");
@height: 1.5rem;

.main-body{
  min-height:calc(100vh - 1rem)
}
//底部导航条
.tab-wrapper {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: @height;
  padding: 0 0.2rem;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
  

  .tab-con {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #999;
    font-size: 0.26rem;
    width:100%;
  }

  .tabbar{
   display:flex;
   flex-direction: column;
   align-items:center;

   .iconfont{
    font-size: 0.8rem;
   }
   &.ac{
    color:#000
   }
  }

 
}
</style>
