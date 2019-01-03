<template>
    <div>
        <footer>
			<div class="footer">
				<router-link tag="div" exact class="item_home" :to="link.url" v-for="(link,index) in links" :key="index">
					<div><img :src="link.image"/></div>
					<p>{{link.text}}</p>
				</router-link >
			</div>
		</footer>
    </div>
</template>
<script>
export default {
	data(){
		return{
			links:[
				{image:require('../assets/img/home.png'),text:'首页',url:'/'},
				{image:require('../assets/img/w.png'),text:'我的',url:'wd'}
			]
		}
	},
	created(){
		this.changeImg(this.$route.name);
	},
    methods:{
		navgateTo(url){
			this.$router.push(url);
		},
		changeImg(name){
			switch(name){
				case 'index':
				this.links[0].image = require('../assets/img/home-active.png');
				break;
				case 'wd':
				this.links[1].image = require('../assets/img/w-active.png');
				break;
			}
		
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

.router-link-active p{
	color: #49BFFF;
}
</style>
