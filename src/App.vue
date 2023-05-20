<template>
  <div id="app">
    <vue-login-tool :env-type-num="2" v-if="isShowComponents" />
    <router-view />
  </div>
</template>

<script>
import { setEncrypt } from "common/js/util";
import {
  asyncGetUsernameByPlatform,
  getUsernameByPlatform,
} from "dev-utils-pkg";
export default {
  name: "App",
  data() {
    return {
      isShowComponents: true,
    };
  },
  created() {
    if (process.env.VUE_APP_TITLE === "PROD") {
      this.isShowComponents = false;
    }
    window.setUserName = this.setUserName;
  },
  mounted() {
    this._getUsername();
  },
  methods: {
    // 初始化获取用户名
    _getUsername() {
      // APP端 xcFlutterJsSDk 获取用户名
      if (this.hasXcFlutterJsSDk()) {
        xcFlutterJsSDk.request(
          new XCJSRequestParam("common", "userinfo", null, (response) => {
            let username = response.loginName;
            const RE = /^d8100/;
            if (RE.test(username)) {
              username = username.substring(5);
            }
            username = setEncrypt(username);
            this.saveUsername(username);
          })
        );
      }
      // 调用全站提供的全局方法 获取用户名
      const username = getUsernameByPlatform();
      if (username) {
        this.saveUsername(username);
      } else {
        // 异步获取用户名
        asyncGetUsernameByPlatform().then((username) => {
          if (username) {
            this.saveUsername(username);
          } else {
            this.getIOSUsername();
          }
        });
      }
    },
    // 判断app端 hasXcFlutterJsSDk
    hasXcFlutterJsSDk() {
      return !!window.xcjsmanager;
    },
    // 暴露给全站调用的方法 获取用户名
    setUserName(username) {
      console.log(username);
      if (username) {
        username = setEncrypt(username);
        this.saveUsername(username);
      }
    },
    // 存储用户名
    saveUsername(username) {
      this.$store.commit("SET_USERNAME", username);
      sessionStorage.setItem("username", username);
    },
    //兼容老版ios端 获取用户名
    getIOSUsername() {
      console.log("getIos");
      const timer = setInterval(() => {
        console.log(window.webkit, "1");
        console.log(window.webkit.messageHandlers, "2");
        if (window.webkit && window.webkit.messageHandlers) {
          try {
            window.webkit.messageHandlers.getUserName.postMessage("userName");
            clearInterval(timer);
          } catch (e) {
            console.log(e);
          }
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 750px;
  min-height: 100vh;
  font-size: 24px;
  margin: 0 auto;
  color: #526966;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
</style>
