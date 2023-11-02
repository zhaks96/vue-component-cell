<template>
  <div
    class="block-cell"
    :style="`height: ${computedHeight}px; width: ${fullWidth ? '100%' : '343px'}`"
    :class="`${isBgError} ${isBgIsland}`"
  >
    <div class="block-cell__inner">
      <div
        v-if="$slots.leftIcon"
        class="left-icon"
        :class="{
          'show-bg': isImageLeft,
          white: !isBgDark && isImageLeft,
          red: isBgDark && isImageLeft
        }"
        :style="`margin-right: ${!isImageLeft ? '24px;' : ''}`"
      >
        <slot name="leftIcon" />
      </div>
      <div class="cell-content">
        <div class="left-content">
          <div class="block-title">
            <span :style="`-webkit-line-clamp: ${subtitle || error ? 1 : 2};`">{{ title }}</span>
            <p v-if="subtitle">{{ subtitle }}</p>
          </div>
        </div>
        <slot v-if="$slots.rigthInfo" name="rigthInfo" />
        <div v-else-if="error" class="right-content">
          <div class="error-text">{{ errorText }}</div>
          <div class="right-icon">
            <b-icon name="error" />
          </div>
        </div>
        <div v-if="!['last', 'single'].includes(position)" class="border-cell"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, } from 'vue'
export default {
  props: {
    type: { type: String, default: 'full', },
    size: { type: String, default: 'normal', },
    position: { type: String, default: 'first', },
    error: { type: Boolean, default: false, },
    errorText: { type: String, default: 'Error', },
    cell: { type: Object, default: () => {}, },
    fullWidth: { type: Boolean, default: false, },
    isImageLeft: { type: Boolean, default: false, },
    isBgDark: { type: Boolean, default: false, },
  },
  setup(props, { slots, },) {
    const { cell, type, size, position, error, isImageLeft, } = props
    const { subtitle, title, } = cell

    const computedHeight = computed(() => {
      if (size === 'normal' && !isImageLeft) return 56 //full и island all normal cells - height=56px
      if (type === 'full') return 64 //First big cell - height=64px
      if (type === 'island' && size === 'big') {
        if (position === 'single') return 76
        return ['first', 'last',].includes(position,) ? 70 : 64
      }
      return 70
    },)

    const isBgError = computed(() => {
      return error ? 'bg-error' : ''
    },)

    const isBgIsland = computed(() => {
      return type === 'island' ? `${position} bg-island` : ''
    },)

    return {
      computedHeight,
      subtitle,
      title,
      isBgError,
      isBgIsland,
    }
  },
}
</script>

<style scoped lang="scss">
.block-cell {
  height: 70px;
  display: flex;
  width: 343px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  position: relative;

  &.bg-island {
    background: var(--vt-bg-dark);
  }
  &.bg-error {
    background: var(--vt-bg-error);
  }

  &.first {
    border-radius: 16px 16px 0px 0px;
  }
  &.last {
    border-radius: 0px 0px 16px 16px;
  }
  &.single {
    border-radius: 16px;
  }

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    .left-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto 0;
      &.show-bg {
        width: 48px;
        height: 44px;
        border-radius: 12px;
        margin-right: 12px;
        &.white {
          background: var(--vt-bg-white);
        }
        &.red {
          background: var(--vt-bg-red);
        }
      }
    }
    .cell-content {
      display: flex;
      flex: 1 1 0;
      justify-content: space-between;
      position: relative;
      padding: 6px 0;
      .left-content,
      .right-content {
        display: flex;
        align-items: center;
      }
      .left-content {
        margin-right: 8px;

        .block-title {
          display: flex;
          flex-direction: column;
          & > span {
            max-width: 100%;
            color: var(--vt-text-color-black);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: -0.32px;
            margin-bottom: 2px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
          }
          & > p {
            width: 100%;
            color: var(--vt-text-color-gray);
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: -0.078px;
            margin: 0;
            overflow: hidden;
            display: inline-block;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .right-content {
        .error-text {
          color: var(--vt-text-color-error);
          text-align: right;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;
          letter-spacing: -0.32px;
        }
        .right-icon {
          margin: 0 4px;
          display: flex;
        }
      }
      .border-cell {
        height: 0.5px;
        background: var(--transparent-black-10);
        position: absolute;
        bottom: 1px;
        left: 0;
        right: 0;
      }
    }
  }
}
</style>
