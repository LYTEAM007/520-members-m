<template>
  <div class="dialog-wrap">
    <div class="dialog-cover" v-if="dialogVisible" @click="close"></div>

    <transition name="opacity">
      <div class="dialog-content" v-show="dialogVisible">
        <p v-if="isShowCloseBtn" class="dialog-close" @click="close">&times;</p>
        <slot>empty</slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    isShowCloseBtn: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
  created() {},
  computed: {
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="stylus" src="./dialog.styl" scoped></style>
