import { CircularProgress } from "@mui/material";
import React from "react";
import { useInventory } from "../../api/hooks/useInventory";
import { PageLayout } from "../../components/ui/PageLayout";
import { InventoryForm } from "./InventoryForm";

const Inventory: React.FC = () => {
  const { inventory, isInventoryLoading } = useInventory();

  return (
    <PageLayout title="Inventory">
      {isInventoryLoading && <CircularProgress size={50} slot="centered" />}
      {inventory && <InventoryForm initialItems={inventory} />}
    </PageLayout>
  );
};

export { Inventory };
