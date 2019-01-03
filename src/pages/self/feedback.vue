<template>
  <div>
    <div class="userInfo">
      <div class="name">姓名：{{user.username}}</div>
      <div class="phone">电话：{{user.tel}}</div>
      <div class="texta">
        <p>问题描述</p>
        <textarea v-model="content" placeholder="请描述您的问题，或者您有更好的建议！"></textarea>
      </div>
    </div>
    <v-btn @actionClick="add()">提交</v-btn>
  </div>
</template>
<script>
import btn from "../../components/btn";
import { postAjax } from "../../api/axios";
import * as api from "../../api/api";
export default {
  data() {
    return {
      content: "",
      user: {}
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    add() {
      let data = {
        content: this.content
      };
      postAjax(api.add, data).then(res => {
        console.log(res);
      });
    },
    getInfo() {
      postAjax(api.getInfo, {}).then(res => {
        if (res.status) {
          this.user = res.data;
        }
      });
    }
  },
  components: {
    "v-btn": btn
  }
};
</script>
<style scoped="">
.userInfo {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  width: 90%;
  margin: 0 auto;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #e6e6e6;
}

.texta p {
  margin: 0.3rem 0;
}

.texta textarea {
  width: 95%;
  height: 3.43rem;
  background: rgba(236, 236, 236, 1);
  border-radius: 0rem;
  margin: 0 auto;
  border: none;
  border-radius: 0.133333rem;
  padding: 4% 3%;
}

.btn {
  width: 8.56rem;
  height: 1.18rem;
  margin: 0 auto;
}

.btn button {
  outline: none;

  border: none;
  border-radius: 0.066666rem;
  width: 8.56rem;
  height: 1.18rem;
  background: rgba(26, 173, 255, 1);
  border-radius: 0rem;
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
}
</style>
