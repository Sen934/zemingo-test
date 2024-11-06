import { Stack, Typography } from "@mui/material";
import React from "react";
import { ProductForm } from "./ProductForm";

export const CreateProduct: React.FC = () => {
  return (
    <Stack direction="column" justifyContent="center" height="100%" gap={8}>
      <Typography variant="h2" align="center">
        Create product
      </Typography>

      <ProductForm />
    </Stack>
  );
};
