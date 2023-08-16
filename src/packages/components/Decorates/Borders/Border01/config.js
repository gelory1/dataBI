
import { Border01Config } from './index'
import cloneDeep from 'lodash/cloneDeep'
import { getUUID } from '@/utils'

export const option = {
  dur: 0.5,
  colors: ['#4fd2dd', '#235fa7'],
  backgroundColor: '#00000000'
}

export default class Config {
  key = Border01Config.key
  chartConfig = cloneDeep(Border01Config)
  option = cloneDeep(option)
  id = getUUID()
  isGroup = false
  // 基本信息
  attr = {
    x: 50,
    y: 50,
    w: 500,
    h: 300,
    // 不建议动 offset
    offsetX: 0,
    offsetY: 0,
    zIndex: -1
  }
  // 基本样式
  styles = {
    // 使用滤镜
    filterShow: false,
    // 色相
    hueRotate: 0,
    // 饱和度
    saturate: 1,
    // 对比度
    contrast: 1,
    // 亮度
    brightness: 1,
    // 透明
    opacity: 1,

    // 旋转
    rotateZ: 0,
    rotateX: 0,
    rotateY: 0,

    // 倾斜
    skewX: 0,
    skewY: 0,

    // 混合模式
    blendMode: 'normal',

    // 动画
    animations: []
  }
  // 预览
  preview = {
    overFlowHidden: false
  }
  // 状态
  status = {
    lock: false,
    hide: false
  }
  // 请求
  // request = cloneDeep(requestConfig)
  // 数据过滤
  filter = undefined
  // 事件
  events = {
    baseEvent: {
    },
    advancedEvents: {
    }
  }
}
