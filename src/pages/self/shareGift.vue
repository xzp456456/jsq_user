<template>
  <div>
    <div class="erweima_bg">
      <div class="close">
        <div class="close_img">
          <img src="../../assets/img/close.png">
        </div>
      </div>
      <div class="erweima_r">
        <div class="erweima">
          <img src="../../assets/img/erweima.png">
        </div>
        <p>长按识别二维码，邀请好友</p>
      </div>
    </div>
    <header>
      <div class="banner">
        <img src="../../assets/img/banner.png">
      </div>
    </header>
    <main>
      <div class="main">我的邀请名单</div>
      <div class="tables">
        <table>
          <tr>
            <th>邀请好友</th>
            <th>获得奖励</th>
            <th>日期</th>
          </tr>
          <tr>
            <td>ljik</td>
            <td>99升</td>
            <td>20181116</td>
          </tr>
          <tr>
            <td>ljik</td>
            <td>99升</td>
            <td>20181116</td>
          </tr>
          <tr>
            <td>ljik</td>
            <td>99升</td>
            <td>20181116</td>
          </tr>
        </table>
      </div>
    </main>
    <footer>
      <div class="bottom">
        <div class="pull-left wc">分享邀请</div>
        <div class="pull-right wc addclass">面对面邀请</div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped="">
.banner {
  width: 100%;
  height: 2.89rem;
  background: url(../../assets/img/banner.png) no-repeat;
  background-size: 100%;
}

.banner img {
  width: 100%;
}

.pull-left {
  float: left !important;
}

.pull-right {
  float: right !important;
}

.main {
  width: 100%;
  text-align: center;
  font-size: 0.47rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(40, 40, 40, 1);
  padding: 0.4rem 0;
  background-color: white;
}

.tables table {
  width: 100%;
  height: 4rem;
  text-align: center;
  background-color: white;
}

.tables table tr td {
  font-size: 0.38rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  width: 33.3%;
}

.tables table tr th {
  text-align: center;
  font-size: 0.38rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(40, 40, 40, 1);
  width: 33.3%;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.bottom .wc {
  width: 50%;
  height: 1.23rem;
  line-height: 1.23rem;
  text-align: center;
  font-size: 0.41rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(38, 38, 38, 1);
}

.addclass {
  background: rgba(26, 173, 255, 1);
  color: rgba(255, 255, 255, 1) !important;
}

.close {
  height: 1.2rem;
  padding-top: 1.5rem;
  margin-top: 22%;
  width: 8.03rem;
  margin: 0 auto;
}

.erweima_bg {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: none;
}

.erweima_r {
  width: 8.03rem;
  height: 8.52rem;
  margin: 0 auto;

  background: rgba(255, 255, 255, 1);
  border-radius: 0.133333rem;
}

.erweima {
  width: 6.45rem;
  height: 6.45rem;
  padding-top: 0.7rem;
  margin: 0 auto;
}

.erweima img {
  width: 100%;
}

.erweima_r p {
  padding-top: 0.2rem;
  font-size: 0.4rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(177, 177, 177, 1);
  text-align: center;
}

.close_img {
  width: 0.83rem;
  height: 0.83rem;
  float: right;
}

.close_img img {
  width: 100%;
}
</style>
