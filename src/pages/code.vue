<template>
  <div></div>
</template>
<script>
import { getAjax } from '@/api/axios'
import $ from 'jquery'
export default {
    created(){
        console.log(this.getQueryString('code'));
        this.getInfo();
    },
  methods: {
    getQueryString(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
   var r = window.location.search.substr(1).match(reg);
   if (r != null) return unescape(r[2]); return null;
 },
    getInfo(){
      getAjax('user/oauth/callback?code='+this.getQueryString('code') ).then(res=>{
          console.log(res);
          if(res.status){
            location.href = localStorage.getItem('url');
          }
      })
    }
  }
};
</script>
<style scoped="">
</style>

