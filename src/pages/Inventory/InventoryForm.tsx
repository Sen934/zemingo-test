import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AddInventoryItem } from "./AddInventoryItem";
import { TInventoryForm } from "./types";

const initialValues = {
  items: [],
};

const InventoryForm: React.FC = () => {
  const methods = useForm<TInventoryForm>({ defaultValues: initialValues });

  const onSubmit = (data: TInventoryForm) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <AddInventoryItem />

        <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Stack>
    </FormProvider>
  );
};

export { InventoryForm };
