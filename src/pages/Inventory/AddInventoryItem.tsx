import { Button, Link as MUILink, Stack } from "@mui/material";
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
      <Stack direction="column">
        <Stack
          component="form"
          direction="row"
          gap={3}
          onSubmit={addInventoryItemMethods.handleSubmit(onAddItem)}
        >
          <ProductSelect />
          <Quantity />

          <Button type="submit" variant="outlined">
            Add
          </Button>
        </Stack>
        <MUILink component={NavLink} to={"/product-create"}>
          New product
        </MUILink>
      </Stack>
    </FormProvider>
  );
};

export { AddInventoryItem };
