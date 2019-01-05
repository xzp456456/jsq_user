<template>
  <div>
    <div class="main">
      <div class="item">
        <div class="list" v-for="(list,index) in lists" :key="index">
          <p class="listOne">{{list.content}}</p>
          <p class="listTwo">{{list.create_time}}</p>
        </div>
      </div>
    </div>
    <v-btn @actionClick="addrouter">添加意见反馈</v-btn>
  </div>
</template>
<script>
import btn from '@/components/btn'
import { postAjax } from "@/api/axios";
import * as api from "@/api/api";
export default {
  data(){
    return{
       lists:[]
    }
  },
  created(){
    this.getList();
  },
  methods:{
    addrouter(){
      this.$router.push('feedback');
    },
    getList(){
      let data = {
        page:1,
        page_size:10
      }
      postAjax(api.getList,data)
      .then(res=>{
        if(res.status){
          this.lists = res.data;
        }
      })
    }
  },
  components:{
    'v-btn':btn
  }
};
</script>
<style scoped="">
.list {
  height: 1.8rem;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
}

.list p {
  width: 90%;
  margin: 0 auto;
}

.main{
  margin-bottom: 1rem;
}

.listOne {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  padding-top: 0.35rem;
  padding-bottom: 0.2rem;
}

.listTwo {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(121, 121, 121, 1);
}

.btn {
  width: 8.56rem;
  height: 1.18rem;
  margin: 0 auto;
}

.btn button {
  width: 8.56rem;
  height: 1.18rem;
  background: rgba(26, 173, 255, 1);
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  outline: none;
  border: none;
  border-radius: 0.066666rem;
  margin-top: 1rem;
}
</style>
