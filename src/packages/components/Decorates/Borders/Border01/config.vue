<template>
  <CollapseItem name="边框" :expanded="true">
    <SettingItemBox
      v-for="(item, index) in optionData.colors"
      :key="index"
      :name="`颜色-${index + 1}`"
    >
      <SettingItem name="颜色">
        <n-color-picker
          v-model="optionData.colors[index]"
          size="small"
          :modes="['hex']"
        />
      </SettingItem>
      <SettingItem>
        <n-button
          size="small"
          @click="optionData.colors[index] = option.colors[index]"
        >
          恢复默认
        </n-button>
      </SettingItem>
    </SettingItemBox>
  </CollapseItem>

  <CollapseItem name="动画" :expanded="true">
    <SettingItemBox name="速度(s)">
      <SettingItem>
        <n-input-number
          v-model="optionData.dur"
          size="small"
          :step="0.5"
          :min="0.5"
        />
      </SettingItem>
    </SettingItemBox>
  </CollapseItem>

  <CollapseItem name="背景" :expanded="true">
    <SettingItemBox name="颜色">
      <SettingItem>
        <n-color-picker
          v-model="optionData.backgroundColor"
          size="small"
          :modes="['hex']"
        />
      </SettingItem>
    </SettingItemBox>
  </CollapseItem>
</template>

<script>
export default {
  name: 'Border01Config',
  props: {
    optionData: {
      type: Object,
      required: true
    }
  }
}
</script>
