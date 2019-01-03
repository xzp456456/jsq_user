<template>
   <div class="list">
        <div class="row">
          <div class="pull-left"><slot name="text"></slot></div>
          <div class="pull-right"><slot></slot></div>
        </div>
      </div>
</template>
<script>
export default {
    
}
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
