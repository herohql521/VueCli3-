<template>
  <div class="wrapper">
  	<general-nav @returnPage="returnPage">
			<span class="text">发现</span>
		</general-nav>
  </div>
</template>

<script>
 import generalNav from 'base/generalNav'
	export default {
  	name: 'discover',
		components:{
			generalNav
		},
  	data(){
  		return {}
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