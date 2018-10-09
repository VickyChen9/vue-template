// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import qs from 'qs';
Vue.prototype.axios = axios;

import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

/**
 * 获取当前时间，返回格式：2017-03-29 11:41:10
 * @returns {string}
 */
Vue.prototype.FwGetNow = function () {
  var date = new Date();
  var sign1 = "-";
  var sign2 = ":";
  var year = date.getFullYear() // 年
  var month = date.getMonth() + 1; // 月
  var day = date.getDate(); // 日
  var hour = date.getHours(); // 时
  var minutes = date.getMinutes(); // 分
  var seconds = date.getSeconds() //秒
  // 给一位数数据前面加 “0”
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (day >= 0 && day <= 9) {
    day = "0" + day;
  }
  if (hour >= 0 && hour <= 9) {
    hour = "0" + hour;
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + seconds;
  }
  var currentdate = year + sign1 + month + sign1 + day + " " + hour + sign2 + minutes + sign2 + seconds;
  return currentdate;
};

/**
 * 将前端UI日期 转为数据库日期
 * @param d 日期@格式为：YYYY年MM月DD日 HH24:MM: SS,YYYY-MM-DD HH24:MM: SS,YYYY-MM-DD,YYYY年MM月DD日等
 * @constructor
 */
Vue.prototype.format = function (time, format) {
  var t = new Date(time);
  var tf = function (i) {
    return (i < 10 ? '0' : '') + i
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear());
        break;
      case 'MM':
        return tf(t.getMonth() + 1);
        break;
      case 'dd':
        return tf(t.getDate());
        break;
      case 'HH':
        return tf(t.getHours());
        break;
      case 'mm':
        return tf(t.getMinutes());
        break;
      case 'ss':
        return tf(t.getSeconds());
        break;
    }
  })
};

/**
 * 将数据库格式转为前端日期
 * 原格式 YYYYMMDDHH24MMSS 转 YYYY-MM-DD...
 * @param d
 * @returns {string}
 * @constructor
 */
Vue.prototype.FwGetUIdate= function (d) {
          if (d == undefined) {
            return "";
          }
          var y = new Array();
          y[0] = d.substr(0, 4);
          y[1] = d.substr(4, 2);
          if (d.length == 6) {
            return y[0] + "-" + y[1];
          }
          y[2] = d.substr(6, 2);   //小时
          if (d.length == 8) {
            return y[0] + "-" + y[1] + "-" + y[2];
          }
          y[3] = d.substr(8, 2);   //小时
          y[4] = d.substr(10, 2);  //分
          y[5] = d.substr(12, 2);  //秒
          var rs = y[0] + '-' + y[1] + '-' + y[2];
          if (y[3] != '') {
            rs += ' ' + y[3] + ':' + y[4] + ':' + y[5];
          }
          return rs;
        }

// import $ from 'jquery'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './assets/bootstrap-3.3.7-dist/js/bootstrap.min'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/pubilc.css'

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

