import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    status: STATUSES.IDLE,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

export const { setUsers, setStatus } = usersSlice.actions;
export default usersSlice.reducer;

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://reqres.in/api/users?page=1&&per_page=10");
  const data = await res.json();
  return data.data;
});
