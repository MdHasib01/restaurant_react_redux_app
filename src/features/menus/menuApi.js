import { apiSlice } from "../api/apiSlice";

export const menusApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDishes: builder.query({
      query: (pageNmber) => `/dishes/?_page=${pageNmber}`,
      keepUnusedDataFor: 600,
      providesTags: ["Dishes"],
    }),
    getAllDishes: builder.query({
      query: () => `/dishes`,
      keepUnusedDataFor: 600,
      providesTags: ["Dishes"],
    }),
    getDish: builder.query({
      query: (dishId) => `/dishes/${dishId}`,
      providesTags: (result, error, arg) => [{ type: "Dish", id: arg }],
    }),
    getRelatedDishes: builder.query({
      query: ({ id, title }) => {
        const tags = title.split(" ");
        const likes = tags.map((tag) => `title_like=${tag}`);
        const queryString = `/videos?${likes.join("&")}&_limit=4`;
        return queryString;
      },
      providesTags: (result, error, arg) => [
        { type: "RelatedDishes", id: arg.id },
      ],
    }),
    addVideo: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Videos"],
    }),
    editVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Videos",
        { type: "Video", id: arg.id },
        { type: "RelatedVideos", id: arg.id },
      ],
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Videos"],
    }),
  }),
});

export const {
  useGetAllDishesQuery,
  useGetDishesQuery,
  useGetDishQuery,
  useGetRelatedDishesQuery,
  useAddVideoMutation,
  useEditVideoMutation,
  useDeleteVideoMutation,
} = menusApi;
