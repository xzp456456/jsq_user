<template>
  <div>
    <main>
      <div class="info_item">
        <list-input>
          <span slot="text">设备ID</span>
          <input type="text" slot="input" v-model="add.device_id" placeholder="请填写设备ID">
        </list-input>
        <list-input>
          <span slot="text">设备别名</span>
          <input type="text" slot="input" v-model="add.device_name" placeholder="请填写设备别名">
        </list-input>
        <div class="list" @click="showAcction2(true)">
          <div class="row">
            <div class="name pull-left">设备型号</div>
            <div class="pull-right name_text">
              <span class="text">{{value}}</span>
              <img src="@/assets/img/in.png">
            </div>
          </div>
        </div>
        <list-input>
          <span slot="text">经销商ID</span>
          <input
            type="text"
            slot="input"
            v-model="add.dealer_id"
            @input="getIdDevice()"
            placeholder="请填写经销商ID"
          >
        </list-input>
        <list-input>
          <span slot="text">经销商名称</span>
          <input
            type="text"
            slot="input"
            placeholder="请填写经销名称"
            disabled="disabled"
            :value="add.devices"
          >
        </list-input>
        <list-input>
          <span slot="text">客户姓名</span>
          <input type="text" slot="input" v-model="add.username" placeholder="请填写客户姓名">
        </list-input>
        <list-input>
          <span slot="text">联系电话</span>
          <input type="text" slot="input" v-model="add.tel" placeholder="请填写你的手机或固话号码">
        </list-input>
        <!-- <div class="list">
          <div class="row">
            <div class="name pull-left">省市区</div>
            <div class="pull-right name_text">
              <span class="text">106升</span>
              <img src="../assets/img/in.png">
            </div>
          </div>
        </div>-->
        <div class="list" @click="showAcction(true)">
          <div class="row">
            <div class="name pull-left">省市区</div>
            <div class="pull-right name_text">
              <span class="text">{{add.province}}{{add.city}}{{add.area}}</span>
              <img src="@/assets/img/in.png">
            </div>
          </div>
        </div>
        <list-input>
          <span slot="text">详细地址</span>
          <input type="text" slot="input" v-model="add.address" placeholder="请填写你的安装详细地址">
        </list-input>
      </div>
      <v-btn @actionClick="addDevice()">提交</v-btn>
    </main>
    <mt-popup v-model="show" position="bottom">
      <mt-picker :slots="slots" @change="onValuesChange" :showToolbar="false" :value-key="'name'" >
        <a class="usi-btn-cancel">取消</a>
        <a class="usi-btn-sure" @click="showAcction(false)">确定</a>
      </mt-picker>
    </mt-popup>
    <mt-popup v-model="show2" position="bottom">
      <mt-picker :slots="slots2" @change="changeId" :showToolbar="false" :value-key="'model_name'"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import Picker from "@/components/Picker";
import listInput from "@/components/listInput";
import btn from "@/components/btn";
import { postAjax, postJquery } from "@/api/axios";
import * as api from "@/api/api";
const address = require("../../../static/json/address.json");
import { Indicator } from 'mint-ui';
export default {
  name: "addEquipment",
  data() {
    return {
      dealer_id: "",
      value: "",
      add: {},
      show: false,
      show2: false,
      slots2: [
        {
          flex: 1,
          values: [
            { model_name: "商务I型(MS-3805W)", model_id: 1 },
            { model_name: "家用II型(LANMAX-185)", model_id: 2 }
          ],
          className: "slot4",
          textAlign: "center"
        }
      ],
      slots: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "left"
        },
        {
          flex: 1,
          values: [],
          className: "slot2",
          textAlign: "center"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "right"
        }
      ]
    };
  },
  created() {
    this.province();
    
  },
  mounted() {
    this.getParam();
    this.getDeviceModelList();
  },
  methods: {
    getParam() {
      let param = this.getQueryString("share");
      console.log(param);
      if (param == null) {
        this.add.share_device_id = this.getQueryString("share_device_id");
        this.add.share_uid = this.getQueryString("share_uid");
      } else {
        let jsonParam = JSON.parse(param);
        this.add.share_uid = jsonParam.share_uid;
        this.add.share_device_id = jsonParam.share_device_id;
      }
    },
    getIdDevice() {
      console.log(this.add.dealer_id);
      let data = { dealer_id: this.add.dealer_id };
      postAjax(api.deviceInfo, data)
        .then(res => {
          //this.add.devices = res.data.name;
          this.$set(this.add, "devices", res.data.name);
        })
        .catch(res => {
          this.$set(this.add, "devices", "");
        });
    },
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    //获取设备型号方法
    getDeviceModelList() {
      postAjax(api.getDeviceModelList, {}).then(res => {
        console.log(res);
        // this.slots2[0].values = [{model_name:'请选择型号',model_id:""},...res.data];
        let item = res.data;
        let view = item.map(item => {
          return item;
        });
        view.unshift({model_name:'请选择型号',model_id:0});
        this.slots2[0].values = view;
      });
    },
    changeId(picker, values) {
      this.add.device_model_id = values[0].model_id;
      this.value = values[0].model_name;
    },
    showAcction(bool) {
      this.show = bool;
    },
    showAcction2(bool) {
      this.show2 = bool;
    },
    addDevice() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      postAjax(api.addDevice, this.add).then(res => {
        
        if (res.status == 10000) {
          localStorage.setItem("url", window.location.href);
          window.location.href = res.data.url;
          return;
        }
        if (res.status) {
          this.Toast({
            message: res.msg,
            position: "center",
            duration: 1500
          });
          setTimeout(() => {
            this.$router.push("/");
          }, 1500);
          Indicator.close();
        } else {
          this.Toast({
            message: res.msg,
            position: "center",
            duration: 1500
          });
          Indicator.close();
        }
      });
    },
    province() {
      let province = address.data.list;
      let prolist = province.map(item => {
        return { name: item.province, id: item.provinceid };
      });
      prolist.unshift({name: '请选择', id: ""});
      this.slots[0].values = prolist;
    },
    cities(province) {
      return new Promise((resolve, reject) => {
        let list = address.data.list;
        var cities = "";
        list.filter(item => {
          //获取城市json
          if (item.province == province) {
            cities = item.cities;
          }
        });

        let citlist = cities.map(item => {
          return { name: item.city, id: item.cityid };
        });
       // citlist.unshift({name: '', id: ""});
        resolve(citlist);
      });
    },
    area(province, city) {
      return new Promise((resolve, reject) => {
        let list = address.data.list;
        var cities = "";
        list.filter(item => {
          //获取城市json
          if (item.province == province) {
            cities = item.cities;
          }
        });
        var area = "";
        cities.filter(item => {
          if (item.city == city) {
            area = item.district;
          }
        });
        let arealist = area.map(item => {
          return { name: item.area, id: item.areaid };
        });
      //  arealist.unshift({name: '', id: ""});
        resolve(arealist);
      });
    },
    onValuesChange(picker, values) {
      this.cities(values[0].name)
        .then(city => {
          picker.setSlotValues(1, city);
        })
        .then(() => {
          this.area(values[0].name, values[1].name).then(area => {
            picker.setSlotValues(2, area);
          });
        });

      this.add.province_id = values[0].id;
      this.add.province = values[0].name;
      this.add.city_id = values[1].id;
      this.add.city = values[1].name;
      this.add.area_id = values[2].id;
      this.add.area = values[2].name;
    }
  },
  components: {
    "list-input": listInput,
    "v-btn": btn
  },
  watch: {}
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
  /* color: rgba(202, 202, 202, 1); */
  text-align: right;
  width: 100%;
}

input {
  color: black !important;
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
  width: 0.25rem;
  position: relative;
  top: 0.106666rem;
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
  line-height: 1.5rem;
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

.pickers {
  width: 100%;
  background-color: white;
  position: fixed;
  bottom: 0;
}

.pick {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: fixed;
  bottom: 0;
  text-align: center;
  display: block;
  font-size: 1.875rem;
}

.slot1 {
  font-size: 0.4rem !important;
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
input[type="text" i]:disabled {
  background-color: transparent;
}
</style>
