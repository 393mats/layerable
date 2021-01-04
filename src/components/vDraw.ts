import Vue from 'vue';
/* eslint object-shorthand: 0 */
export default Vue.extend({
  render: function (createElement) {
    return createElement('h1', this.$slots.default);
  },
});
