import { createSlice, nanoid } from "@reduxjs/toolkit";

interface AppState {
  todos: any[];
  todoState: boolean;
}

const initialState: AppState = {
  todos: [{ id: 1, text: "hello" }],
  todoState: true,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
