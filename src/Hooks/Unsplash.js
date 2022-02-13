import { createApi } from "unsplash-js";

export const Unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
});
