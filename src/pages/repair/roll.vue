<template>
  <div>
    <header></header>
    <main>
      <div class="item">
        <div class="row">
          <div class="list">
            <div class="text_left">
              <p>anjjj099</p>
              <p>2018-11-01 12:12:16</p>
            </div>
            <div class="text_right">获得流量：99升</div>
          </div>
          <div class="list">
            <div class="text_left">
              <p>anjjj099</p>
              <p>2018-11-01 12:12:16</p>
            </div>
            <div class="text_right">获得流量：99升</div>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped="">
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
