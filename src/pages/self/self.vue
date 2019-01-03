<template>
  <div>
    <header></header>
    <main>
      <list leftName="设备ID" inputName="请填写设备ID"></list>
      <list leftName="设备地址" inputName="请填写设备别名"></list>
      <Btn btnName="提交"></Btn>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import Btn from "../../components/btn";
import list from "../../components/list";
export default {
  components: {
    Btn,
    list
  },
  methods: {}
};
</script>
<style scoped="">
</style>

