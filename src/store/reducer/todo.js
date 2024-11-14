import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const todos = createAsyncThunk("todos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
});

const initialTodos = {
  isLoading: false,
  data: [],
  isError: false,
  showTodos: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    toggleShowTodos: (state) => {
      state.showTodos = !state.showTodos;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(todos.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(todos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.showTodos = true;
    });
    builder.addCase(todos.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const todoHandle = todoSlice.actions;
export default todoSlice.reducer;
