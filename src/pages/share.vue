<template>
  <div></div>
</template>
<script>
import * as api from "@/api/api";
import { postAjax } from "@/api/axios";
export default {
  data() {
    return {
      device_id: ""
    };
  },
  created() {
    this.bindDevice();
  },
  mounted(){
   
    
  },
  methods: {
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    bindDevice() {
       this.device_id = this.getQueryString("device_id");
      let data = { device_id: this.device_id };
      postAjax(api.bindDevice, data).then(res => {
        if (res.status==1) {
          this.$router.push("/");
        }
      });
    }
  }
};
</script>
<style scoped="">
</style>
