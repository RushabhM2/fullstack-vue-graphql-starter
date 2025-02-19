import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
  theme: {
    primary: '#26A69A',
    secondary: '#80CBC4',
    accent: '#EF5350',
    error: '#D50000',
    warning: '#FFC107',
    info: '#2979FF',
    success: '#1B5E20',
  },
});

export default new Vuetify({
});
