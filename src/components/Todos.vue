<template>
  <div>
      <h3>Todos</h3>
      <div class="legend">
        <span>Double click to update</span>

        <span>
          <span class="incomplete-box"></span>= Incomplete
        </span>

          <span>
          <span class="complete-box"></span>= complete
        </span>
      </div>
      <div class="todos">
        <div  
          @dblclick="onDblclick(todo)" 
          v-for="todo in allTodos" 
          :key="todo.id" 
          class="todo"
          v-bind:class="{'is-complete':todo.completed}">
          {{ todo.title }}
          <i class="share" aria-hidden="true"> Share on :</i>
          <ShareNetwork
            network="facebook"
            url="http://tilakpoudel.com.np/"
            title="My todo "
            description="This is my todo for today"
            hashtags="vuejs,vite"
            > 
            <i class="fa fa-facebook-square fb" aria-hidden="true"></i>
          </ShareNetwork>

          <ShareNetwork
            network="email"
            url="http://tilakpoudel.com.np/"
            title="My todo "
            description="This is my todo for today"
            > 
            <i class="fa fa-envelope email" aria-hidden="true"></i>
          </ShareNetwork>


          <i @click="deleteTodo(todo.id)" class="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:"Todos",
    methods:{
      ...mapActions(['fetchTodos',"deleteTodo","updateTodo"]),
      
      onDblclick(todo){
      const updTodo ={
        id:todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(updTodo);
    },
    },

    computed: mapGetters(['allTodos']),
    created(){
      this.fetchTodos()
    }
};
</script>

<style fscoped >
  .todos{
    display: grid;
    grid-template-columns:repeat(3 ,1fr) ;
    grid-gap: 1rem;
  }
  .todo{
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  i{
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
  .fb{
  position: absolute;
  bottom: 4px;
  right: 80px;
  cursor: pointer;
  }
  .email{
  position: absolute;
  bottom: 4px;
  right: 60px;
  cursor: pointer;
  }
  .share{
  position: absolute;
  bottom: 0px;
  right: 100px;
  cursor: pointer;
  }
  .legend{
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .complete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }
    .incomplete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
  }

  .is-complete{
    background: #35495e;
    color:#fff
  }
  @media (max-width: 500px){
    .todos{
      grid-template-columns: 1fr;
    }
  }


</style>