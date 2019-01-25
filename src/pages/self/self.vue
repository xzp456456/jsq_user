<template>
  <div>
    <main>
      <list leftName="设备ID">
        <input type="text" v-model="equip.device_id" disabled="disabled" placeholder="请填写设备ID">
      </list>
      <list leftName="设备地址">
        <input type="text" v-model="equip.device_name" placeholder="请填写设备别名">
      </list>
      <Btn @actionClick="editDevice">提交</Btn>
    </main>
  </div>
</template>
<script>
import Btn from "@/components/btn";
import list from "@/components/list";
import { postAjax } from "@/api/axios";
import * as api from "@/api/api";
export default {
  data() {
    return {
      equip: {}
    };
  },
  created(){
    this.equip.device_id =localStorage.getItem('device_id');
  },
  methods: {
    editDevice() {
      let data = {
        device_id: this.equip.device_id,
        device_name: this.equip.device_name
      };
      postAjax(api.editDevice, data).then(res => {
        if (res.status) {
          this.Toast({
            message: res.msg,
            position: "center",
            duration: 1500
          });
          setTimeout(() => {
              this.$router.back(-1);
          }, 1500);
        } else {
          this.Toast({
            message: res.msg,
            position: "center",
            duration: 1500
          });
        }
      });
    }
  },
  components: {
    Btn,
    list
  }
};
</script>
<style scoped="">
input[type="text" i]:disabled{
  background-color: transparent;
}

</style>

