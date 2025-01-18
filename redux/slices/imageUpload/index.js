const { createSlice } = require("@reduxjs/toolkit");

const imageUpload = createSlice({
  name: "upload-image",
  initialState: {
    images: [],
  },
  reducers: {
    addImages: (state, action) => {
      state.images = action.payload;
    },
    clearImages: (state) => {
      state.images = [];
    },
  },
});

export const { addImages, clearImages } = imageUpload.actions;

export default imageUpload.reducer;
