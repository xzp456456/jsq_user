<template>
<div class="mores">
  <mt-loadmore :bottom-method="loadTop" @bottom-status-change="handleTopChange">
    <slot></slot>
    <div slot="bottom" class="mint-loadmore-bottom">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">上拉刷新</span>
    </div>
  </mt-loadmore>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topStatus: ""
    };
  },
  methods: {
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop(){
        // setTimeout(()=>{
        //     this.$emit('actionLoad');
        // },11500)
        console.log(1);
    }
  }
};
</script>
<style scoped="">
.mint-loadmore{
    width: 100%;
}

.mores{
    width: 100%;
    height: 100%;
    overflow:scroll;
}
</style>

