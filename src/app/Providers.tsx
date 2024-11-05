import React from 'react';
import type { Router } from "@remix-run/router/dist/router";
import { RouterProvider } from "react-router-dom";

type Props = {
  router: Router
}

const Providers: React.FC<Props> = ({router}: Props) => {
  return (
      <RouterProvider router={router}/>
  )
}

export {Providers};
