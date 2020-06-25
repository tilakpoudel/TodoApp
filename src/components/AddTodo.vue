<template>
  <div>
    <h3>Add todo here . </h3>
    <form @submit="onSubmit">
      <div class="m-3"> 
        <b-input-group>
          <b-form-input type="text" placeholder="Your Todos...." v-model="title"></b-form-input>
          <b-input-group-append>
            <b-button variant="primary">Add New Todo</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </form>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name:"AddTodo",
  methods:{
    ...mapActions(['addTodo']),
    onSubmit(e){
      e.preventDefault();
      this.addTodo(this.title)
      this.title='';
    },
  },
  data(){
    return {
      title:""
    }
  }
  
}
</script>

<style>

</style>