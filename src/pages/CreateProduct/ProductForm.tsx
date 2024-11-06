import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useNotifications } from "@toolpad/core/useNotifications";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useCreateProduct } from "../../api/hooks/useCreateProduct";

type TFormValues = {
  productName: string;
};

const ProductForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: {
      productName: "",
    },
  });

  const notifications = useNotifications();

  const { createProduct, isLoading } = useCreateProduct();

  const onSubmit = async (data: TFormValues) => {
    try {
      await createProduct({ name: data.productName });
      reset();
      notifications.show(`Product ${data.productName} was successfully added`, {
        severity: "success",
        autoHideDuration: 3000,
      });
    } catch (error) {
      notifications.show("Something went wrong!", {
        severity: "error",
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={4}
    >
      <Controller
        name="productName"
        control={control}
        rules={{ required: "Product name is required" }}
        disabled={isLoading}
        render={({ field }) => (
          <TextField
            {...field}
            label="Product name"
            variant="outlined"
            error={!!errors.productName}
            helperText={errors.productName?.message}
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress /> : "Submit"}
      </Button>
    </Stack>
  );
};

export { ProductForm };
