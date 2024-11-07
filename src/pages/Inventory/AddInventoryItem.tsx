import { Button, Grid2, Link as MUILink } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { IInventoryItem } from "../../api/models/inventory";
import { ProductSelect } from "../../components/common/ProductSelect";
import { Quantity } from "../../components/common/Quantity";

type TAddInventoryItemForm = {
  productName: string;
  quantity: number;
};

const initialValues = {
  productName: "",
  quantity: 0,
};

type TAddInventoryItemProps = {
  onAddInventoryItem: (data: IInventoryItem) => void;
};

const AddInventoryItem: React.FC<TAddInventoryItemProps> = ({
  onAddInventoryItem,
}) => {
  const addInventoryItemMethods = useForm<TAddInventoryItemForm>({
    defaultValues: initialValues,
  });

  const onAddItem = (data: TAddInventoryItemForm) => {
    onAddInventoryItem({ name: data.productName, quantity: data.quantity });

    addInventoryItemMethods.reset();
  };

  return (
    <FormProvider {...addInventoryItemMethods}>
      <Grid2
        container
        spacing={2}
        columnSpacing={4}
        component="form"
        onSubmit={addInventoryItemMethods.handleSubmit(onAddItem)}
        sx={{ margin: 4 }}
      >
        <Grid2 size={{ xs: 12, md: 4 }} maxWidth={450}>
          <ProductSelect />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} maxWidth={450}>
          <Quantity />
        </Grid2>

        <Grid2
          size={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button type="submit" variant="outlined">
            Add
          </Button>
        </Grid2>
        <MUILink component={NavLink} to={"/product-create"}>
          New product
        </MUILink>
      </Grid2>
    </FormProvider>
  );
};

export { AddInventoryItem };
