import Vue from 'vue';
import vDraw from './components/vDraw';
import Parts from './components/Parts';

const vdraw = {
  install: () => {
    const obj = 'Rect';
    Vue.component(`vd${obj}`, Parts(obj));
    Vue.component('vDraw', vDraw);
  },
};
export default vdraw;
