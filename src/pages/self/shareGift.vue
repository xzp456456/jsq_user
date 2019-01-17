<template>
  <div>
    <div class="erweima_bg">
      <div class="close">
        <div class="close_img">
          <img src="@/assets/img/close.png">
        </div>
      </div>
      <div class="erweima_r">
        <div class="erweima">
          <img src="@/assets/img/erweima.png">
        </div>
        <p>长按识别二维码，邀请好友</p>
      </div>
    </div>
    <header>
      <div class="banner">
        <img src="@/assets/img/banner.png">
      </div>
    </header>
    <main>
      <div class="main">我的邀请名单</div>
      <div class="tables">
        <table>
          <tr>
            <th>邀请好友</th>
            <th>获得奖励</th>
            <th>日期</th>
          </tr>
          <tr v-for="(list,index) in lists" :key="index">
            <td>{{list.username}}</td>
            <td>{{list.prom_reward}}升</td>
            <td>{{list.create_time}}</td>
          </tr>
        </table>
      </div>
    </main>
    <footer>
      <div class="bottom">
        <div class="pull-left wc" @click="showSh(true)">分享邀请</div>
        <div class="pull-right wc addclass" @click="showQS(true)">面对面邀请</div>
      </div>
    </footer>
      <div class="qs" v-show="show" @click="showQS(false)">
        <div id="qrcode"></div>
      </div>
      <div class="qs" v-show="share" @click="showSh(false)">
        <div>
          <span class="textShare">邀请得流量</span>  
          <span><img class="zb"  src="@/assets/img/15tc.png" alt=""></span>
        </div>
      </div>
  </div>
</template>
<script>
import { postAjax } from "@/api/axios";
import * as api from "@/api/api";
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      show:false,
      share:false,
      data: {
        page: 1,
        page_size: 10
      },
      lists: []
    };
  },
  created() {
    this.shareAction();
    this.wxReady();
    
  },
  mounted() {
    this.qrcode();
    this.wxConfig();
    this.getWxInfo();
  },
  methods: {
    showQS(bool){
      this.show = bool;
    },
    showSh(bool){
      this.share = bool;
    },
    shareAction() {
      let data = this.data;
      postAjax(api.share, data).then(res => {
        this.lists = res.data;
      });
    },
    qrcode() {
      let domWidth = document.body.clientWidth / 2;
      let qrcode = new QRCode("qrcode", {
        width: domWidth,
        height: domWidth, // 高度
        colorDark: "#000000",
        colorLight: "#ffffff",
        text: "http://www.iyunmima.com/view/users/index.html#/addEquipment"
      });
    },
    getWxInfo(){
      let data = {url:window.location.href.split('#')[0]}
      postAjax(api.getWxInfo,data)
      .then(res=>{
        console.log(res);
        this.wxConfig(res.data.appId,res.data.timestamp,res.data.nonceStr,res.data.signature);
      })
    },
    wxConfig(appId,ts,nonceStr,signature){
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: appId, // 必填，公众号的唯一标识
          timestamp: ts, // 必填，生成签名的时间戳
          nonceStr: nonceStr, // 必填，生成签名的随机串
          signature: signature,// 必填，签名，见附录1
          jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
    },
    wxReady() {
      wx.ready(function() {
        wx.onMenuShareTimeline({
          title: "物联网净水器",
          link: "http://www.iyunmima.com/view/users/index.html#/addEquipment",
          desc: "分享给您的好友吧",
          imgUrl: "xxx",
          success: function(res) {
            console.log(res);
          },
          cancel: function(res) {},
          fail: function(res) {}
        });
        wx.onMenuShareAppMessage({
          title: "物联网净水器",
          link: "http://www.iyunmima.com/view/users/index.html#/addEquipment",
          desc: "分享给您的好友吧",
          imgUrl: "xxx",
          success: function(res) {
            console.log(res);
          },
          cancel: function(res) {},
          fail: function(res) {}
        });
      });
    }
  }
};
</script>
<style scoped="">
.textShare{
  width: 100%;
  color: #ffffff;
  font-size: .666667rem;
  text-align: center;
  margin-left:30%; 
  height: 3rem;
  line-height: 3rem;
}

.zb{
  width: 2.133333rem;
  float:right;
  margin-right: .8rem;
}

.banner {
  width: 100%;
  height: 2.89rem;
  background: url(../../assets/img/banner.png) no-repeat;
  background-size: 100%;
}

.banner img {
  width: 100%;
}

.pull-left {
  float: left !important;
}

.pull-right {
  float: right !important;
}

.main {
  width: 100%;
  text-align: center;
  font-size: 0.47rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(40, 40, 40, 1);
  padding: 0.4rem 0;
  background-color: white;
}

.tables table {
  width: 100%;
  height: 4rem;
  text-align: center;
  background-color: white;
}

.tables table tr td {
  font-size: 0.38rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  width: 33.3%;
}

.tables table tr th {
  text-align: center;
  font-size: 0.38rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(40, 40, 40, 1);
  width: 33.3%;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.bottom .wc {
  width: 50%;
  height: 1.23rem;
  line-height: 1.23rem;
  text-align: center;
  font-size: 0.41rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(38, 38, 38, 1);
}

.addclass {
  background: rgba(26, 173, 255, 1);
  color: rgba(255, 255, 255, 1) !important;
}

.close {
  height: 1.2rem;
  padding-top: 1.5rem;
  margin-top: 22%;
  width: 8.03rem;
  margin: 0 auto;
}

.erweima_bg {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: none;
}

.erweima_r {
  width: 8.03rem;
  height: 8.52rem;
  margin: 0 auto;

  background: rgba(255, 255, 255, 1);
  border-radius: 0.133333rem;
}

.erweima {
  width: 6.45rem;
  height: 6.45rem;
  padding-top: 0.7rem;
  margin: 0 auto;
}

.erweima img {
  width: 100%;
}

.erweima_r p {
  padding-top: 0.2rem;
  font-size: 0.4rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(177, 177, 177, 1);
  text-align: center;
}

.qs{
  position:fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}

#qrcode {
 position: absolute;
	top: 50%;
	left: 50%;
  border: .266667rem solid #ffffff;
	transform: translate(-50%, -50%);
  
}

.close_img {
  width: 0.83rem;
  height: 0.83rem;
  float: right;
}

.close_img img {
  width: 100%;
}
</style>
