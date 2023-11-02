import VCell from './VCell.vue'
import CellGroup from './CellGroup.vue'
import BaseIcon from './BaseIcon.vue'

export default {
  install(Vue,) {
    Vue.component('b-cell', VCell,)
    Vue.component('b-cell-group', CellGroup,)
    Vue.component('b-icon', BaseIcon,)
  },
}
