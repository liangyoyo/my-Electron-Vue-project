<template>
  <div class="home">
    <el-container>
      <el-container>
        <!-- 顶部  -->
        <el-header>
          <div>
            <i class="toggle-btn el-icon-s-fold" @click="iscollapse = !iscollapse"></i>
            <i class="toggle-btn el-icon-s-unfold text-active"></i>
          </div>
          <span class="system-title">后台管理系统</span>
          <a href="javascrpt:;" class="welcome">
            <img src="../assets/kodinger.jpg" alt />
          </a>
        </el-header>
        <el-main>
          <!-- 餐单式导航 -->
          <div class="menuBox">
            <el-button v-for="(item,index) in Features" :key="index">
              <router-link to="/order">{{item.value}}</router-link>
            </el-button>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      iscollapse: false,
      dialogTableVisible: false,
      Features: [
        {
          value: '创建订单'
        },
        {
          value: '离线订单'
        },
        {
          value: '查询订单'
        },
        {
          value: '日常对账'
        },
        {
          value: '结算对账'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  .el-menu {
    width: auto;
  }
  /* 顶部样式 */
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 30px;
    cursor: pointer;
    line-height: 60px;
  }
  .text-active {
    display: none !important;
  }
  .system-title {
    font-size: 28px;
  }
  .welcome {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 2px solid #ddd;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>
