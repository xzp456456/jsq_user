<template>
    <div>
        <div class="input-list">
            <div class="row">
            <div class="deviceid left">设备ID</div>
            <div class="tg">
                <input type="text" placeholder="请填写设备ID">
            </div>
            </div>
        </div>
        <v-btn @actionClick="navgateTo('helpDel')">下一步</v-btn>
    </div>
</template>
<script>
import btn from '@/components/btn'
export default {
    components:{
        'v-btn':btn
    },
    methods:{
        navgateTo(url,help_id){
            this.$router.push(url);
            localStorage.setItem('delp_id',delp_id);
        }
    }
}
</script>
<style scoped="">


.deviceid{
    font-size:.4rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
}

.input-list{
    width: 100%;
    height: 1.373333rem;
    line-height:  1.373333rem;
    background-color: white;
    margin-top: .266667rem;
}

.input-list input{
    border: none;
    outline: none;
    font-size:.4rem;
    text-align: right;
}

.tg{
    float: right;
}

.left{
    float: left;
}

.row{
    width: 90%;
    margin: 0 auto;
}

</style>
