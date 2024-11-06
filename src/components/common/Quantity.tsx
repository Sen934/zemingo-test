import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const Quantity: React.FC = () => {
  const { control, formState } = useFormContext<{ quantity: string }>();

  const errors = formState.errors;

  return (
    <Controller
      name="quantity"
      control={control}
      rules={{
        min: { value: 0, message: "Quantity must be at least 0" },
      }}
      render={({ field }) => (
        <TextField
          {...field}
          label="Quantity"
          variant="outlined"
          type="number"
          error={!!errors.quantity}
          helperText={errors.quantity?.message}
          onChange={(e) => field.onChange(Number(e.target.value))} // Convert value to number
          slotProps={{
            htmlInput: { min: 0 },
          }}
        />
      )}
    />
  );
};

export { Quantity };
