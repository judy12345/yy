<template>
    <div class="all">
        <div class="top">
            <div class="bt1"  style="cursor: pointer;">营业收费系统</div>
            <div class="bt1" style="cursor: pointer;">手机抄表系统</div>
            <div class="bt1" style="cursor: pointer;">网上营业厅</div>
            <div class="bt1" style="cursor: pointer;">短信服务平台</div>
        </div>
        <div class="medium">
            <div class="oneRow">
                <div class="round">
                    <div>水费</div>
                </div>
                <div class="round">
                    <div>电费</div>
                </div>
                <div class="round">
                    <div>社保</div>
                </div>
                <div class="round">
                    <div>医保</div>
                </div>
            </div>
            <div class="oneRow">
                <div class="round">
                    <div>物业</div>
                </div>
                <div class="round">
                    <div>生浩用品</div>
                </div>
                <div class="round">
                    <div>点餐</div>
                </div>
                <div class="round">
                    <div>娱乐</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"pay",
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style scoped>


.all{
    background-color: grey;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: 100vh;
}
.top{
    margin-top: 50px;
    display: flex;
    width: 100%;
    justify-content: space-around;
}

.bt1 {
  /* margin: 100px 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 190px;
  border-radius: 5px;
  background-color: #33FFDD;
  transition: background-color 1s;
}
.bt1:hover{
    background-color: royalblue;
}
.medium{
    margin-top: 50px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}
.oneRow{
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
    width: 80%;
}
.round{
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 140px;
    transition: background-color 1s;
    background-color: #008080;
}
.round:hover{
    background-color: royalblue;
}
</style>