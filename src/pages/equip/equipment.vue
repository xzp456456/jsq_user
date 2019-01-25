<template>
  <div>
    <header></header>
    <main>
      <div class="item">
        <p class="pds">已连接设备</p>
        <div class="list"  @click="navgateTo('/')">
          <div class="list_top">
            <div class="main_img pull-left">
              <img src="@/assets/img/sd.png">
            </div>
            <div class="info pull-left">
              <p class="info_t">{{info.device_name}}</p>
              <p class="info_c">设 备 ID：{{info.eId}}</p>
              <p class="info_c">剩余流量：{{info.restFlow?info.restFlow:0}}L</p>
            </div>
            <div class="tl pull-right" @click.stop="navgateQuery('self',info.eId)">
              <img src="@/assets/img/tl.png">
            </div>
          </div>
          <div class="list_state">
            <div class="stateLeft pull-left">状态：
              <span class="state">{{info.eStateDesc}}</span>
            </div>
            <div class="pull-right stateRight">
              <span>原水：{{info.rawTDS?info.rawTDS:0}}PPM</span>
              <span>净水：{{info.purityTDS?info.purityTDS:0}}PPM</span>
            </div>
          </div>
          <div class="status">
            <div class="status_name pull-left">滤芯状态：</div>
            <div class="navList pull-left">
              <div class="list_n pull-left">
                <div class="num">{{parseInt((info.F1Flux/info.F1FluxMax)*100)}}%</div>
                <div class="name">PP</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">{{parseInt((info.F2Flux/info.F2FluxMax)*100)}}%</div>
                <div class="name">udf</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">{{parseInt((info.F3Flux/info.F3FluxMax)*100)}}%</div>
                <div class="name">pp</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">{{parseInt((info.F4Flux/info.F4FluxMax)*100)}}%</div>
                <div class="name">ro</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">{{parseInt((info.F5Flux/info.F5FluxMax)*100)}}%</div>
                <div class="name">t33</div>
              </div>
            </div>
          </div>
          <div class="btnList">
            <div class="btn pull-left" >
              <button @click.stop="navgateTo('recharge')">我要充值</button>
            </div>
            <div class="pull-right">
              <div class="changeImg pull-left">
                <img src="@/assets/img/wf.png">
              </div>
              <div class="changeImg pull-left" @click.stop="controller(true)">
                <img src="@/assets/img/kgq.png">
              </div>
            </div>
          </div>
        </div>
        <p class="pds">可用设备</p>
        <div class="list" v-for="(list,index) in lists" :key="index" @click.stop="changeCurrnetDevice(list.device_id)">
          <div class="list_top">
            <div class="main_img pull-left">
              <img src="@/assets/img/sd.png">
            </div>
            <div class="info pull-left">
              <p class="info_t">{{list.device_name}}</p>
              <p class="info_c">设 备 ID：{{list.device_id}}</p>
              <p class="info_c">剩余流量：{{list.restFlow?list.restFlow:0}}L</p>
            </div>
            <div class="tl pull-right" @click.stop="navgateQuery('self',list.device_id)">
              <img src="@/assets/img/tl.png">
            </div>
          </div>
          <div class="list_state">
            <div class="stateLeft pull-left">状态：
              <span class="state">{{list.device_info.eStateDesc?list.device_info.eStateDesc:'未连接'}}</span>
            </div>
            <div class="pull-right stateRight">
              <span>原水：{{list.rawTDS?list.rawTDS:0}}PPM</span>
              <span>净水：{{list.purityTDS?list.purityTDS:0}}PPM</span>
            </div>
          </div>
          <div class="status">
            <div class="status_name pull-left">滤芯状态：</div>
            <div class="navList pull-left">
              <div class="list_n pull-left">
                <div class="num">{{list.device_info.F1Flux?parseInt((list.device_info.F1Flux/list.device_info.F1FluxMax)*100):0}}%</div>
                <div class="name">PP</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">{{list.device_info.F2Flux?parseInt((list.device_info.F2Flux/list.device_info.F2FluxMax)*100):0}}%</div>
                <div class="name">udf</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">{{list.device_info.F3Flux?parseInt((list.device_info.F3Flux/list.device_info.F3FluxMax)*100):0}}%</div>
                <div class="name">pp</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">{{list.device_info.F4Flux?parseInt((list.device_info.F4Flux/list.device_info.F4FluxMax)*100):0}}%</div>
                <div class="name">ro</div>
              </div>
              <div class="list_n pull-left">
                <div class="num">{{list.device_info.F5Flux?parseInt((list.device_info.F5Flux/list.device_info.F5FluxMax)*100):0}}%</div>
                <div class="name">t33</div>
              </div>
            </div>
          </div>
          <div class="btnList">
            <div class="btn pull-left" >
              <button @click.stop="navgateTo('recharge')">我要充值</button>
            </div>
            <div class="pull-right">
              <div class="changeImg pull-left">
                <img src="@/assets/img/wf.png">
              </div>
              <div class="changeImg pull-left" @click.stop="controller(false)">
                <img src="@/assets/img/kgq.png">
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
    <v-btn @actionClick="navgateTo('addEquipment')">添加设备</v-btn>
    <div style="width:100%;height:2rem"></div>
     <mt-popup v-model="show" position="bottom">
       <div class="coll">
        <ul>
          <li @click.stop="actionEquip(1)">关机</li>
          <li @click.stop="actionEquip(2)">强冲</li>
          <li @click.stop="actionShow()">取消</li>
        </ul>
      </div>
    </mt-popup>
  </div>
</template>
<script>
import btn from '@/components/btn'
import * as api from '@/api/api'
import { postAjax } from '@/api/axios'
import QRCode from "qrcodejs2";
export default {
  data(){
    return{
      info:{},
      show:false,
      data:{
        page:1,
        page_size:10
      },
      device_id:"",
      lists:[]
    }
  },
  created(){
    this.myOtherDeviceList();
    this.query()
  },
  components:{
    'v-btn':btn
  },
  methods:{
    actionShow(){
      this.show = false;
    },
    actionEquip(action){
      let data = {}
      if(action==0){
          var url = api.boot
        }
        if(action==1){
          var url = api.shutdown
        }
        if(action==2){
          var url = api.forceFlush
        }
      postAjax(url,data)
      .then(res=>{
          this.Toast({
            message: res.msg,
            position: "center",
            duration: 1500
          })
          this.show = false;
      })
      
     
    },
    query(){
      postAjax(api.query,{})
      .then((res)=>{
        console.log(res);
        this.info = res.data;
        this.device_id = res.data.eId;
      })
    },
    changeCurrnetDevice(id){
      let data = {device_id:id}
      postAjax(api.changeCurrnetDevice,data)
      .then(res=>{
        if(res.status){
          this.Toast({
            message: res.msg,
            position: "center",
            duration: 1500
          })
          this.query();
          this.myOtherDeviceList();
        }else{
          this.Toast({
            message: res.msg,
            position: "center",
            duration: 1500
          })
        }
      })
    },
    navgateTo(url){
      this.$router.push(url);
    },
    navgateQuery(url,id){
      this.$router.push(url);
      localStorage.setItem('device_id',id);
      localStorage.setItem('equipment',1);
    },
    controller(bool){
      this.show = bool;
      if(!bool){
        this.Toast({
            message: '未连接的设备不可发起指令',
            position: "center",
            duration: 1500
          })
      }
    },
    myOtherDeviceList(){
      let data = this.data;
      postAjax(api.myOtherDeviceList,data)
      .then(res=>{
        this.lists = res.data;
        
      })
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

.pds{
  width: 9.2rem;
  margin: 0 auto;
  height: 0.5rem;
  margin-top: .266667rem;
  line-height: 0.5rem;
  font-size: .426667rem;
}

.pds:first-child{
  color: #04d06e;
}
</style>
