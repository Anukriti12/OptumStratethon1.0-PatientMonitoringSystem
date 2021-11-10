<script>
import { required } from 'vuelidate/lib/validators'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

/**
 * Todo component
 */
export default {
  components: { VuePerfectScrollbar },
  data() {
    return {
      todoData: [
        {
          id: 1,
          todo: 'Design One page theme',
          done: false,
        },
        {
          id: 2,
          todo: 'Build a js based app',
          done: true,
        },
        {
          id: 3,
          todo: 'Creating component page',
          done: true,
        },
        {
          id: 4,
          todo: 'Testing??',
          done: true,
        },
        {
          id: 5,
          todo: 'Hehe!! This is looks cool!',
          done: false,
        },
        {
          id: 6,
          todo: 'Create new version 3.0',
          done: false,
        },
        // {
        //   id: 7,
        //   todo: 'Build an angular app',
        //   done: true,
        // },
        // {
        //   id: 8,
        //   todo: "That's Brilliant",
        //   done: true,
        // },
      ],
      todolist: {
        todo: '',
      },
      todoSubmitted: false,
    }
  },
  validations: {
    todolist: {
      todo: { required },
    },
  },
  computed: {
    /**
     * return completed todo
     */
    completedTodo() {
      return this.todoData.filter((t) => t.done === false)
    },
  },
  methods: {
    /**
     * Todo form submit
     */
    saveTodo() {
      this.todoSubmitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      } else {
        var id = this.todoData.length
        const todo = this.todolist.todo
        // Value Push in Todo
        this.todoData.push({
          id: id + 1,
          todo,
        })
      }
      this.todoSubmitted = false
      this.todolist = {}
    },

    /**
     * Check box value change
     */
    updateCheck(index) {
      this.todoData[index].done = !this.todoData[index].done
    },

    /**
     * Hide Selected todo
     */
    archiveTodo() {
      this.todoData = this.todoData.filter((x) => x.done === false)
    },
  },
}
</script>

<template>
  <div class="card-box">
    <h4 class="mb-3 header-title">Todo</h4>
    <div class="todoapp">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <h5 id="todo-message">
            <span id="todo-remaining">{{ completedTodo.length }}</span> of
            <span id="todo-total">{{ todoData.length }}</span> remaining
          </h5>
        </div>
        <div class="col-sm-6">
          <a
            href="javascript: void(0);"
            class="float-right btn btn-light btn-xs"
            @click="archiveTodo"
            >Archive</a
          >
        </div>
      </div>
      <VuePerfectScrollbar>
        <div>
          <ul
            id="todo-list"
            class="list-group list-group-flush todo-list"
            style="max-height: 320px"
          >
            <li
              v-for="(todo, index) in todoData"
              :key="index"
              class="list-group-item border-0 pl-1 checkbox checkbox-primary"
            >
              <input
                :id="`${todo.id}`"
                :checked="`${todo.done ? true : ''}`"
                type="checkbox"
                @change="updateCheck(index)"
              />
              <label :for="`${todo.id}`">{{ todo.todo }}</label>
            </li>
          </ul>
        </div>
      </VuePerfectScrollbar>
      <form @submit.prevent="saveTodo">
        <div class="row mt-2">
          <div class="col-lg-9">
            <input
              v-model="todolist.todo"
              type="text"
              class="form-control"
              placeholder="Add new todo"
              name="todo"
              :class="{
                'is-invalid': todoSubmitted && $v.todolist.todo.$error,
              }"
            />
            <div
              v-if="todoSubmitted && !$v.todolist.todo.required"
              class="invalid-feedback"
              >This value is required.</div
            >
          </div>
          <div class="col-lg-3">
            <button type="submit" class="btn btn-primary width-sm">Add</button>
          </div>
        </div>
        <!-- end row -->
      </form>
      <!-- end form -->
    </div>
  </div>
</template>
