<template>
  <div id="app">
    <transition name="fade">
      <router-view class="trans"></router-view>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  margin: 0 auto;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
}
::-webkit-scrollbar{
  display: none;
  
}

.trans{
   margin: 0 auto;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-leave, .fade-enter-to {
      opacity: 1;
    }
    .fade-enter-active, .fade-leave-active {
      transition: all .4s
    }
</style>
