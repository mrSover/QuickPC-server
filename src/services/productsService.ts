import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IComputerInfo } from "../models/IComputerInfo";
import { IProductsResponse } from "../models/IProductsResponse";

export const productsService = createApi({
  reducerPath: "productsService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://quick-pc-test-ikmk-git-main-thesoverman-gmailcoms-projects.vercel.app/api" }),
  endpoints: (builder) => ({
    getHotProducts: builder.query({
      query: () => "/hotProducts",
    }),
    getComponents: builder.query<IProductsResponse, { minPrice: string, maxPrice: string, sortValue: string }>({
      query: (arg) => {
        const { minPrice, maxPrice, sortValue } = arg
        return {
          url: `/products/?category=Component`,
          params: { minPrice, maxPrice, sortValue }
        }
      }
    }),
    getComputers: builder.query<IProductsResponse, string>({
      query: () => ({
        url: `/products/?category=Computer`,
      })
    }),
    getComputerInfo: builder.query<IComputerInfo, string>({
      query: id => ({
        url: `/product/${id}`,
      })
    }),
    getComponentInfo: builder.query<IComputerInfo, string>({
      query: id => ({
        url: `/product/${id}`,
      })
    }),
  })
})

export const {
  useGetHotProductsQuery,
  useGetComponentsQuery,
  useGetComputersQuery,
  useGetComputerInfoQuery,
  useGetComponentInfoQuery
} = productsService