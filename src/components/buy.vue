<template>
  <div class="all">
    <el-dialog title="请扫描二维码进行后续操作" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <img class="payErweima" src="../../static/pic/pay.jpg">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="提示" :visible.sync="dialogVisible1" width="30%" :before-close="handleClose1">
      <div style="fontSize:25px;fontWeight:bold">请联系我们</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>
    <div class="top">
      <div class="bt1" style="cursor: pointer;" @click="dialogVisible = true">
        <div style="fontSize:25px;fontWeight:bold">包年</div>
        <div>500/年</div>
      </div>
      <div class="bt1" style="cursor: pointer;" @click="dialogVisible = true">
        <div style="fontSize:25px;fontWeight:bold">包月</div>
        <div>256/月</div>
      </div>
      <div class="bt1" style="cursor: pointer;" @click="dialogVisible1 = true">
        <div style="fontSize:25px;fontWeight:bold">高端定制</div>
      </div>
    </div>
    <div class="medium"></div>
  </div>
</template>
<script>
export default {
  name: "buy",
  data() {
    return {
      dialogVisible: false,
      dialogVisible1:false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    handleClose1(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
.all {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.top {
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-around;
}
.bt1 {
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  height: 300px;
  border-radius: 5px;
  background-color: #33ffdd;
  transition: background-color 1s;
}

.bt1:hover {
  background-color: royalblue;
}
.payErweima{
    width: 100%;
    height: 100%;
}


</style>
<style scoped>
.all /deep/ .el-dialog{
    width: 40%;
    height: 60vh;
}
.all /deep/ .el-dialog__body{
    padding: 0;
    width: 100%;
    height: 70%;
}
</style>