import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Product"],
    }),
    getProductsByUserId: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["Product"],
    }),
    getProductsByLimitNumber: builder.query({
      query: (number) => `/products?limit=${number}`,
      providesTags: ["Product"],
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/products/category/${category}`,
      providesTags: ["Product"],
    }),
    getProductsByUrl: builder.query({
      query: (url) => `${url}`,
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByUserIdQuery,
  useGetProductsByLimitNumberQuery,
  useGetProductsByCategoryQuery,
  useGetProductsByUrlQuery,
} = extendedApiSlice;
