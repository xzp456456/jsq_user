<template>
  <div>
    <header></header>
    <main>
      <div class="repairInfo">
        <router-link to="record">保修记录</router-link>
      </div>
      <div class="info_item">
        <div class="list">
          <div class="row">
            <div class="name pull-left">设备ID</div>
            <div class="pull-right">
              <input type="text" v-model="info.device_id" placeholder="请填写设备ID">
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="name pull-left">姓名</div>
            <div class="pull-right">
              <input type="text" v-model="info.username" placeholder="请填写您的姓名">
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="name pull-left">联系电话</div>
            <div class="pull-right">
              <input type="text" v-model="info.tel" placeholder="请填写联系电话">
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="name pull-left">设备所在地</div>
            <div class="pull-right">
              <input type="text" v-model="info.address" placeholder="请填写您的详细地址">
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="name pull-left">进出水管长度</div>
            <div class="pull-right name_text">
              <span class="text">5米内</span>
              <img src="../../assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="name pull-left">是否为市政自来水</div>
            <div class="pull-right name_text">
              <span class="text">是</span>
              <img src="../../assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="name pull-left">安装方式</div>
            <div class="pull-right name_text">
              <span class="text">台面</span>
              <img src="../../assets/img/in.png">
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="name pull-left">是否有改装</div>
            <div class="pull-right name_text">
              <span class="text">是</span>
              <img src="../../assets/img/in.png">
            </div>
          </div>
        </div>
      </div>
      <div class="problem">
        <p class="id">自动检查原因</p>
        <div class="itemProblem">
          <div class="pull-left list_p">
            <button>APP报设备漏水</button>
          </div>
          <div class="pull-left list_p">
            <button>净水器不制水</button>
          </div>
          <div class="pull-left list_p">
            <button>设备信号差</button>
          </div>
        </div>
      </div>
      <div class="texta">
        <textarea placeholder="请描述您的问题" name rows cols></textarea>
        <div class="file">
          <div class="file_all">
            <div class="imgFile" :style="{background:'url('+bg[0].url+')no-repeat center',backgroundSize: '100%'}">
              <input type="file" class="tranform" @change="getFileUp($event,0)">
            </div>
            <p>故障位置图</p>
          </div>
          <div class="file_all">
            <div class="imgFile"  :style="{background:'url('+bg[1].url+')no-repeat center',backgroundSize: '100%'}">
              <input type="file" class="tranform"  @change="getFileUp($event,1)">
            </div>
            <p>液晶屏图片</p>
          </div>
          <div class="file_all">
            <div class="imgFile"  :style="{background:'url('+bg[2].url+')no-repeat center',backgroundSize: '100%'}">
              <input type="file" @change="getFileUp($event,2)" class="tranform">
            </div>
            <p>其他图片</p>
          </div>
        </div>
      </div>

      <div class="btn">
        <button>提交</button>
      </div>
      <div class="server">
        <p>客服电话：0592 XXXXXXXX</p>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import * as api from "../../api/api";
import { postAjax, postFileUp } from "../../api/axios";
export default {
  data() {
    return {
      info: {},
      bg:[
        {url:require('../../assets/img/img.png')},
        {url:require('../../assets/img/img.png')},
        {url:require('../../assets/img/img.png')}
      ]
        
      
    };
  },
  methods: {
    getFileUp(e,el) {
      let data = new FormData();
      data.append("files[]", e.target.files[0]);
      data.append("openid", 123456);
      postFileUp(api.upload, data).then(res => {
        if(res.status){
          console.log(res);
            this.bg[el].url ='http://jsq.yxsoft.net'+ res.data.list[0].url
        }
      });
    }
  }
};
</script>

<style scoped="">
.info_item {
  width: 100%;
}

.pull-left {
  float: left !important;
}

.pull-right {
  float: right !important;
}

.info_item .list input {
  border: none;
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(202, 202, 202, 1);
  line-height: 1.5rem;
  text-align: right;
}

.name_text {
  line-height: 1.5rem;
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.name_text span {
  margin-right: 0.266666rem;
}

.name_text img {
  position: relative;
  top: 0.106666rem;
  width: 0.23rem;
  height: 0.43rem;
}

.name {
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 1.5rem;
}

.row {
  margin: 0 auto;
  width: 90%;
}

.list {
  width: 100%;
  height: 1.5rem;
  border-bottom: 1px solid #e6e6e6;
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

.repairInfo {
  width: 90%;
  margin: 0 auto;
  text-align: right;
  padding: 0.3rem 0;
}

.repairInfo a {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(26, 173, 255, 1);
}

.list_p button {
  width: 3rem;
  height: 0.68rem;
  background: rgba(26, 173, 255, 1);
  border-radius: 0rem;
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  border-radius: 0.4rem;
  outline: none;
  border: none;
}

.problem {
  margin-top: 0.5rem;
}

.id {
  width: 90%;
  margin: 0 auto;
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.itemProblem {
  padding-top: 0.4rem;
  width: 90%;
  margin: 0 auto;
  height: 0.5rem;
  padding-bottom: 0.4rem;
}

.texta {
  width: 100%;
  height: 6.07rem;
  margin-top: 0.5rem;
}
.texta textarea {
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(202, 202, 202, 1);
  padding-top: 0.3rem;
  width: 90%;
  display: block;
  height: 3rem;
  border: none;
  outline: none;
  margin: 0 auto;
}

.file {
  width: 90%;
  margin: 0 auto;
}

.file_all {
  float: left;
  text-align: center;
  margin-left: 0.3rem;
}

.imgFile {
  width: 1.67rem;
  height: 1.64rem;
  background: rgba(241, 241, 241, 1);
  background: url(../../assets/img/img.png) no-repeat;
  background-size: 100%;
}

.server {
  width: 100%;
  margin: 0.3rem 0;
  text-align: center;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(156, 156, 156, 1);
  margin-bottom: 0.5rem;
}

.tranform {
  opacity: 0;
  width: 100%;
  height: 100%;
}
</style>
