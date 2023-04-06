<template>
  <div id="app">
    <Top :isnow="1" />
    <h1>排行</h1>
    <hr>
    <el-button>点击</el-button>
    <el-button>点击</el-button>
    <Footer />
  </div>
</template>

<script>
import ScrollTop from '@/component/index/scrollTop.vue'
import Search from '@/component/index/Search.vue'
import Nav from '@/component/index/Nav.vue'
import Top from '@/component/index/index.vue'
import Work from '@/component/index/Work.vue'
import Company from '@/component/index/Company.vue'
import Footer from '@/component/index/footer.vue'
export default {
  name: "black",
  components: {
    Search,
    Nav,
    Work,
    Company,
    Top,
    ScrollTop,
    Footer,
  },
}
</script>

<style scoped>
  .el-button{
    height: 200px;
    width: 400px;
  }
</style>
