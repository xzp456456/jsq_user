<template>
    <div>
        <footer>
			<div class="footer">
				<div class="item_home" @click="navgateTo('/')">
					<div><img src="../assets/img/home.png"/></div>
					<p>首页</p>
				</div>
				<div class="item_home" @click="navgateTo('wd')">
					<div><img src="../assets/img/w.png"/></div>
					<p>我的</p>
				</div>
			</div>
		</footer>
    </div>
</template>
<script>
export default {
    methods:{
		navgateTo(url){
			this.$router.push(url);
		}
	}
}
</script>
<style scoped="">
footer{
	position: fixed;
	bottom: 0;
	width: 100%;
	height:1.57rem;
	box-shadow:0rem 0rem 0rem 0rem rgba(230,230,230,1);
	    border-top: 1px solid #E6E6E6;
}

footer .item_home{
	padding-top: 0.3rem;
	width: 50%;
	float: left;
	text-align: center;
	
}

.item_home img{
	width:0.59rem;
	height:0.59rem;
}


</style>
