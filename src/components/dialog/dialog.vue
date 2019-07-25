<template>
    <div class="dialog"
      :class="defineClass"
      v-show="wraperVisible"
    >
      <div class="dialog-content">
        <transition name="fadeLayer">
          <div class="dialog-layer"  v-show="visible" @click="handleClose"></div>
        </transition>
        <transition name="dialog" @afterLeave="afterLeave">
          <div class="content-innner" v-show="visible">
            <h3 class="dialog-title" v-if="!!title">{{title}}</h3>
            <div class="dialog-info">
               {{content}}
            </div>
            <div class="dialog-footer">
                <div @click="handleClose">{{cancelText}}</div>
                <div @click="handleBtnOk">{{okText}}</div>
            </div>
          </div>
         </transition>
      </div>
    </div>
</template>
<style lang="scss" scoped>
@import './dialog.scss';
</style>
<script>
export default {
  data() {
    return {
      visible: false,
      wraperVisible: false,
    };
  },
  props: {
    title: String,
    content: String,
    className: {
      type: String,
      default: '',
    },
    okText: String,
    cancelText: String,
    afterClose: Function,
    handleOk: Function,
  },
  computed: {
    defineClass() {
      const classList = [];
      classList.push(this.className);
      return classList.join(' ');
    },
  },
  methods: {
    afterLeave() {
      this.afterClose();
      this.wraperVisible = false;
    },
    handleClose() {
      this.visible = false;
    },
    handleBtnOk() {
      if (this.handleOk()) {
        this.handleClose();
      }
    },
  },
};
</script>
