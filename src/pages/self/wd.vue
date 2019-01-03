<template>
  <div>
    <header>
      <div class="header_f" @click="navgateTo('myInfo')">
        <div class="header_o">
          <div class="pull-left logo_w">
            <div class="headerImg pull-left">
              <img :src="user.avatar">
            </div>
            <div class="txt pull-left">
              <p class="txt_num">{{user.username}}</p>
              <p class="vip">普通会员</p>
            </div>
          </div>
          <div class="pull-right back">
            <img src="../../assets/img/q.png">
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="order">
        <div class="row" @click="navgateTo('order')">
          <div class="pull-left myOrder">我的订单</div>
          <div class="pull-right allOrder">
            <div class="pull-left alltext">全部订单</div>
            <div class="pull-left allImg">
              <img src="../../assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="payAll">
          <div class="paylist" @click="navgateTo('order')">
            <div class="pay">
              <img src="../../assets/img/s1.png">
            </div>
            <div class="ptext">未支付</div>
          </div>
          <div class="paylist" @click="navgateTo('order')">
            <div class="pay">
              <img src="../../assets/img/s3.png">
            </div>
            <div class="ptext">已支付</div>
          </div>
          <div class="paylist" @click="navgateTo('order')">
            <div class="pay">
              <img src="../../assets/img/s2.png">
            </div>
            <div class="ptext">已发货</div>
          </div>
          <div class="paylist" @click="navgateTo('order')">
            <div class="pay">
              <img src="../../assets/img/s4.png">
            </div>
            <div class="ptext">已完成</div>
          </div>
        </div>
        <div class="item">
          <div class="list" @click="navgateTo('equipment')">
            <div class="pull-left">
              <div class="listImg pull-left">
                <img src="../../assets/img/trade.png">
              </div>
              <div class="pull-left text">设备管理</div>
            </div>
            <div class="back_b pull-right">
              <img src="../../assets/img/in.png">
            </div>
          </div>
          <div class="list" @click="navgateTo('Waterrecords')">
            <div class="pull-left">
              <div class="listImg pull-left">
                <img src="../../assets/img/image-text.png">
              </div>
              <div class="pull-left text">用水记录</div>
            </div>
            <div class="back_b pull-right">
              <img src="../../assets/img/in.png">
            </div>
          </div>
          <div class="list" @click="navgateTo('suggestion')">
            <div class="pull-left">
              <div class="listImg pull-left">
                <img src="../../assets/img/trade-assurance.png">
              </div>
              <div class="pull-left text">意见反馈</div>
            </div>
            <div class="back_b pull-right">
              <img src="../../assets/img/in.png">
            </div>
          </div>
          <div class="list" @click="navgateTo('distributor')">
            <div class="pull-left">
              <div class="listImg pull-left">
                <img src="../../assets/img/trade-assurance .png">
              </div>
              <div class="pull-left text">经销商信息</div>
            </div>
            <div class="back_b pull-right">
              <img src="../../assets/img/in.png">
            </div>
          </div>
          <div class="list" @click="navgateTo('shareGift')">
            <div class="pull-left">
              <div class="listImg pull-left">
                <img src="../../assets/img/remind.png">
              </div>
              <div class="pull-left text">我的推广</div>
            </div>
            <div class="back_b pull-right">
              <img src="../../assets/img/in.png">
            </div>
          </div>
        </div>
      </div>
    </main>
    <v-footer></v-footer>
  </div>
</template>
<script>
import footer from "../../components/footer";
import { postAjax } from "../../api/axios";
import * as api from "../../api/api";
export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    //获取用户信息
    getInfo() {
      postAjax(api.getInfo, {}).then(res => {
        if (res.status) {
          this.user = res.data;
        }
      });
    },
    navgateTo(url) {
      this.$router.push(url);
    }
  },
  components: {
    "v-footer": footer
  }
};
</script>
<style scoped="">
.pull-left {
  float: left !important;
}

.pull-right {
  float: right !important;
}

.header_f {
  width: 100%;
  height: 2.25rem;
}

.headerImg {
  width: 1.466666rem;
  height: 1.466666rem;
}

.header_o {
  width: 90%;
  margin: 0 auto;
}

.headerImg img {
  width: 100%;
}

.logo_w {
  padding-top: 0.3rem;
}

.txt {
  margin-left: 0.3rem;
}

.txt_num {
  font-size: 0.45rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  margin-bottom: 0.2rem;
}

.vip {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(117, 117, 117, 1);
}

.back {
  line-height: 2.25rem;
  width: 0.266667rem;
  height: 0.48rem;
}

.back img {
  width: 100%;
}

.row {
  width: 90%;
  margin: 0 auto;
}

.myOrder {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
}

.allOrder {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(142, 142, 142, 1);
}

.alltext {
  padding-right: 0.3rem;
}

.allImg {
  width: 0.186666rem;
  height: 0.32rem;
}

.allOrder img {
  position: relative;
  top: 0.03rem;
  width: 100%;
}

.order {
  width: 100%;
  height: 3.18rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0rem;
}

.payAll {
  clear: both;
  width: 87%;
  margin: 0 auto;
  padding-top: 0.3rem;
}

.paylist {
  float: left;
  text-align: center;
}

.pay {
  width: 0.746666rem;
  height: 0.746666rem;
  margin: 0 auto;
  padding-bottom: 0.07rem;
}

.pay img {
  width: 100%;
}

.paylist {
  margin: 0.586666rem;
}

.item {
  clear: both;
}

.list {
  height: 1.33rem;
  width: 90%;
  margin: 0 auto;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.listImg img {
  position: relative;
  top: 0.3rem;
  height: 0.653333rem;
  width: 0.653333rem;
}

.back_b {
  line-height: 1.33rem;
  width: 0.24rem;
  height: 0.44rem;
}

.back_b img {
  width: 100%;
}

.text {
  line-height: 1.33rem;
  padding-left: 0.3rem;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.57rem;
  box-shadow: 0rem 0rem 0rem 0rem rgba(230, 230, 230, 1);
  border-top: 1px solid #e6e6e6;
}

footer .item_home {
  padding-top: 0.3rem;
  width: 50%;
  float: left;
  text-align: center;
}
</style>

