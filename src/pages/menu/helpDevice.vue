<template>
    <div>
        <div class="input-list">
            <div class="row">
            <div class="deviceid left">设备ID</div>
            <div class="tg">
                <input type="text" v-model="help_id"  placeholder="请填写设备ID">
            </div>
            </div>
        </div>
        <v-btn @actionClick="getIdDevice()">下一步</v-btn>
    </div>
</template>
<script>
import btn from '@/components/btn';
import { postAjax, postJquery } from "@/api/axios";
import * as api from "@/api/api";
export default {
    components:{
        'v-btn':btn
    },
    data(){
        return{
            help_id:""
        }
    },
    created(){
        this.getDeviceModelList()
    },
    methods:{
         getIdDevice() {
         let data = { device_id: this.help_id };
        postAjax(api.getDeviceBindInfo, data)
            .then(res => {
            if(res.status!=1){
                this.Toast({
                    message: res.msg,
                    position: "center",
                    duration: 1500
                });
            }
            if(res.status==1){
                this.navgateTo();
            }
         })
       
    },
        getDeviceModelList() {
      postAjax(api.getDeviceModelList, {}).then(res => {
        console.log(res);
      });
    },
        navgateTo(){
            let id = this.help_id; 
            this.$router.push('helpDel');
            localStorage.setItem('help_id',id);
            
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
