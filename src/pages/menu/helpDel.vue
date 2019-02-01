<template>
  <div>
    <div class="input-list">
      <div class="row">
        <span class="left">设备ID</span>
        <span class="right">{{info.help_id}}</span>
      </div>
    </div>
    <p class="info">用户信息</p>
    <div class="input-list">
      <div class="row">
        <span class="left">客户姓名</span>
        <span class="right">{{info.username}}</span>
      </div>
    </div>
    <div class="input-list">
      <div class="row">
        <span class="left">客户电话</span>
        <span class="right">{{info.tel}}</span>
      </div>
    </div>
    <div class="input-list">
      <div class="row">
        <span class="left">经销商名称</span>
        <span class="right">{{info.name}}</span>
      </div>
    </div>
    <div class="input-list" @click="showAcction(true)">
      <div class="row">
        <span class="left">请选择充值套餐</span>
        <span class="right">
            {{read.name}}
          <img class="in" src="@/assets/img/in.png" alt>
        </span>
      </div>
    </div>
    <v-btn @actionClick="pay()">购买</v-btn>
    <mt-popup v-model="show" position="bottom">
      <mt-picker :slots="slots" :showToolbar="true" @change="changeId" :value-key="'name'">
           <a class="usi-btn-cancel" @click="showAcction(false)">取消</a>
            <a class="usi-btn-sure" @click="readBtn()">确定</a>
      </mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import btn from "@/components/btn";
import { postAjax, postJquery } from "@/api/axios";
import * as api from "@/api/api";
export default {
  components: {
    "v-btn": btn
  },
  data() {
    return {
      show: false,
      info: {},
      lists: [],
      values:{},
      read:{},
      slots: [
        {
          flex: 1,
          values: [ ],
          className: "slot",
          textAlign: "center"
        }
      ]
    };
  },
  created() {
      this.getDeviceModelList();
      this. getWxInfo();
    this.getDeviceBindInfo();
    this.getRechargePacketList();
  },
  methods: {
       getWxInfo() {
      let data = { url: window.location.href.split("#")[0] };
      postAjax(api.getWxInfo, data).then(res => {
        this.wxConfig(
          res.data.appId,
          res.data.timestamp,
          res.data.nonceStr,
          res.data.signature
        );
      });
    },
      pay(){
          this.read.device_id = localStorage.getItem('help_id');
          let data = this.read;
          postAjax(api.createOrder, data).then(res => {
        console.log(res);
        var sign = res.data.sign;
        if (res.status) {
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener(
                "WeixinJSBridgeReady",
                onBridgeReady,
                false
              );
            } else if (document.attachEvent) {
              document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
              document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
            }
          } else {
            this.onBridgeReady(
              sign.appId,
              sign.timeStamp,
              sign.nonceStr,
              sign.package,
              sign.paySign
            );
          }
        }else{
          this.Toast({
                    message: res.msg,
                    position: "center",
                    duration: 1500
                });
        }
      });

      },
      showAcction(bool){
          this.show = bool;
      },
    getDeviceBindInfo() {
      postAjax(api.getDeviceBindInfo, {
        device_id: localStorage.getItem("help_id")
      }).then(res => {
        console.log(res);
        this.info = res.data;
        this.info.help_id = localStorage.getItem("help_id");
      });
    },
    getRechargePacketList() {
      postAjax(api.getRechargePacketList, {}).then(res => {
          this.slots[0].values = res.data;
      });
    },
    changeId(picker,value){
        this.values.name  = value[0].name;
        this.values.packet_id = value[0].packet_id;
    },
    readBtn(){
        this.read = this.values;
        this.showAcction(false);
    },
     wxConfig(appId, ts, nonceStr, signature) {
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appId, // 必填，公众号的唯一标识
        timestamp: ts, // 必填，生成签名的时间戳
        nonceStr: nonceStr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名，见附录1
        jsApiList: ["chooseWXPay"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
    },
    getDeviceModelList() {
      postAjax(api.getDeviceModelList, {}).then(res => {
        console.log(res);
      });
    },
    onBridgeReady(appId, timeStamp, nonceStr, packages, paySign) {
       var that = this;
      var ts = timeStamp.toString();
      wx.ready(function() {
        WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          {
            appId: appId, //公众号名称，由商户传入
            timeStamp:ts, //时间戳，自1970年以来的秒数
            nonceStr: nonceStr, //随机串
            package: packages,
            signType: "MD5", //微信签名方式：
            paySign: paySign //微信签名
          },
          function(res) {
            console.log(res);
  
            that.Toast({
                    message: '代充成功',
                    position: "center",
                    duration: 1500
                });
          }
        );
      });
    }
  }
};
</script>
<style scoped="">
.left {
  float: left;
}
.right {
  float: right;
}

.in {
  width: 0.24rem;
  height: 0.44rem;
  margin-left: 0.266667rem;
  position: relative;
  top: 0.05rem;
}

.input-list {
  width: 100%;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  height: 1.373333rem;
  line-height: 1.373333rem;
}

.input-list span {
  font-size: 0.4rem;
}

.row {
  width: 90%;
  margin: 0 auto;
}

.info {
  width: 90%;
  margin: 0 auto;
  font-size: 0.333333rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(120, 120, 120, 1);
}

#select {
  outline: none;
  border: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  direction: rtl;
}

.mint-popup-bottom {
  width: 100% !important;
}

.usi-btn-cancel {
  float: left;
  margin-left: 15px;
  line-height: 40px;
  font-size: 15px;
}
.usi-btn-sure {
  float: right;
  margin-right: 15px;
  line-height: 40px;
  font-size: 15px;
  color: blueviolet;
}
</style>
