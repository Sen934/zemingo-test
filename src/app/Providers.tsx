import type { Router } from "@remix-run/router/dist/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NotificationsProvider } from "@toolpad/core/useNotifications";
import React from "react";
import { RouterProvider } from "react-router-dom";
type TProps = {
  router: Router;
  client: QueryClient;
};

const Providers: React.FC<TProps> = ({ router, client }: TProps) => {
  return (
    <QueryClientProvider client={client}>
      <NotificationsProvider>
        <RouterProvider router={router} />
      </NotificationsProvider>
    </QueryClientProvider>
  );
};

export { Providers };
