import Vue from 'vue';

export const VueComponent = Vue.component('vue-component', {
  props: ['mood'],
  template: `
    <div>
      Vue is <span>{{ mood }}</span>!
    </div>
  `,
});
