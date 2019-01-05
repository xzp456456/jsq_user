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
          <div class="orderId pull-left">订单编号：{{list.order_id}}</div>
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
        <div class="btn">
          <button>去付款</button>
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
    //this.getOrder()
  },
  methods:{
    getOrder(){
      let data = this.order;
      postAjax(api.myOrderList,data)
      .then(res=>{
        if(res.status){
          this.lists =[...this.lists,...res.data];
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
    }
  },
  components:{
    'v-more':Vmore
  }
};
</script>
<style scoped="">


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
  height: 0.4rem;
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
  height: 5.16rem;
  padding-top: 0.3rem;
}

.active{
  border-bottom: .053333rem solid #1AADFF; 
}
</style>
