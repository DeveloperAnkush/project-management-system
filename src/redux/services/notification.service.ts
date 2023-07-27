import {
  Notification,
  PaginationParams,
  TotalNotificationsResponse,
} from "../../utlis/types";
import { baseApi } from "./base.service";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTotalNotifications: builder.query<number, void>({
      query: () => ({
        url: "/api/user/notification-count",
        method: "GET",
      }),
      transformResponse: (response: TotalNotificationsResponse) =>
        response.data,
    }),
    getPaginatedNotifications: builder.query<Notification[], PaginationParams>({
      query: (params) => ({
        url: "api/user/notification-listing",
        method: "POST",
        body: JSON.stringify(params),
      }),
    }),
  }),
});

// Export hooks for using the getTotalNotifications and getPaginatedNotifications endpoints
export const {
  useGetTotalNotificationsQuery,
  useGetPaginatedNotificationsQuery,
} = notificationApi;
