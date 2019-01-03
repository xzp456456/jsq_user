<template>
    <div>
        <header>
			<div class="top">
				<div class="row">
					<div class="header_lr">
						<div class="wilf pull-left">
							<img src="@/assets/img/sw.png"/>
						</div>
						<div class="title pull-left">
							办公室
						</div>
						<div class="openClose pull-right" @click="showClose(true)">
							<img src="@/assets/img/kg.png"/>
						</div>
					</div>
					<div class="gauge">
						<div class="num">
							12105
						</div>
						<div class="ml">
							剩余流量/L
						</div>
					</div>
					<div class="numText">
						本次净水量 ：0.55L
					</div>
				</div>
			</div>
		</header>
		<main>
			<div class="water">
				<div class="water_left">
					<div class="pull-left imgWid">
						<img src="@/assets/img/shui.png"/>
					</div>
					<div class="pull-left pd">
						<p class="waterP">原水TDS</p>
						<p class="waterp">100ppm</p>
					</div>
				</div>
				<div class="water_right">
					<div class="pull-left imgWis">
						<img src="@/assets/img/shui2.png"/>
					</div>
					<div class="pull-left pd">
						<p class="waterP">纯水TDS</p>
						<p class="waterp">13ppm</p>
					</div>
				</div>
			</div>
			<div class="row_w">
				<div class="lan pull-left">
					累计净水量<span class="sp">145L</span>
				</div>
				<div class="lan pull-right">
					已守护时长<span class="sp">551天</span>
				</div>
			</div>
			<div class="item">
				<div class="list" @click="navgateTo('equipment')">
				<div class="listImg"><img src="@/assets/img/1.png"/></div>
					<p>我的设备</p>
				</div>
				<div class="list" @click="navgateTo('recharge')">
					<div class="listImg"><img src="@/assets/img/2.png"/></div>
					<p>我要充值</p>
				</div>
				<div class="list" @click="navgateTo('Element')">
					<div class="listImg"><img src="@/assets/img/3.png"/></div>
					<p>我的滤芯</p>
				</div>
				<div class="list" @click="navgateTo('repair')">
					<div class="listImg"><img src="@/assets/img/4.png"/></div>
					<p>我要报修</p>
				</div>
			</div>
		</main>
		<v-footer></v-footer>
		<mt-popup v-model="show" position="bottom">
       <div class="coll">
        <ul>
          <li @click="closePunch(urlApi.shutdown)">关机</li>
          <li @click="closePunch(urlApi.forceFlush)">强冲</li>
          <li @click="showClose(false)">取消</li>
        </ul>
      </div>
   		 </mt-popup>
    </div>
</template>
<script>
import { getAjax,postAjax } from '@/api/axios'
import footer from '@/components/footer'
import * as types from '@/vuex/types'
import * as api from '@/api/api'
export default {
	name:'index',
	data(){
		return{
			show:false,
			urlApi:api
		}
	},
	components:{
		'v-footer':footer
	},
	methods:{
		showClose(bool){
			this.show = bool;
		},
		closePunch(url){
			postAjax(url,{})
			.then(res=>{
				if(res.status){
					this.show = false;
					this.Toast({
						message: res.msg,
						position: 'center',
						duration: 1500
					});
				}else{
					this.Toast({
						message: res.msg,
						position: 'center',
						duration: 1500
					});
				}
				this.show = false;
			})
		},
		navgateTo(url){
			this.$router.push(url);
		}
	}
}
</script>
<style scoped="">
body{
	margin: 0 auto;
	padding: 0;
}

.pull-left{
	float: left !important;
}

.pull-right{
	float: right !important;
}

header .header_lr{
	padding-top: 0.6rem;
}

header .title{
	text-align: center;
	width: 86%;
	font-size:0.45rem;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(255,255,255,1);
}

header .wilf{
	width:0.6rem;
	height:0.55rem;
}

header .wilf img{
	width: 100%;
}

header .top{
	background: url(../../assets/img/top.png)no-repeat;
	background-size:100% ;
	width: 100%;
	height: 6.613333rem;
}

header .row{
	width: 90%;
	margin: 0 auto;
	height:0.55rem;
}

header .gauge{
	background: url(../../assets/img/biao.png)no-repeat;
	background-size:100% ;
	width:4.44rem;
	height:3.35rem;
	margin: 0 auto;
	margin-top: 1.3rem;
}

header .num{
	text-align: center;
	font-size:0.77rem;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(255,255,255,1);
	padding-top: 1.1rem;
}

header .ml{
	font-size:0.35rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(255,255,255,1);
	text-align: center;
	margin-top: 0.2rem;
}

header .numText{
	text-align: center;
	font-size:0.41rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(255,255,255,1);
	margin-top: 0.31rem;
}

main .water{
	width:100%;
	height:2rem;
	background:rgba(255,255,255,1);
	margin: 0 auto;
	border-bottom: 1px solid #E6E6E6;
}

main .water_left{
	width: 39%;
	margin-left: 10%;
	float: left;
	padding-top: 0.6rem;
	height:1.43rem;
	border-right:1px solid #E6E6E6 ;
}

main .water_right{
	width: 42%;
	float: right;
	height:1.43rem;
	padding-top: 0.6rem;
}

main .waterP{
	font-size:0.45rem;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(51,51,51,1);
}

main .waterp{
	margin-top: 0.1rem;
	font-size:0.31rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(110,109,109,1);
}

main .pd{
	margin-left: 0.4rem;
}

main .imgWid{
	width:0.93rem;
	height:0.96rem;
}

main .imgWid img{
	width: 100%;
}

main .imgWis{
	width:0.85rem;
	height:1.09rem;
}

main .imgWis img{
	width: 100%;
}

main .row_w{
	width: 85%;
	margin: 0.4rem auto;
}

main .lan{
	font-size:0.33rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(82,82,82,1);
}

main .sp{
	color: #49BFFF;
	margin-left: 0.2rem;
}

main .item{
	padding-top: 0.8rem;
	width: 80%;
	clear: both;
	height:1.6rem;
	background:rgba(255,255,255,1);
	margin:0 auto;
}

main .item .list{
	float: left;
	margin: 0rem 0.35rem;
	text-align: center;
}

main .item .listImg{
	width:0.8rem;
	height:1rem;
	margin: 0 auto;
}
main .item .listImg img{
	width: 100%;
}

.openClose{
	width:0.6rem;
	height:0.55rem;
}

.openClose img{
	width: 100%;
}

.coll {
  width: 100%;
  text-align: center;
  bottom: 0;
  z-index: 99;
}


.coll ul li {
  background: white;
  width: 100%;
  border-bottom: 1px solid #dfe1e3;
  height: 1.6rem;
  font-size: 0.46rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 1.6rem;
}

.mint-popup-bottom{
  width: 100%;
}

</style>
