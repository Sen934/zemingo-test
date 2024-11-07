import { Button, Stack } from "@mui/material";
import { useNotifications } from "@toolpad/core/useNotifications";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useUpdateInventory } from "../../api/hooks/useUpdateInventory";
import { IInventoryItem } from "../../api/models/inventory";
import { AddInventoryItem } from "./AddInventoryItem";
import { InventoryFieldsList } from "./InventoryFieldsList";
import { TInventoryForm } from "./types";

type TInventoryFormProps = {
  initialItems: IInventoryItem[];
};

const InventoryForm: React.FC<TInventoryFormProps> = ({ initialItems }) => {
  const notifications = useNotifications();

  const { updateInventory } = useUpdateInventory();

  const { control, handleSubmit, reset } = useForm<TInventoryForm>({
    defaultValues: { items: initialItems ?? [] },
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

  const onSubmit = async (data: TInventoryForm) => {
    try {
      const response = await updateInventory(data.items);
      notifications.show(`Inventory  was successfully updated`, {
        severity: "success",
        autoHideDuration: 3000,
      });
      reset({ items: response });
    } catch (error) {
      notifications.show("Something went wrong!", {
        severity: "error",
        autoHideDuration: 3000,
      });
    }
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
