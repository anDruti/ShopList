// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false


// Vue.component('hello-component',{
//  template:"#hello",
//  data: function(){
//     return {
//       msg: 'Witka1'
//     }
//   },
//   props: ['user']
// })


// Vue.component('form-component',{
//     template:"#form",
//     props: ['value'],
//     methods: {
//       onInput: function( event ) {
//         this.$emit('input', event.target.value)
//       }
//     }
// })

// Vue.component('greetings-component',{
//     template:"#greetings",
//     props: ['user']
// })

// Vue.component('add-item-component',{
//   template:'#add-item-template',
//   props:['items'],
//   data:function(){
//     return {
//       newItem: ''
//     }
//   },
//   methods: {
//     addItem: function(){
//       var text;
//       text = this.newItem.trim();
//       if(text){
        
        
//           this.$emit('addAction', this.newItem);
        
//       }
//       this.newItem = '';
//     }
//   }
// })

// Vue.component('item-component',{
//   template:'#item-template',
//   props: ['item']
// })
// Vue.component('items-component',{
//   template:'#items-template',
//   props: ['items']
// })

// Vue.component('change-title-component',{
//   template:'#change-title-template',
//   props: ['value'],
//   methods: {
//     onInput: function(event){
//       this.$emit('input', event.target.value)
//     }
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
