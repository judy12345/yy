<template>
  <div class="all">
    <div class="top">
      <img src="../../static/pic/logo.jpg" class="pictureLogo" />

      <div class="onKey">
        <div class="login">
          <el-button type="primary" style="backgroundColor:#E6E6FA;color:black" round>登陆</el-button>
        </div>
        <div class="onTry">
          <el-button type="primary" @click="toallSelect()" style="backgroundColor:#E6E6FA;color:black" round>免费试用</el-button>
        </div>
      </div>
    </div>

    <div class="medium">
      <!-- <div class="swipper"> -->
      <div class="block">
        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="500px">
          <el-carousel-item v-for="item in oneImagelist" :key="item.id">
            <img :src="item.url" class="swiperImg" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- </div> -->
      <div class="contact">
        <div class="telephone" style="backgroundColor:#6A5ACD">
          <el-tooltip class="item" effect="dark" content="请电话联系我们" placement="left-start">
            <img class="teleIcon" src="../../static/pic/dianhua.png" />
          </el-tooltip>
        </div>
        <div class="wx" style="backgroundColor:#6A5ACD">
          <el-tooltip class="item" effect="dark" content="请微信联系我们" placement="left-start">
            <img class="wxIcon" src="../../static/pic/weixin.png" />
          </el-tooltip>
        </div>
        <div class="erweima" style="backgroundColor:#6A5ACD">
          <el-tooltip class="item" effect="dark" content="扫描二维码查询详情" placement="left-start">
            <img class="erweiIcon" src="../../static/pic/erweima.png" />
          </el-tooltip>
        </div>

        <div class="goTop" @click="toTop" style="backgroundColor:#6A5ACD">
          <el-tooltip class="item" effect="dark" content="返回顶部" placement="left-start">
            <img class="goTopIcon" src="../../static/pic/gotop.png" />
          </el-tooltip>
          <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
        </div>
      </div>
    </div>
    <div  class="bottom">
      <div class="content">
        <div class="firstCloumn">
          <div class="titleOne">
            粤享报销
          </div>
          <div>
            广州粤享科技有限公司
          </div>
          <div>
            周一到周日：8:00-6:00
          </div>
          <div>
            TEL:13535375712
          </div>
        </div>
        <div class="firstCloumn">
          <div class="titleOne">
            公司
          </div>
          <div style="cursor:pointer">
            关于粤享
          </div>
          <div style="cursor:pointer">
            合作伙伴
          </div>
          <div style="cursor:pointer">
            客户案例
          </div>
        </div>
        <div class="firstCloumn">
          <div class="titleOne">
            产品
          </div>
          <div  style="cursor:pointer">
            版本2019
          </div>
          <div style="cursor:pointer">
            版本2020
          </div>
          
        </div>
        <div class="firstCloumn">
          <div class="titleOne">
            服务
          </div>
          <div style="cursor:pointer">
            使用教程
          </div>
          <div style="cursor:pointer">
            问题反馈
          </div>
          <div style="cursor:pointer">
            高级定制
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "one",
  data() {
    return {
      oneImagelist: [
        {
          id: 1,
          url: require("../../static/pic/1.jpg")
        },
        {
          id: 2,
          url: require("../../static/pic/2.jpg")
        },
        {
          id: 3,
          url: require("../../static/pic/3.jpg")
        },
        {
          id: 4,
          url: require("../../static/pic/4.jpg")
        }
      ]
    };
  },
  methods: {
    toTop() {
      let timer=setInterval(()=>{
        document.documentElement.scrollTop-=10
        // console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop==0){
          clearInterval(timer)
          
        } 
      },1)
   
    },
    toallSelect(){
      this.$router.push({path:'allSelect'})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.all {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #FFC0CB;
}
.top {
  display: flex;
  // margin-top: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color:white
}
.pictureLogo {
  width: 90px;
  height: 90px;
  margin-left: 20%;
}
.onKey {
  margin-right: 20px;
  display: flex;
  // height: 80px;
  align-items: center;
  justify-content: center;
  // background-color: red;
}
.medium {
  position: static;
  // margin-top: 20px;
  display: flex;
  width: 100%;
  // padding: 0 30px;
  justify-content: space-between;
  // background-color: red;
}
.block {
  width: 100%;
  // margin-left: 40px;
}
.swiperImg {
  // background-color: red;
  width: 100%;
  height: 100%;
}
.contact {
  // margin-top: 150px;
  top: 30%;
  right: 0;
  // height: 500px;
  display: flex;
  flex-direction: column;
  // height: 300px;
  // width: 10%;
  // margin-right: 20px;
  position: absolute;
  justify-content: space-between;
  
  // align-items: center;
  z-index: 999;
  position: fixed;
  // background-color: red;
}
.telephone {
  display: flex;
  margin: 5px 0;
}
.wx {
  display: flex;
  margin: 5px 0;
}
.erweima {
  display: flex;
  margin: 5px 0;
}
.goTop {
  display: flex;
  margin: 5px 0;
}
.teleIcon {
  cursor: pointer;
  height: 50px;
  width: 50px;
}
.wxIcon {
  cursor: pointer;
  height: 50px;
  width: 50px;
}
.erweiIcon {
  cursor: pointer;
  height: 50px;
  width: 50px;
}
.goTopIcon {
  cursor: pointer;
  height: 50px;
  width: 50px;
}
.bottom{
  margin-top: 40px;
  display: flex;
  width: 100%;
  height: 300px;
  background-repeat: repeat;
  background-image: url(../../static/pic/bak.jpg);
  background-size: 100% 100%;
  
}
.content{
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color:#696969 ;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.firstCloumn{
  
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 15%;
  color: #33ffdd;
  height: 70%;
  // background-color: red;
}
.secondCloumn{
  width: 20%;
  height: 70%;
  background-color: red;
}
.thirdCloumn{
  width: 20%;
  height: 70%;
  background-color: red;
}
.fourthCloumn{
  width: 20%;
  height: 70%;
  background-color: red;
}
.titleOne{
  font-size: 25px;
}
</style>
