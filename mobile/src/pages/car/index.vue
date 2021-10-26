<template>
  <div class="wrapper">
  	<general-nav @returnPage="returnPage">
			<span class="text">购物车</span>
		</general-nav>
  </div>
</template>

<script>
 import generalNav from 'base/generalNav'
	export default {
  	name: 'car',
		components:{
			generalNav
		},
  	data(){
  		return {}
  	},
		methods:{
			returnPage(){
				console.log(this.$router)
        this.$router.go(-1)
      }
		}
  }
</script>

<style lang="less" scoped>

</style>