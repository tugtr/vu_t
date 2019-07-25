<template>
  <div class="home">
    首页
    <p>{{day}}</p>
    <button @click="handleToast">toast</button>
    <button @click="handleDialog">dialog</button>
    <button @click="handleLoading">loading</button>
    <button @click="handleJump">跳转</button>
  </div>
</template>
<style lang="scss" scope>
@import './Home.scss';
</style>
<script>
import Toast from '@/components/toast/toast.js';
import Dialog from '@/components/dialog/dialog.js';
import Loading from '@/components/loading/loading.js';

const under = require('@/lib/underscore');

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      day: this.$utilty.formateDate(),
    };
  },
  mounted() {
    console.log('_', under);
    // under.simple
  },
  methods: {
    handleToast() {
      Toast('出错了');
    },
    handleDialog() {
      Dialog({
        title: '这是一个弹窗',
        content: '您有一个惊喜是否需要领取？',
        handleOk() {
          Toast('确认成功！');
          return true;
        },
      });
    },
    handleLoading() {
      Loading();
    },
    handleJump() {
      this.$router.push('setting')
      // console.log(this.$router.push('setting'));
      // this.$route.push('/setting');
    },
  },
};
</script>
