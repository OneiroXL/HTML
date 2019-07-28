<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="Title"
      label="标题"
      width="200">
    </el-table-column>
    <el-table-column
      prop="URL"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { GetVideoList } from '@/api/video/index.js'
export default {
  data () {
      return {
          tableData: []
      }
  },
  created:function(){
      
  },
  mounted:function(){
      this.GetVideoList();
  },
  methods:{
      //获取列表
    GetVideoList(){
      this.$api.auto(GetVideoList, {}, response =>{
        if(response.Status == 10000){
          this.tableData = response.Data
        }else{
          this.$notify({
            title: '警告',
            message: response.Message,
            type: 'warning'
          });
        }
      });
    }
  }
}
</script>