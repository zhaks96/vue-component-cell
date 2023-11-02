<template>
  <div class="container-group">
    <b-cell
      v-for="(cell, index) in cells"
      :key="`cell-item-${index}`"
      :cell="cell"
      :position="isSingle ? 'single' : getPosition(index)"
      full-width
      type="island"
      :is-image-left="isImageLeft"
      :img-bg="imgBg"
      :is-bg-dark="cell.isBgDark"
    >
      <template v-if="$slots.leftIcon" #leftIcon>
        <slot name="leftIcon" :item="cell" />
      </template>
      <template v-if="$slots.rigthInfo || cell.icon" #rigthInfo>
        <slot name="rigthInfo" :item="cell" />
      </template>
    </b-cell>
  </div>
</template>

<script>
export default {
  props: {
    cells: { type: Array, default: () => [], },
    isSingle: { type: Boolean, default: false, },
    isImageLeft: { type: Boolean, default: false, },
    imgBg: { type: String, default: '#ffffff', },
  },
  setup(props,) {
    const { cells, isSingle, } = props
    const getPosition = (index,) => {
      if (isSingle || cells.length === 1) return 'single'
      if (index === 0) return 'first'
      if (index + 1 === cells.length) return 'last'
      return 'middle'
    }
    return {
      getPosition,
    }
  },
}
</script>

<style lang="scss" scoped>
.container-group {
  width: 328px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}
</style>
