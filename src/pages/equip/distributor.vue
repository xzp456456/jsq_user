<template>
  <div>
    <div class="item">
      <list-text>
        <span slot="text">经销商名称</span>
        <span>厦门XX公司</span>
      </list-text>
      <list-text>
        <span slot="text">联系电话</span>
        <div class="pull-left phone">
          <img src="../../assets/img/phone.png">
        </div>
        <div class="pull-left idnum">15585965896</div>
      </list-text>
      <list-text>
        <span slot="text">经销商编号</span>
        <span>3555</span>
      </list-text>
      <list-text>
        <span slot="text">市运营中心信息</span>
        <span>NO</span>
      </list-text>
      <list-text>
        <span slot="text">地址</span>
        <span>厦门市集美区软件园三期</span>
      </list-text>
       <list-text>
        <span slot="text">客服电话</span>
        <div class="pull-left phone">
              <img src="../../assets/img/phone.png">
            </div>
            <div class="pull-left idnum">12365121511</div>
      </list-text>
    </div>
  </div>
</template>
<script>
import listText from "../../components/listText";
export default {
  name: "distributor",
  components: {
    "list-text": listText
  }
};
</script>
<style scoped="">
.item {
  width: 100%;
}

.pull-left {
  float: left !important;
}

.pull-right {
  float: right !important;
}

.list {
  width: 100%;
  height: 1.3rem;
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 1.3rem;
  border-bottom: 1px solid #e6e6e6;
}

.row {
  width: 90%;
  margin: 0 auto;
}

.phone {
  width: 0.36rem;
  height: 0.36rem;
  position: relative;
  top: 0.05rem;
  right: 0.3rem;
}

.phone img {
  width: 100%;
  height: 100%;
}

.idnum {
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(26, 173, 255, 1);
}
</style>
