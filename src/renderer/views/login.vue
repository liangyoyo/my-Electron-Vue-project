<template>
<!-- 登录组件 -->
  <div class="login">
    <div class="container">
      <img src="../assets/kodinger.jpg" alt="" class="avatar">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="账号" prefix-icon="icon el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="密码"  prefix-icon="icon el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click='login'>登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// 引入登录请求的数据接口
// import { login } from '../common/api/add-index'
export default {
  data () {
    return {
      // 用户名，密码（先写死）
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 登录的用户名和密码的表单验证
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 点击登录调用以下方法
  /*   login () {
      // 再次实现数据的验证
      // 我们可以调用表单的validate方法实现数据的验证,在验证完成的时候,会调用传入的回调函数,这个回调函数有一个参数valid,如果这个参数为true,则说明验证通过(可以继续你的登陆请求),否则验证失败(阻止你的登陆请求并给出提示)
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          login(this.loginForm)
            .then(res => {
              console.log(res)
              if (res.data.meta.status === 200) {
                // 路由跳转之后先保存token数据到本地存储
                localStorage.setItem('token', res.data.data.token)
                // 进行路由跳转
                this.$router.push({ name: 'home' })
              } else {
                this.$message({
                  message: res.data.meta.msg,
                  type: 'error'
                })
              }
            })
            .catch(err => {
              console.log(err)
              this.$message({
                message: '登陆失败',
                type: 'error'
              })
            })
        } else {
          this.$message({
            message: '数据输入不合法',
            type: 'error'
          })
          // 只有return false才能阻止请求
          return false
        }
      })
    } */
    login () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background:url('../assets/bg.jpg');
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background:rgba(100,95,95,.5);
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid rgb(100,95,95,.5);
      box-shadow: 0 1px 5px rgb(100, 95, 95);
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
