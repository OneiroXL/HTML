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
</div>
</template>
<script>
  export default {
    props: {
        tableOptions: {
            type: Object,
            default: undefined
        },
    },
    methods: {
        HandleClick(row,buttonType) {
            this.$parent.ToolsClickHandle(row,buttonType);
        }
    },
    data() {
        return {
            tableData: []
        }
    }
  }
</script>
<style>
  .Table td{
      padding: 5px 0;
  }
</style>
