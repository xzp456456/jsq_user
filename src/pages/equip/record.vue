<template>
  <div>
    <header></header>
    <main>
      <div class="item">
        <div class="row">
          <div class="list" v-for="(list,index) in lists" :key="index">
            <div class="text_left">
              <p>设备ID:{{list.device_id}}</p>
              <p>{{list.create_time}}</p>
            </div>
            <div class="text_right">{{list.auto_detect_reason}}</div>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import {postAjax} from '@/api/axios';
import * as api from '@/api/api';

export default {
  data(){
    return{
      lists:[]
    }
  },
  created(){
    this.repairList();
    
  },
  mounted(){
    
  },
  methods:{
    repairList(){
      postAjax(api.repair,{})
      .then(res=>{
        console.log(res);
        this.lists = res.data;
      })
    }
  }
};
</script>

<style scoped="">
body {
  margin: 0 auto;
  padding: 0;
}

.text_left {
  float: left;
  padding-top: 0.3rem;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.text_left p:first-child {
  padding-bottom: 0.2rem;
}

.text_right {
  float: right;
  font-size: 0.42rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 1.8rem;
}

.row {
  width: 90%;
  margin: 0 auto;
}

.list {
  width: 100%;
  height: 1.8rem;
  border-bottom: 1px solid #e6e6e6;
}
</style>

