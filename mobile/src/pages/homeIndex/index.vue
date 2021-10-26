<template>
   <div class="wrapper">
  	<general-nav @returnPage="returnPage">
			<span class="text">我的</span>
		</general-nav>
  </div>
</template>

<script>
	import generalNav from 'base/generalNav'
	export default {
  	name: 'home',
  	data(){
  		return {}
  	},
		components:{
			generalNav
		},
		methods:{
			returnPage(){
        this.$router.go(-1)
      }
		}
  }
</script>

<style lang="less" scoped>

</style>