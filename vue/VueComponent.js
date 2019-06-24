import Vue from 'vue';

Vue.component('vue-component', {
  props: ['mood'],
  template: `
    <div>
      Vue is <span>{{ mood }}</span>!
    </div>
  `,
});

new Vue({ el: '#vue-app' });
