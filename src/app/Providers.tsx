import type { Router } from "@remix-run/router/dist/router";
import React from "react";
import { RouterProvider } from "react-router-dom";

type TProps = {
  router: Router;
};

const Providers: React.FC<TProps> = ({ router }: TProps) => {
  return <RouterProvider router={router} />;
};

export { Providers };
