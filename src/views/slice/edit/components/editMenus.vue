<template>
  <div class="editMenus">
    <el-menu
      class="el-menu-vertical-demo"
    >
      <el-submenu v-for="(menu, index) in menus" :key="index" index="1">
        <template slot="title">
          <i class="el-icon-location" />
          <span>{{ menu.title }}</span>
        </template>
        <el-menu-item v-for="(m, i) in menu.children" :key="i" index="2" draggable="true" @drag="dragItem($event, m)">
          <span slot="title">{{ m.title }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { packagesList } from '@/packages'

export default {
  name: 'EditMenus',
  data() {
    return {
    }
  },
  computed: {
    menus() {
      const menus = []
      if (packagesList) {
        for (const key in packagesList) {
          const option = {
            title: key,
            children: packagesList[key]
          }
          menus.push(option)
        }
      }
      return menus
    }
  },
  mounted() {
    // console.log(packagesList);
  },
  methods: {
    dragItem(e, item) {
      console.log(e, item)
    }
  }
}
</script>

<style lang="scss">
  .editMenus{}
</style>
