import type { Router } from "@remix-run/router/dist/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RouterProvider } from "react-router-dom";

type TProps = {
  router: Router;
  client: QueryClient;
};

const Providers: React.FC<TProps> = ({ router, client }: TProps) => {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export { Providers };
