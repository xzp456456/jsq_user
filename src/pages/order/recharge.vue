<template>
  <div>
    <header></header>
    <main>
      <div class="item">
        <div
          :class="tab==index?'select list':'list'"
          v-for="(list,index) in lists"
          :key="index"
          @click="select(index,list.packet_id)"
        >
          <div class="row">
            <div class="log">
              <img src="../../assets/img/cz.png">
            </div>
            <div class="info">
              <p class="ml">{{list.name}}</p>
              <p class="money">￥{{list.price}}</p>
            </div>
          </div>
        </div>
      </div>
      <v-btn @actionClick="pay()">立即支付</v-btn>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import { postAjax, $ } from "../../api/axios";
import * as api from "../../api/api";
import btn from "../../components/btn";
export default {
  data() {
    return {
      lists: [],
      tab: 0,
      packet_id: ""
    };
  },
  created() {
    // window.location.href =
    //   "http://www.iyunmima.com/view/users/index.html?#/recharge";
    this.getList();
    this.getWxInfo();
  },
  components: {
    "v-btn": btn
  },
  methods: {
    getList() {
      postAjax(api.recharge, {}).then(res => {
        if (res.status) {
          console.log(res);
          this.lists = res.data;
          this.packet_id = res.data[0].packet_id
        }
      });
    },
    select(index, packet_id) {
      this.tab = index;
      this.packet_id = packet_id;
    },
    pay() {
      let data = {
        packet_id: this.packet_id
      };
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
        }
      });
    },
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
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              // 使用以上方式判断前端返回,微信团队郑重提示：
              //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              that.$router.push('/');

            }
          }
        );
      });
    }
  }
};
</script>
<style scoped="">
body {
  margin: 0 auto;
  padding: 0;
  background: #f9f9f9;
  width: 100%;
  height: 100%;
  position: absolute;
}

.log {
  float: left;
  width: 2.39rem;
  height: 1.72rem;
}

.log img {
  width: 100%;
}

.info {
  float: left;
  margin-left: 0.4rem;
}

.item {
  width: 90%;
  margin: 0 auto;
}

.list {
  width: 9.19rem;
  margin: 0 auto;
  background-color: white;
  height: 2.6rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0rem;
  padding-top: 0.8rem;
  border-radius: 0.133333rem;
  margin-top: 0.5rem;
}

.row {
  width: 90%;
  margin: 0 auto;
}

.info p {
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
}

.ml {
  padding-bottom: 0.7rem;
}

.money {
  font-size: 0.44rem !important;
  font-weight: 500 !important;
  color: #ff5555 !important;
}

.btn {
  width: 8.56rem;
  height: 1.19rem;
  margin: 0 auto;
  margin-top: 0.8rem;
}

.btn button {
  border: none;
  outline: none;
  width: 8.56rem;
  height: 1.19rem;
  background: rgba(26, 173, 255, 1);
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  border-radius: 0.04rem;
}

.select {
  border: 1px solid rgba(26, 173, 255, 1);
}
</style>
