<template>
  <div class="all">
    <div class="top">
      <div class="left">
        <div class="bt1">
          <el-tooltip class="item" effect="dark" content="点击+上传图片" placement="right">
            <el-upload
              class="avatar-uploader"
              action
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :on-change="beforeAvatarUpload"
              :auto-upload="false"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-tooltip>
        </div>
        <div class="bt1">
          <div>文字识别结果</div>
        </div>
      </div>
      <div class="right">
        <div class="rightBt1" style="cursor: pointer;">
          <div class="outExcel">导出excel</div>
        </div>
        <div class="rightBt1" style="cursor: pointer;">
          <div class="outExcel">生成pdf</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="title">第三方平台</div>
      <div class="downSelect">
        <el-dropdown split-button type="primary" @command="ceshi">
          银行
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="我是你爹">工商银行</el-dropdown-item>
            <el-dropdown-item>中国银行</el-dropdown-item>
            <el-dropdown-item>VISA</el-dropdown-item>
            <el-dropdown-item>MASTER</el-dropdown-item>
            <el-dropdown-item>农商银行</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown split-button type="primary" @command="ceshi">
          购物
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="我是你爹">京东</el-dropdown-item>
            <el-dropdown-item>淘宝</el-dropdown-item>
            <el-dropdown-item>唯品会</el-dropdown-item>
            <el-dropdown-item>苏宁易购</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="primary">微信</el-button>
        <el-button type="primary">支付宝</el-button>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "upload",
  data() {
    return {
      imageUrl: "",
      title: "我是你爹"
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log("文件上传成功");

      console.log(file);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      console.log(isJPG);
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG或者PNG 格式!");
        return isJPG;
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
        return isLt2M;
      }
      console.log("这里执行了");
      this.imageUrl = window.URL.createObjectURL(file.raw);
      console.log(this.imageUrl);
      //   return isJPG && isLt2M;
    },
    ceshi(data) {
      console.log("这是工商银行按钮");
      console.log(data);
    }
  }
};
</script>
<style scoped>
.downSelect /deep/ .el-upload {
  height: 100%;
  width: 100%;
  vertical-align: center;
}
.downSelect /deep/ .el-dropdown {
  width: 25%;
}
.downSelect /deep/ .el-button-group {
  width: 100%;
}
.downSelect /deep/ .el-button-group > .el-button:first-child {
  width: 80%;
}
.downSelect /deep/ .el-button-group > .el-button + .el-button {
  width: 20%;
}
/* display: flex;
    align-items: center;
    justify-content: center; */

.downSelect /deep/ .avatar-uploader-icon[data-v-66afef91] {
  position: relative;
  top: 45%;
  /* left: 50%; */
  /* z-index: 999 */
}
.downSelect /deep/ .el-button {
  width: 15%;
}



.all {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* height: 100%; */

  /* align-items: center; */
  /* background-color: #FFC0CB; */
}
.top {
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 2px solid grey;
  border-radius: 6px;
  /* height: 500px; */
  /* background-color: red; */
}
.left {
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.bt1 {
  margin: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 190px;
  border-radius: 5px;
  background-color: #00bbff;
}
.right {
  display: flex;
  width: 30%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* background-color: salmon; */
}
.rightBt1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 30%;
  border-radius: 5px;
  background-color: gray;
  /* height: 100% */
}

/* 上传图片框属性 */
.avatar-uploader {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  /* position: relative; */
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
.avatar-uploader .el-upload:hover {
  border-color: white;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100%;
  height: 100%;
  /* line-height: 178px; */
  text-align: center;
}
.avatar {
  width: 100%;
  height: 100%;
}
/* 以上 */

.bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  font-weight: bold;
  font-size: 25px;
}
.downSelect {
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>