<template>
    <div>
        <div class="qualification">
            <img src="@/assets/img/18zg.png" alt="">
        </div>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
    created(){
         Indicator.close();
    }
}
</script>
<style scoped="">
.qualification{
    width: 100%;
    margin-top: .366667rem;
}

.qualification img{
    width: 100%;
}

</style>
