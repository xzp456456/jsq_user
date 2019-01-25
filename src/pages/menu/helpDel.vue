<template>
    <div>
        <div class="input-list">
            <div class="row">
                <span class="left">设备ID</span>
                <span class="right">6547567</span>
            </div>
        </div>
        <p class="info">用户信息</p>
         <div class="input-list">
            <div class="row">
                <span class="left">客户姓名</span>
                <span class="right">张三</span>
            </div>
        </div>
        <div class="input-list">
            <div class="row">
                <span class="left">客户电话</span>
                <span class="right">18025892365</span>
            </div>
        </div>
        <div class="input-list">
            <div class="row">
                <span class="left">经销商名称</span>
                <span class="right">小平</span>
            </div>
        </div>
        <div class="input-list">
            <div class="row">
                <span class="left">请选择充值套餐</span>
                <span class="right">1280元5000升<img class="in" src="@/assets/img/in.png" alt=""></span>
            </div>
        </div>
        <v-btn>购买</v-btn>
    </div>
</template>

<script>
import btn from '@/components/btn'
export default {
    components:{
        'v-btn':btn
    }
}
</script>
<style scoped="">
.left{
    float:left;
}
.right{
    float: right;
}

.in{
    width: .24rem;
    height: .44rem;
    margin-left: .266667rem;
    position: relative;
    top: 0.05rem;
}

.input-list{
    width: 100%;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    height:1.373333rem;
    line-height: 1.373333rem;
}

.input-list span{
    font-size:.4rem;
}

.row{
    width: 90%;
    margin: 0 auto;
}

.info{
    width: 90%;
    margin: 0 auto;
    font-size:.333333rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(120,120,120,1);
}

</style>
