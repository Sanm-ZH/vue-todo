import  from 'veu-'
<template>
  <div class="real-app">
    <input type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么？"
      @keyup.enter="addTodo" />
    <Item
      v-for="todo in filteredTodos"
      :todo="todo"
      :key="todo.id"
      @del="deleteTodo"
    />
    <Tabs 
      :filter="filter" 
      :todos="todos" 
      @toggle="toggleFilter"
      @clearAll="clearAllCompleted"
    />
  </div>
</template>

<script>
import Item from "./item";
import Tabs from "./tab";

let id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: "all"
    };
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo === id));
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(todo => completed === todo.completed);
    }
  }
};
</script>

<style lang="stylus" scoped>
.real-app {
  opacity: 0.7;
  width: 620px;
  margin: 0px auto;
  box-shadow: 6px 2px 10px #3c3c3c;
  border-radius: 5px;
  padding: 10px;
  background: #ffffff;
}

.add-input {
  positon: relative;
  margin: 0px;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4rem;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0px rgba(0, 0, 0, 0);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  z-index: 1000;
}
</style>
