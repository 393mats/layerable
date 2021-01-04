import Vue from 'vue';

// 各パーツを定義
export default function (partsName: string) {
  return Vue.extend({
    render: (createElement) => createElement('p', partsName),
  });
}
