<template>
  <div>
    <header></header>
    <main>
      <div class="item">
        <div class="list">
          <div class="row">
            <div class="pull-left title">累计净水量</div>
            <div class="pull-right text_right">{{info.usedFlow}}升</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">已守护时长</div>
            <div class="pull-right text_right">{{info.usedTime}}天</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">本次用水</div>
            <div class="pull-right text_right">{{info.thisFlow}}升</div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">本次套餐余量</div>
            <div class="pull-right text_right">{{info.restFlow}}升</div>
          </div>
        </div>
      </div>
      <div class="btn">
        <button @click="navgateTo('recharge')">购买套餐</button>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import * as api from "@/api/api";
import { postAjax } from "@/api/axios";
export default {
  data(){
    return{
      info:{}
    }
  },
  created(){
    this.query()
  },
  methods:{
    query(){
      postAjax(api.query,{})
      .then(res=>{
        this.info = res.data;
      })
    },
    navgateTo(url){
      this.$router.push(url)
    }
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

.list {
  width: 100%;
  height: 1.6rem;
  border-bottom: 1px solid #e6e6e6;
  font-size: 0.42rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.text_right {
  line-height: 1.6rem;
}

.row {
  width: 90%;
  margin: 0 auto;
}

.title {
  line-height: 1.6rem;
}

.btn {
  width: 8.56rem;
  height: 1.18rem;
  border-radius: 0rem;
  margin: 0 auto;
  margin-top: 1rem;
}

.btn button {
  width: 8.56rem;
  height: 1.18rem;
  background: rgba(26, 173, 255, 1);
  border-radius: 0rem;
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  outline: none;
  border: none;
  border-radius: 0.066666rem;
}
</style>
