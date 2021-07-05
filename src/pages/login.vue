<template>
  <div class="hello">
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      moduleList: [],
    };
  },
  created() {
      console.log('logincreat')
  },
  mounted() {
      console.log('login');
    var WXInfo = localStorage.getItem("WXInfo")
      ? JSON.parse(localStorage.getItem("WXInfo"))
      : "noLogin";
    let str = window.location.href;
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf("micromessenger") !== -1; // 是否 在微信浏览   器内
    let isURL = window.location.href.indexOf("code=") === -1; // 是否 没有授权重定向回来

    console.log("参数1：", str, ua, isWeixin, isURL);
    if (isWeixin && isURL) {
      this.getLogin()
    } else {
      console.log("没有执行");
    }
    // 重定向回来
    // if (!isURL) {
    //     let num1 = str.indexOf('code=')
    //     let num2 = str.indexOf('&state=')
    //     this.wxcode = str.slice(num1 + 5, num2)
    //     localStorage.setItem('WXcode', JSON.stringify(this.wxcode))

    //     // this.$message({
    //     //     showClose: true,
    //     //     message: "重定向回来：" + JSON.stringify(this.WXcode)
    //     // });
    //     console.log("wxcode:", JSON.stringify(this.WXcode))
    // }
    // this.userLogin();
  },
  methods: {
    userLogin() {
      let param = { userId: "weiyf16" };
      this.$api.userLogin(param).then((res) => {
        console.log("res", res);
        if (res.data.code == "200") {
          const { token, modules } = res.data.data;
          localStorage.setItem("Token", token.token)
          this.moduleList = (JSON.stringify(modules));
          localStorage.setItem("moduleList", this.moduleList);
          console.log("mokuai2", this.moduleList);
          this.$router.push('/index');
        }
        //获取用户的模块
      });
    },
    //获取用户模块
    getResources() {
      let param = { moduleType: "health" };
      this.$api.getResourcesByModule(param).then((res) => {
        console.log("res", res);
        if (res.data.code == "200") {
          const { data } = res.data;
        }
      });
    },
    //用户同意授权，获取code
    getLogin() {
      let urlrouter = window.location.href.split("#/")[1]; // 当前路由
      //hostName是后台服务器域名
      //url 是当前页面的地址。
      //appId 是公众号appid（注意：确定后台提供的appid和相关的token是同一个公众号的）

      // let url = this.$api.hostName + 'nakAppServer/ncpReport' // 重定向返回地址
      let url = "http://10.16.8.105:8080"; // 重定向返回地址
      let appid = "wx84e33c9810702536";
      let str =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        appid +
        "&redirect_uri=" +
        url +
        "/index.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";

      console.log("微信授权连接：", str);
      window.location.href = str;
    },
    //通过code换取网页授权access_token,获取code后，请求以下链接获取access_token： https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code
    getCode() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
