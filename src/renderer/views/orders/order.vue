<template>
  <el-container>
    <el-main>
      <div class="table">
        <!-- 面包屑导航栏 -->
          <span>当前操作：</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>网络订单</el-breadcrumb-item>
          <el-breadcrumb-item>订单列表</el-breadcrumb-item>
          <el-button type="success" plain @click="goback">返回</el-button>
        </el-breadcrumb>
        <!-- 查询选择 -->
        <div>
          <div class="selectuser">
            下单日期：
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>订单号：
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>客户名：
            <el-input placeholder="请输入内容" class="userinput"></el-input>商品名：
            <el-input placeholder="请输入内容" class="userinput"></el-input>
            <el-button plain class="searchBtn">查询</el-button>
            <el-button plain class="searchBtn" @click="dialogFormVisible = true">增加订单</el-button>
          </div>
          <!-- 网络订单表 -->
          <el-table :data="userdata" height="450" border style="width: 100%;margin-top:20px;">
            <el-table-column prop="orderDate" label="下单日期" width="120"></el-table-column>
            <el-table-column prop="customerId" label="客户代码" width="120"></el-table-column>
            <el-table-column prop="orderId" label="订单号"></el-table-column>
            <el-table-column prop="goodsName" label="商品品名"></el-table-column>
            <el-table-column prop="goodsType" label="商品型号"></el-table-column>
            <el-table-column prop="goodsCount" label="商品数量"></el-table-column>
            <el-table-column prop="goodsPrice" label="商品单价"></el-table-column>
            <el-table-column prop="goodsSumPrice" label="商品总金额"></el-table-column>
            <el-table-column prop="Seller" label="销售员"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                <el-button type="text" size="small" @click=" deleteUser">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 增加员工表单 -->
          <!-- 分页功能 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5, 10, 50, 100]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            style="margin-top:10px;"
          ></el-pagination>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
/* 引入头部组件 */
import Header from '../../components/modules/header'
import {
  getAllUserList
} from '../../../common/api/add-index.js'
export default {
  components: {
    Header
  },
  data () {
    return {
      /* 选项数据 */
      options: [
        {
          value: '选项1',
          label: '财务部'
        },
        {
          value: '选项2',
          label: 'IT部'
        }
      ],

      orderdata: [],
      value: '',
      dialogFormVisible: false,
      currentPage4: 5,
      form: {
        userName: '',
        options: ''
      },
      formLabelWidth: '200px',
      /* 数据总条数 */
      total: 0,
      userobj: {
        query: '',
        pagenum: 1,
        pagesize: 4
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.init()
  },
  methods: {
    // 切换每页显示数量时触发
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      // 修改全局pagesize
      this.userobj.pagesize = val
      // 重新获取数据
      this.init()
    },
    // 切换当前页码时触发
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      // 修改全局的pagenum
      this.userobj.pagenum = val
      // 重新获取数据
      this.init()
    },
    /* 点击删除按钮 */
    deleteUser () {
      this.$confirm('此操作将永久删除该员工, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 初始化
    async init () {
      let res = await getAllUserList()
      this.userdata = res.data.orderdata
      console.log(res.data)
      this.total = res.data.orderdata.length
    },
    /* 点击返回上一级菜单 */
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='less' scoped>
.table {
  .selectuser {
    display: flex;
    justify-items: space-around;
    align-items: center;
    font-size: 14px;
    .userinput {
      width: 100px;
    }
    .searchBtn {
      margin-left: 10px;
    }
  }
}
</style>
