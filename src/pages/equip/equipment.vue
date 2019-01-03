<template>
  <div>
    <header></header>
    <main>
      <div class="item">
        <div class="list">
          <div class="list_top">
            <div class="main_img pull-left">
              <img src="../../assets/img/sd.png">
            </div>
            <div class="info pull-left">
              <p class="info_t">办公室</p>
              <p class="info_c">设 备 ID：5522</p>
              <p class="info_c">剩余流量：552L</p>
            </div>
            <div class="tl pull-right" @click="navgateTo('self')">
              <img src="../../assets/img/tl.png">
            </div>
          </div>
          <div class="list_state">
            <div class="stateLeft pull-left">状态：
              <span class="state">正常</span>
            </div>
            <div class="pull-right stateRight">
              <span>原水：19PPM</span>
              <span>净水：4PPM</span>
            </div>
          </div>
          <div class="status">
            <div class="status_name pull-left">滤芯状态：</div>
            <div class="navList pull-left">
              <div class="list_n pull-left">
                <div class="num">95%</div>
                <div class="name">PP</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">95%</div>
                <div class="name">udf</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">95%</div>
                <div class="name">pp</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">95%</div>
                <div class="name">ro</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">95%</div>
                <div class="name">t33</div>
              </div>
            </div>
          </div>
          <div class="btnList">
            <div class="btn pull-left" >
              <button @click="navgateTo('recharge')">我要充值</button>
            </div>
            <div class="pull-right">
              <div class="changeImg pull-left">
                <img src="../../assets/img/wf.png">
              </div>
              <div class="changeImg pull-left" @click="controller()">
                <img src="../../assets/img/kgq.png">
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
    <v-btn @actionClick="navgateTo('addEquipment')">添加设备</v-btn>
     <mt-popup v-model="show" position="bottom">
       <div class="coll">
        <ul>
          <li>关机</li>
          <li>强冲</li>
          <li>取消</li>
        </ul>
      </div>
    </mt-popup>
  </div>
</template>
<script>
import btn from '@/components/btn'
export default {
  data(){
    return{
      show:false
    }
  },
  components:{
    'v-btn':btn
  },
  methods:{
    navgateTo(url){
      this.$router.push(url);
    },
    controller(){
      this.show = true;
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
  width: 9.19rem;
  height: 6.29rem;
  margin: 0 auto;
  margin-top: 0.4rem;
  background-color: white;
  border-radius: 0.133333rem;
}

.list_top {
  width: 90%;
  margin: 0 auto;
  padding-top: 0.5rem;
  height: 1.8rem;
}

.main_img {
  width: 2.39rem;
  height: 1.72rem;
}

.info_t {
  font-size: 0.44rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
  padding-bottom: 0.1rem;
  padding-left: 0.3rem;
}

.info_c {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
  padding-bottom: 0.1rem;
  padding-left: 0.3rem;
}

.main_img img {
  width: 100%;
}

.list_state {
  clear: both;
  width: 90%;
  margin: 0.3rem auto;
}

.list_state {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(105, 105, 105, 1);
  height: 0.5rem;
}

.state {
  color: #04d06e;
}

.stateRight {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(105, 105, 105, 1);
}

.status {
  clear: both;
  width: 90%;
  margin: 0 auto;
  height: 1.3rem;
}

.status_name {
  font-size: 0.4rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(105, 105, 105, 1);
  line-height: 1.3rem;
}

.num {
  font-size: 0.3rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(105, 105, 105, 1);
  width: 0.72rem;
  height: 0.72rem;
  background: rgba(240, 240, 240, 1);
  border-radius: 50%;
  line-height: 0.72rem;
  text-align: center;
}

.name {
  font-size: 0.4rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
}

.list_n {
  margin-left: 0.2rem;
}

.btnList {
  width: 90%;
  clear: both;
  margin: 0 auto;
  height: 2rem;
  margin-top: 0.2rem;
}

.btn {
  width: 1.95rem;
  height: 0.75rem;
}

.btn button {
  width: 1.95rem;
  height: 0.75rem;
  background: rgba(26, 173, 255, 1);
  border-radius: 0.5rem;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  outline: none;
  border: none;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}

.changeImg {
  margin-left: 0.4rem;
}

.add {
  width: 8.56rem;
  height: 1.18rem;
  margin: 0 auto;
  margin-top: 0.5rem;
}

.add button {
  width: 8.56rem;
  height: 1.18rem;
  background: rgba(26, 173, 255, 1);

  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  outline: none;
  border: none;
  border-radius: 0.04rem;
}

.layerOut {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: block;
}

.coll {
  width: 100%;
  text-align: center;
  bottom: 0;
  z-index: 99;
}


.coll ul li {
  background: white;
  width: 100%;
  border-bottom: 1px solid #dfe1e3;
  height: 1.6rem;
  font-size: 0.46rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 1.6rem;
}

.mint-popup-bottom{
  width: 100%;
}

img {
  width: 60%;
}
</style>
