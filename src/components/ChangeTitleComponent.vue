<template>
   <div>
      <em>Zmien nazwe listy zakupow</em>
      <input v-bind:value="value" v-on:input="onInput" />
    </div>

</template>
<script>
  export default {
  props: ['value'],
  methods: {
    onInput: function(event){
      this.$emit('input', event.target.value)
    }
  }


  }

</script>

<style scoped>

</style>