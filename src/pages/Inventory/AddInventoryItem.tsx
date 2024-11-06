import { Button, Stack } from "@mui/material";
import React from "react";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { ProductSelect } from "../../components/common/ProductSelect";
import { Quantity } from "../../components/common/Quantity";
import { TInventoryForm } from "./types";

type TAddInventoryItemForm = {
  productName: string;
  quantity: number;
};

const initialValues = {
  productName: "",
  quantity: 0,
};

const AddInventoryItem: React.FC = ({}) => {
  const addInventoryItemMethods = useForm<TAddInventoryItemForm>({
    defaultValues: initialValues,
  });

  const { control: inventoryFormControl } = useFormContext<TInventoryForm>();

  const { append, fields, update } = useFieldArray({
    control: inventoryFormControl,
    name: "items",
  });

  const productName = addInventoryItemMethods.watch("productName");
  const quantity = addInventoryItemMethods.watch("quantity");

  const onAddItem = () => {
    const productIndex = fields.findIndex(({ name }) => name === productName);

    if (productIndex === -1) {
      append({ name: productName, quantity });
    } else {
      const inventoryProduct = fields[productIndex];
      update(productIndex, {
        quantity: quantity + inventoryProduct.quantity,
        name: productName,
      });
    }

    addInventoryItemMethods.reset();
  };

  return (
    <FormProvider {...addInventoryItemMethods}>
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
    </FormProvider>
  );
};

export { AddInventoryItem };
