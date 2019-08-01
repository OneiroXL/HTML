<template>
<div>
  <el-table
    :data="tableOptions.TableData"
    border
    style="width: 100%"
    class="Table">
    <el-table-column v-if="tableOptions.Ismultiple"
      type="selection"
      width="55"
      align="center">
    </el-table-column>
    <el-table-column
      type="index"
      label="序号"
      width="50"
      align="center">
    </el-table-column>
    <el-table-column v-for="headFile in tableOptions.HeadFiles" :key="headFile.FileID"
      :prop="headFile.FileID"
      :label="headFile.FileName"
      :width="headFile.Width"
      :align="headFile.Align">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button v-for="toolButton in tableOptions.ToolButtons" :key="toolButton.ButtonType"
        @click="HandleClick(scope.row,toolButton.ButtonType)"
        type="text" 
        size="small" >
        {{toolButton.ButtonName}}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <Pagination v-if="tableOptions.PaginationOptions.IsPage" v-bind:paginationOptions="tableOptions.PaginationOptions.Options" @HandlePageChange="HandlePageChange"></Pagination>
</div>
</template>
<script>
import Pagination from '@/components/pagination.vue'
  export default {
    components: {
        Pagination
	  },
    props: {
        tableOptions: {
            type: Object,
            default: undefined
        },
    },
    mounted:function(){
      this.GetListData();
    },
    methods: {
        HandleClick(row,buttonType) {
            this.$parent.ToolsClickHandle(row,buttonType);
        },
        GetListData(){
            this.tableOptions.Param.PageIndex = this.tableOptions.PaginationOptions.Options.PageIndex;
            this.tableOptions.Param.PageSize = this.tableOptions.PaginationOptions.Options.PageSize;
            this.$api.auto(this.tableOptions.Api, this.tableOptions.Param, response =>{
                if(response.Status == 10000){
                    this.tableOptions.TableData = response.Data
                    this.tableOptions.PaginationOptions.Options.Total = response.Count
                }else{
                    this.$Notify.WarningNotification(response.Message)
                }
            });
        },
        HandlePageChange(type,val){
            switch(type){
                case "size":{
                    this.tableOptions.PaginationOptions.Options.PageSize = val;
                }break
                case "index":{
                   this.tableOptions.PaginationOptions.Options.PageIndex = val;
                }break
            }
            this.GetListData();
        }
    },
    data() {
        return {
            
        }
    }
  }
</script>
<style>
  .Table td{
      padding: 5px 0;
  }
</style>
