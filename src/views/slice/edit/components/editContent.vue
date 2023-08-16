<template>
  <div class="editContent">
    <draggable v-model="layerList" item-key="id" ghost-class="ghost" @change="onMoveCallback" @start="onMoveCallback" @end="onMoveCallback">
      <div class="editContent-main" />
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Vue from 'vue'
// const configModules = import.meta.globEager('./components/**/config.vue')
// const indexModules = import.meta.globEager('./components/**/index.vue')
const indexModules = [() => import('@/packages/components/Decorates/Borders/Border01/index')]
export default {
  name: 'EditContent',
  components: {
    draggable
  },
  data() {
    return {
      layerList: []
    }
  },
  mounted() {
    this.$el.onmouseup = (e) => {
      // console.log(e)
      // e.preventDefault()
      this.componentInstall(e)
    }
  },
  methods: {
    onMoveCallback(e) {
      console.log(e, 111111)
    },
    componentInstall(e) {
      Vue.component('组件', this.fetchChartComponent(e))
    },
    // async createComponent(targetData) {
    //   const { category, key } = targetData
    //   const chart = await import(`@/packages/components/${targetData.package}/${category}/${key}/config.js`)
    //   return new chart.default()
    // },
    fetchComponent(chartName, flag) {
      const module = indexModules
      for (const key in module) {
        const urlSplit = key.split('/')
        if (urlSplit[urlSplit.length - 2] === chartName) {
          return module[key]
        }
      }
    },
    fetchChartComponent(dropData) {
      const { key } = dropData
      return this.fetchComponent(key, true)
    }
  }
}
</script>

<style lang="scss">
  .editContent{}
</style>
