<template>
	<div class="wrapper">
    <general-nav class="pd23" @returnPage="returnPage">
      <span class="text">登录</span>
    </general-nav>
    <div class="form_box">
      <div class="ipt_box border-bottom">
        <input class="ipt" type="text" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="ipt_box">
        <input class="ipt" type="password" placeholder="请输入密码" v-model="password">
      </div>
    </div>
		<button @click="checkLogin" class="login_btn">登录</button>
		<h1>返回路径为：{{$route.query.redirect}}</h1>
	</div>
</template>

<script>
  import generalNav from 'base/generalNav'
  import api from '@/api'
	export default {
  	name: 'login',
    components:{
      generalNav
    },
  	data(){
  		return {
        username:'',
        password:''
      }
  	},
  	methods:{
  		checkLogin(){
        api.loginStatusFn(this.username,this.password).then(()=>{
          this.$store.dispatch('login')
          this.$toast('登录成功');
          this.$router.push({ path: this.$route.query.redirect })
         
          
          
      })


  		},
      returnPage(){
        this.$router.go(-1)
      }
  	}
	}
</script>

<style lang="less" scoped>
  @import url('~styles/global.less');
  .wrapper{
    .text{
      font-size: 0.5rem;
    }
  }
  .form_box{margin-bottom:30px;}
  .ipt_box{
    padding: 0 30px;
    .ipt{
      height:80px; line-height:80px; font-size:34px; display:block; width:100%;
    }
  }
  .login_btn{width:100%; line-height:90px; text-align:center; font-size:36px;}

</style>