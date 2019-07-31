<template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="paginationOptions.CurrentPage"
      :page-sizes="[10, 30, 50, 100]"
      :page-size="paginationOptions.PageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="paginationOptions.Total"
      class="Pagination">
    </el-pagination>
</template>

<script>
    export default {
        props: {
            paginationOptions: {
                type: Object,
                default: undefined
            },
        },
        methods: {
            handleSizeChange(val) {
                this.$parent.paginationOptions.PageSize = val;
                this.$parent.Action("this.GetVideoList()");
            },
            handleCurrentChange(val) {
                this.$parent.paginationOptions.CurrentPage = val;
                this.$parent.Action("this.GetVideoList()");
            }
        }
    }
</script>
<style>
    .Pagination{
        float: right;
        padding: 1.5em
    }
</style>
