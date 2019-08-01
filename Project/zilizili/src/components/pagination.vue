<template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="paginationOptions.PageIndex"
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
                this.$emit("HandlePageChange","size",val)
            },
            handleCurrentChange(val) {
                this.$emit("HandlePageChange","index",val)
            },
        }
    }
</script>
<style>
    .Pagination{
        float: right;
        padding: 1.5em
    }
</style>
