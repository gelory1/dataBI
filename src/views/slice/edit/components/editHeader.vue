<template>
  <div class="editHeader">
    <div class="editHeader-left">
      <el-button icon="el-icon-s-home" size="small">主页</el-button>
      <el-button icon="el-icon-s-marketing" size="small">编排</el-button>
    </div>
    <div class="editHeader-right">
      <el-button icon="el-icon-s-platform" size="small">预览</el-button>
      <el-button icon="el-icon-s-promotion" type="primary" size="small">发布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditHeader'
}
</script>

<style lang="scss">
  .editHeader{
    padding: 10px;
    display: flex;
    &-left, &-right {
      flex: 1;
    }
    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.1);
  }
</style>
