import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useProducts } from "../../api/hooks/useProducts";

export const ProductSelect: React.FC = () => {
  const { products, isProductsLoading } = useProducts();
  const { control, formState } = useFormContext<{ productName: string }>();

  const errors = formState.errors;

  if (!products) {
    return null;
  }

  return (
    <FormControl variant="outlined" error={!!errors.productName}>
      <InputLabel id="product-name-select-label">Product name</InputLabel>
      <Controller
        name="productName"
        control={control}
        rules={{ required: "Product is required" }}
        disabled={isProductsLoading}
        render={({ field }) => (
          <Select
            {...field}
            label="Please select product name"
            id="product-name-select"
            labelId="product-name-select-label"
            sx={{ minWidth: 200 }}
          >
            {isProductsLoading && <MenuItem>Loading...</MenuItem>}
            {products.map(({ name }) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {errors.productName && (
        <FormHelperText>{errors.productName?.message}</FormHelperText>
      )}
    </FormControl>
  );
};
