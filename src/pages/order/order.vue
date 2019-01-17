<template>
  <div>
    <div class="nav">
      <ul>
        <li v-for="(nav,index) in navs" :key="index" :class="{active:index==tabIndex}"  @click="navTab(index)">{{nav}}</li>
      </ul>
    </div>
    <div>
   
  <div class="orderItem">
    <div class="orderList" v-for="(list,index) in lists" :key="index">
      <div class="row">
        <div class="title">
          <div class="orderId pull-left">订单时间：{{list.create_time}}</div>
          <div class="status pull-right" v-if="list.status==0">未支付</div>
          <div class="status pull-right" v-if="list.status==1">已支付</div>
          <div class="status pull-right" v-if="list.status==2">已完成</div>
          <div class="status pull-right" v-if="list.status==3">已发货</div>
        </div>
        <div class="numInfo">
          <div class="num">
            <p>{{list.order_name}}</p>
            <p>
              <span class="pull-left money">¥ {{list.packet_price}}</span>
              <span class="pull-right nums">x1</span>
            </p>
          </div>
        </div>
        <div class="total">合计:
          <span class="money_toall">￥{{list.amount}}</span>
        </div>
        <div class="btn" v-if="list.status==0">
          <button @click="pay(list.order_id)">去付款</button>
          </div>
      </div>
    </div>

    </div>
    
    </div>
    <!-- <div class="orderList">
      <div class="row">
        <div class="title">
          <div class="orderId pull-left">订单编号：18070514570001</div>
          <div class="status pull-right">未支付</div>
        </div>
        <div class="numInfo">
          <div class="num">
            <p>980元3500升（0.28元/升）</p>
            <p>
              <span class="pull-left money">¥ 40</span>
              <span class="pull-right nums">x1</span>
            </p>
          </div>
        </div>
        <div class="total">合计:
          <span class="money_toall">￥40.00</span>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import {postAjax} from '@/api/axios'
import * as api from '@/api/api'
import Vmore from '@/components/Loadmore'
export default {
  data(){
    return{
      navs:['全部','未支付','已支付','已发货','已完成'],
      lists:[],
      tabIndex:0,
      order:{page_size:0,page:1},
      loading :false
    }
  },
  created(){
    this.getWxInfo();
     this.tabIndex = parseInt(localStorage.getItem('tab'))+1;
     this.order.status = parseInt(localStorage.getItem('tab'));
    this.getOrder();
  },
  methods:{
    getOrder(){
      let data = this.order;
      postAjax(api.myOrderList,data)
      .then(res=>{
        if(res.status){
          this.lists = res.data;
        }
      })
    },
    navTab(index){
      this.tabIndex = index;
      this.order.status = index-1;
      if(this.order.status<0){
        this.order.status = "";
      }
      this.getOrder(); 
    },
    Loadmore(){
     this.order.page_size = this.order.page_size+10;
      this.getOrder(); 
    },
     pay(order_id) {
      let data = {
        order_id: order_id
      };
      postAjax(api.payOrder, data).then(res => {
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
      var ts = timeStamp.toString();
      wx.ready(function() {
        WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          {
            appId: appId, //公众号名称，由商户传入
            timeStamp: ts, //时间戳，自1970年以来的秒数
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

            }
          }
        );
      });
    }
  },
  components:{
    'v-more':Vmore
  }
};
</script>
<style scoped="">
body{
  background-color: #FDFDFD;
}

li {
  list-style: none;
}

.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.nav {
  height: 1.28rem;
  background: rgba(255, 255, 255, 1);
  border-top: 1px solid #d7dae1;
  border-bottom: 1px solid #d7dae1;
}

.nav ul li {
  float: left;
  margin:0 0.41rem;
  line-height:  1.28rem;
  font-size: 0.41rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(142, 142, 142, 1);
}

.row {
  width: 90%;
  margin: 0 auto;
}

.title {
  margin-top: 0.5rem;
  height: 1rem;
}

.status {
  font-size: 0.36rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.orderId {
  font-size: 0.36rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.numInfo {
  width: 8.97rem;
  height: 1.95rem;
  background: rgba(249, 249, 249, 1);
  margin: 0 auto;
  clear: both;
}

.num {
  padding-top: 0.3rem;
  padding-left: 0.5rem;
}

.num p {
  font-size: 0.39rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  padding-bottom: 0.3rem;
}

.money {
  font-size: 0.41rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 73, 73, 1);
}

.nums {
  font-size: 0.34rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(46, 45, 45, 1);
  padding-right: 0.5rem;
}

.total {
  clear: both;
  text-align: right;
  font-size: 0.33rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(5, 5, 5, 1);
  margin-top: 0.3rem;
}

.btn {
  width: 1.93rem;
  height: 0.71rem;
  float: right;
  margin-top: 0.3rem;
}

.btn button {
  width: 1.93rem;
  height: 0.71rem;
  background: rgba(26, 173, 255, 1);
  border-radius: 0rem;
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  border-radius: 0.4rem;
  outline: none;
  border: none;
}

.money_toall {
  font-size: 0.44rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 85, 85, 1);
}

.orderList {
  width: 100%;
  height: 6rem;
  padding-top: 0.3rem;
}

.active{
  border-bottom: .053333rem solid #1AADFF; 
}
</style>
