import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData } from "../shared/Interfaces";

export const data = createApi({
    reducerPath: "data",
    tagTypes: ["data"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (build) => ({
        getData: build.query<IData[], void>({
            query: () => "data",
            providesTags: ["data"],
        }),
    }),
});

export const { useGetDataQuery } = data;
