<template>
  <div>
    <header>
      <div class="header_r">
        <div class="item">
          <div class="list">
            <div class="name">pp</div>
            <div class="nd">
              <div class="jd"  :style="{width:info.F1Flux?(info.F1Flux/info.F1FluxMax)*100+'%':'0%'}"></div>
            </div>
            <div class="num">{{info.F1Flux?(info.F1Flux/info.F1FluxMax)*100+'%':'0%'}}</div>
          </div>
          <div class="list">
            <div class="name">udf</div>
            <div class="nd">
              <div class="jd" :style="{width:info.F2Flux?(info.F2Flux/info.F2FluxMax)*100+'%':'0%'}"></div>
            </div>
            <div class="num">{{info.F2Flux?(info.F2Flux/info.F2FluxMax)*100+'%':'0%'}}</div>
          </div>
          <div class="list">
            <div class="name">ro</div>
            <div class="nd">
              <div class="jd" :style="{width:info.F3Flux?(info.F3Flux/info.F3FluxMax*100)+'%':'0%'}"></div>
            </div>
            <div class="num">{{info.F3Flux?(info.F3Flux/info.F3FluxMax*100)+'%':'0%'}}</div>
          </div>
          <div class="list">
            <div class="name">t33</div>
            <div class="nd">
              <div class="jd" :style="{width:info.F4Flux?(info.F4Flux/info.F4FluxMax*100)+'%':'0%'}"></div>
            </div>
            <div class="num">{{info.F4Flux?(info.F4Flux/info.F4FluxMax*100)+'%':'0%'}}</div>
          </div>
          <div class="list">
            <div class="name">pp</div>
            <div class="nd">
              <div class="jd" :style="{width:info.F5Flux?(info.F5Flux/info.F5FluxMax*100)+'%':'0%'}"></div>
            </div>
            <div class="num">{{info.F5Flux?(info.F5Flux/info.F5FluxMax*100)+'%':'0%'}}</div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <Btn @actionClick="replaceFilter()">申请更换滤芯</Btn>
      <div class="text_title">滤芯</div>
      <div class="ddItem">
        <div class="ddList">
          <span>PP（5微米聚丙烯熔喷滤芯）</span>
        </div>
        <div class="ddList">
          <span>UDF（颗粒果壳活性炭滤芯）</span>
        </div>
        <div class="ddList">
          <span>PP（1微米聚丙烯熔喷滤芯）</span>
        </div>
        <div class="ddList">
          <span>RO（反渗透滤芯)</span>
        </div>
        <div class="ddList">
          <span>T33（颗粒椰壳活性炭滤芯）</span>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Btn from "@/components/btn";
import * as api from "@/api/api";
import { getAjax, postAjax } from "@/api/axios";
export default {
  name: "Element",
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
      let data = {}
      postAjax(api.query,data)
      .then(res=>{
        
        this.info = res.data
      })
    },
    replaceFilter(){
      let data ={
          f1_flux:this.info.F1Flux,
          f2_flux:this.info.F2Flux,
          f3_flux:this.info.F3Flux,
          f4_flux:this.info.F4Flux,
          f5_flux:this.info.F5Flux,
          f1_flux_max:this.info.F1FluxMax,
          f2_flux_max:this.info.F2FluxMax,
          f3_flux_max:this.info.F3FluxMax,
          f4_flux_max:this.info.F4FluxMax,
          f5_flux_max:this.info.F5FluxMax
      }
      postAjax(api.replaceFilter,data)
      .then(res=>{
          this.Toast({
            message: res.msg,
            position: "center",
            duration: 1500
          });
          setTimeout(()=>{
            this.$router.push('/');
          },1500)
      })
    },
  },
  components: {
    Btn
  }
};
</script>

<style scoped="">
.header_r {
  width: 100%;
  height: 5.89rem;
  background: rgba(33, 35, 58, 1);
}

.item {
  padding-top: 0.45rem;
}

.list {
  width: 87%;
  margin: 0 auto;
  height: 0.8rem;
  margin-bottom: 0.2rem;
}

.name {
  float: left;
  font-size: 0.49rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  width: 0.71rem;
  height: 0.28rem;
  line-height: 0.8rem;
}

.num {
  font-size: 0.4rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  width: 0.71rem;
  height: 0.28rem;
  float: right;
  line-height: 0.8rem;
}

.nd {
  margin-left: 0.3rem;
  float: left;
  width: 6.73rem;
  height: 0.48rem;
  background: url(../../assets/img/lw.png) no-repeat;
  background-size: 100%;
  margin-top: 0.2rem;
  position: relative;
}

.jd {
  background: url(../../assets/img/lx.png) no-repeat;
  background-size: 100% 0.48rem;
  position: absolute;
  z-index: 11;
  left: 0;
  top: 0;
  width: 70%;
  height: 0.48rem;
}

.btn {
  width: 8.56rem;
  height: 1.18rem;
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
  outline: none;
  border: none;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  border-radius: 0.066666rem;
}

.text_title {
  width: 85%;
  margin: 0 auto;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(121, 121, 121, 1);
  margin-top: 1rem;
  margin-bottom: 0.4rem;
}

.ddList {
  background-color: white;
  width: 100%;
  height: 1.6rem;
  line-height: 1.6rem;
  font-size: 0.42rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  border-bottom: 1px solid #e6e6e6;
}

.ddList span {
  padding-left: 7%;
}
</style>
