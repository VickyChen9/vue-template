<template>
  <div class="pagination">
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'pagination',
    data() {
      return {
        choosePage: '',
        display: ''
      }
    },
    props: {
      currentPage: '',
      pageSizes: Array,
      pageSize: '',
      total: '',
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.display = val;
        this.$emit('display', this.display);
      },
      handleCurrentChange(val) {
        this.choosePage = val;
        console.log(`当前页: ${val}`);
        this.$emit('pagechange', this.choosePage);
      }
    }
  }
</script>
<style>

</style>
