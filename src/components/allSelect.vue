<template>
    <div class="all">
        <div class="top">
            <div class="selectFunction">
                <img class="bak" src="../../static/pic/timg.jpg">
                <div class="butt">
                    <el-button class="bt1" @click="toUpload" size="medium">
                        发票上传与识别
                    </el-button>
                    <el-button class="bt1" @click="toReimbursement" size="medium">
                        我的报销单
                    </el-button>
                    <el-button class="bt1" size="medium">
                        我的代办
                    </el-button>
                    <el-button class="bt1" size="medium">
                        我的审批
                    </el-button>
                    <el-button class="bt1" size="medium">
                        通讯录
                    </el-button>
                </div>
            </div>
            <div class="selectButton">
                <el-button type="primary" size="medium" >试用版</el-button>
                <el-button type="success" @click="toBuy" size="medium" style="marginLeft:0px">购买</el-button>
            </div>
        </div>
        <div class="medium">
            <div>
                <el-button round @click="toAdministrators">管理者</el-button>
            </div>
            <div>
                <el-button round>财务员</el-button>
            </div>
        </div>
        <div class="bottom">
            <div class="bottomTop">
                <div style="marginLeft:15%">服务指南</div>
                <div style="marginRight:48%">新闻动态</div>
            </div>
            <div class="bottomBottom">
                <div class="first">
                    
                    <div style="cursor:pointer">
                        差旅申请
                    </div>
                    <div style="cursor:pointer">
                        管理层固定资产报账
                    </div>
                    <div style="cursor:pointer">
                        业务审批
                    </div>
                    <div style="cursor:pointer">
                        借款划款
                    </div>

                    
                </div>
                <div class="second">
                    <div class="secondOne" v-for="item in newsList.slice(0,4)" :key="item.id">
                        <div>{{item.title}}</div>
                    </div>
                </div>
                <div class="third">
                    <div class="thirdOne" style="cursor:pointer">
                        <div>财务管理系统</div>
                    </div>
                    <div class="thirdOne" style="cursor:pointer" @click="toPay()">
                        <div>网上自助缴费</div>
                    </div>
                    <div class="thirdOne" style="cursor:pointer">
                        <div>第三方平台登陆</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"allSelect",
    data(){
        return{
            a:0,
            b:0,
            c:4,
            newNewslist:[],
            newsList:[
                {
                    id:0,
                    title:"新闻0"
                },
                {
                    id:1,
                    title:"新闻1"
                },
                {
                    id:2,
                    title:"新闻2"
                },
                {
                    id:3,
                    title:"新闻3"
                },
                {
                    id:4,
                    title:"新闻4"
                },
                {
                    id:5,
                    title:"新闻5"
                },
                {
                    id:6,
                    title:"新闻6"
                }
            ]
        }
    },
    methods:{
        toUpload(){
            this.$router.push({path:'upload'})
        },
        toReimbursement(){
            this.$router.push({path:'myReimbursement'})
        },
        toPay(){
            this.$router.push({path:'pay'})
        },
        toAdministrators(){
            this.$router.push({path:'administrators'})
        },
        toBuy(){
            this.$router.push({path:'buy'})
        }

    },
    mounted(){
        // console.log(this.newsList.slice(0,3))
        
        setInterval(()=>{
            // console.log(this.a)
            
            // console.log(this.c)
            // this.a=this.c
            // this.c+=4;
            
            // if(this.newsList.length<4){
            //     this.c+=4
            //     this.a=0
            // }
            // else if(this.c>=this.newsList.length){
            //     let number=0
            //     number=this.c%this.newsList.length
            //     for(let i=0;i<4;i++){
            //         this.newNewslist[i]=this.newsList[number]
            //         number+=1
            //     }
            // }

        },5000)
    }
}
</script>
<style scoped>
.all {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  /* align-items: center; */
  /* background-color: #FFC0CB; */
}
.top{
    display: flex;
    width: 100%;
    /* height: 200px; */

    height: 20%;
    /* background-color: red; */
    justify-content: space-between;
    border-bottom: 1px solid #696969;
}
.selectFunction{
    display: flex;
    width: 80%;
    /* height: 100%; */
    /* overflow: hidden; */
    flex-direction: column;
}
.bak{
    /* max-height: 100px; */
    height: 100px;
    /* position: absolute; */
    /* top: -50%; */
    /* left: -50%; */
    object-fit: cover;
    object-position: top 80% left 50%;
    width: 100%;
    /* max-width: 100%; */
}
.butt{
    display: flex;
    justify-content:space-around;
    width: 100%;
    height: 40px;
    align-items: center;
    /* background-color: red; */
}
.selectButton{
    display: flex;
    width: 20%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.bt1{
    background-color: #E0FFFF;
    /* color: white; */
}
.medium{
    margin-top: 20px;
    display: flex;
    padding: 20px 0;
    width: 30%;
    justify-content: space-around;
}
.bottom{
    margin-top: 20px;
    display: flex;
    /* justify-content: space-around; */
    flex-direction: column;
    width: 100%;
    /* background-color: red; */
    /* height: 40%; */
}
.bottomTop{
    display: flex;
    width: 100%;
    padding: 10px 0;
    align-items: center;
    border-top:2px  darkgrey solid;
    border-bottom:2px  darkgrey solid;
    justify-content: space-between;
}
.bottomBottom{

    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    /* flex-direction: column; */
    width: 100%;
    background-color: #FFB7DD;
    border-radius: 5px;
    height: 400px;
    padding-bottom: 100px;
}
.first{
    display: flex;
    width: 30%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    /* height: 400px; */
}
.second{
    display: flex;
    width: 30%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    

}
.third{
    display: flex;
    width: 30%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.firstOne{
    
}
.secondOne{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.thirdOne{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
    width: 55%;
    transition: background-color 1s;
    border-radius: 5px;
    background-color: #33FFDD   ;
}   
.thirdOne:hover{
    background-color: royalblue;
}



</style>