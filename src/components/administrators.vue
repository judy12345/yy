<template>
  <div class="all">
    <div class="left">
      <div class="bt1" style="cursor: pointer;">营业收费系统</div>
      <div class="bt1" style="cursor: pointer;">已审批</div>
      <div class="bt1" style="cursor: pointer;">清单查询</div>
    </div>
    <div class="right">
      <div class="bt2" style="cursor: pointer;">审核</div>
      <div class="bt2" style="cursor: pointer;">编辑</div>
      <div class="bt2" style="cursor: pointer;">删除</div>
      <div class="bt2" style="cursor: pointer;">退回修改</div>

      <div class="bt3" @mouseenter="show=!show" @mouseleave="show=!show">
        <transition>
            <div v-if="show">手写签名版</div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "administrators",
  data() {
    return {
      show: true
    };
  },
  methods: {}
};
</script>
<style scoped>
.v-enter{
    opacity: 0;
}
.v-enter-to{
    opacity: 1;
}
.v-leave{
    opacity: 1;
}
.v-leave-to{
    opacity: 0;
}

.v-enter-active,.v-leave-active{

    transition: all 1s ease;
}
.all {
  display: flex;
  width: 100%;
  /* height: 100vh; */
  justify-content: space-between;
  /* align-items: center; */
}
.left {
  display: flex;
  /* height: 100%; */
  width: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.bt1 {
  /* margin: 20px 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100px;
  border-radius: 5px;
  background-color: #33ffdd;
  transition: background-color 1s;
}
.bt1:hover,
.bt2:hover {
  background-color: royalblue;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40%;
}
.bt2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 50%;
  height: 100px;
  border-radius: 5px;
  background-color: #33ffdd;
  transition: background-color 1s;
}
.bt3 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 80%;
  height: 200px;
  background-color: #8fbc8f;
}
</style>