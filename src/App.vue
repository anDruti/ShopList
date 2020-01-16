<template>
  <div id="app">
  <!-- <hello-component v-bind:user="user"></hello-component> -->
   <!-- <greetings-component :user="user"></greetings-component> -->
  
  
  <h2>title: {{title}}</h2>

  <!-- <add-item-component v-on:addAction="getAndAddItem"></add-item-component>
  <items-component :items="items"></items-component>
  
    <div class="footer">
      <change-title-component v-model="title"></change-title-component>
    </div>
   -->

<add-item-component v-on:addAction="getAndAddItem"></add-item-component>
  <items-component :items="items"></items-component>
  
    <div class="footer">
      <change-title-component v-model="title"></change-title-component>
    </div>

  </div>

</template>

<script>

import AddItemComponent from './components/AddItemComponent';
import ItemsComponent from './components/ItemsComponent';
import ChangeTitleComponent from './components/ChangeTitleComponent';


var data = function(){ return {
   title:'Tytul',
   user: 'hero',
   items:[{text:'example', checked:true},{text:"notchecked", checked: false}]
}};
  export default {
    name: 'App',
    data: data,
    methods: {
      getAndAddItem: function(text) {
          this.items.push({
            text: text,
            checked: false
          })
      }
    },
    components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent
    }
  }
</script>

<style>

</style>
