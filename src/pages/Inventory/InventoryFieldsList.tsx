import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { FieldArrayWithId } from "react-hook-form";
import { IInventoryItem } from "../../api/models/inventory";
import { TInventoryForm } from "./types";

type TInventoryItemsListProps = {
  fields: FieldArrayWithId<TInventoryForm, "items", "id">[];
  onRemoveItem: (index: number) => void;
};

const InventoryFieldsList: React.FC<TInventoryItemsListProps> = ({
  fields,
  onRemoveItem,
}) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {fields.map((item, index) => (
        <InventoryItem
          key={item.id}
          item={{ name: item.name, quantity: item.quantity }}
          onRemoveItem={() => onRemoveItem(index)}
        />
      ))}
    </List>
  );
};

type TInventoryItemProps = { item: IInventoryItem; onRemoveItem: () => void };

const InventoryItem: React.FC<TInventoryItemProps> = ({
  item,
  onRemoveItem,
}) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={onRemoveItem}>
          <DeleteIcon />
        </IconButton>
      }
      sx={{ width: "100%", minWidth: 300 }}
    >
      <ListItemText primary={item.name} secondary={item.quantity} />
    </ListItem>
  );
};

export { InventoryFieldsList };
