import React from "react";
import { PageLayout } from "../../components/ui/PageLayout";
import { InventoryForm } from "./InventoryForm";

const Inventory: React.FC = () => (
  <PageLayout title="Inventory">
    <InventoryForm />
  </PageLayout>
);

export { Inventory };
