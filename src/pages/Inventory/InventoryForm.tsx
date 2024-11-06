import { Button, Stack } from "@mui/material";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { IInventoryItem } from "../../api/models/inventory";
import { AddInventoryItem } from "./AddInventoryItem";
import { InventoryFieldsList } from "./InventoryFieldsList";
import { TInventoryForm } from "./types";

const initialValues = {
  items: [],
};

const InventoryForm: React.FC = () => {
  const { control, handleSubmit } = useForm<TInventoryForm>({
    defaultValues: initialValues,
  });

  const { append, fields, update, remove } = useFieldArray({
    control: control,
    name: "items",
  });

  const handleAddInventoryItem = (data: IInventoryItem) => {
    const productIndex = fields.findIndex(({ name }) => name === data.name);

    if (productIndex === -1) {
      append(data);
    } else {
      const inventoryProduct = fields[productIndex];
      update(productIndex, {
        quantity: data.quantity + inventoryProduct.quantity,
        name: data.name,
      });
    }
  };

  const handleRemoveInventoryItem = (index: number) => {
    remove(index);
  };

  const onSubmit = (data: TInventoryForm) => {
    console.log(data);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={4}
    >
      <AddInventoryItem onAddInventoryItem={handleAddInventoryItem} />

      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        gap={3}
        direction="column"
        alignItems="center"
      >
        <InventoryFieldsList
          fields={fields}
          onRemoveItem={handleRemoveInventoryItem}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ maxWidth: 100 }}
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};

export { InventoryForm };
