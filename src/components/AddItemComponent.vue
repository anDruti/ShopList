<template>
    <div class="input-group">
        <input @keyup.enter="addItem" v-model="newItem" placeholder="dodaj" type="text" class="form-control">
        <span class ="input-group-btn">
          <button @click="addItem" class="btn btn-default" type="button">Dodaj</button>
        </span>
    </div>

</template>
<script>
  export default {

methods: {
    addItem: function(){
      var text;
      text = this.newItem.trim();
      if(text){
        
        
          this.$emit('addAction', this.newItem);
        
      }
      this.newItem = '';
    }
  }
  }
</script>

<style scoped>

</style>