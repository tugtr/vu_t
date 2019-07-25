import Home from '@/views/index/Home.vue';
import Loadable from './Loadable';

const Lists = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      showFooter: true,
    },
  },
  {
    path: '/bill',
    name: '账单',
    meta: {
      title: '账单',
      showFooter: true,
    },
    component: Loadable(() => import(/* webpackChunkName: "bill" */ '@/views/bill/index.vue')),
  },
  {
    path: '/my',
    name: '我的',
    meta: {
      title: '我的',
      showFooter: true,
    },
    component: Loadable(() => import(/* webpackChunkName: "my" */ '@/views/my/index.vue')),
  },
  {
    path: '/setting',
    name: '设置',
    meta: {
      title: '设置',
    },
    component: Loadable(() => import(/* webpackChunkName: "my" */ '@/views/setting/index.vue')),
  },
];

export default Lists;
