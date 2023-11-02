<template>
  <component :is="iconComponent" />
</template>

<script>
import icons from '../assets/icons'

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value,) {
        return Object.prototype.hasOwnProperty.call(icons, value,)
      },
    },
  },

  computed: {
    iconComponent() {
      return icons[this.name]
    },
  },
}
</script>
