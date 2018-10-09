<template>
  <div class="login">

    <div class="col-md-4  loginFrom">
      <div class="manage">office</div>
      <el-form :inline="true" :model="loginFrom" :rules="rules" ref="loginFrom">

        <el-form-item label="账号:" prop="id" class="col-xs-12 col-md-12 mt20">
          <el-input v-model="loginFrom.id" placeholder="请输入账号"></el-input>
        </el-form-item>

        <el-form-item label="密码:" prop="pwd" class="col-xs-12 col-md-12 mt20">
          <el-input v-model="loginFrom.pwd" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item class="col-xs-12 col-md-12 mt20">
          <el-button type="primary" @click="submitForm('loginFrom',loginFrom)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        loginFrom: {
          id: '',
          pwd: ''
        },
        rules: {
          id: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
      };
    },
    created() {
      this.setData();
    },
     mounted(){
       $('.login').parent().parent().addClass("bg")
   },
    methods: {
      setData: function () {
        var getData = this;
      },
      submitForm(formName, loginFrom) {
        var self = this;
        this.$refs[formName].validate(function (valid) {
          if (valid) {
            var param = {
              o_login_id: loginFrom.id,
              o_password: loginFrom.pwd
            };

            $.fwDoService({
              service: "loginService",
              s_method: "login",
              data: param,
              success: function (rstJson) {
                if (rstJson.code == "1") {
                  self.$router.push({path: '/index.html'});
                }
                 if (rstJson.code == "-1") {
                   self.$message.error('账号或者密码错误');
                }
              }
            });

          }
          else {
            return false;
          }
        });
      }
    }

  }
</script>
<style>
  .login {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .login .loginFrom .manage {
    font-size: 30px;
    color: #409eff;
    padding-left:15px;
  }

.bg{
background: #eff7ff;
position:absolute;
width:100%;
height:100%;
}
</style>
