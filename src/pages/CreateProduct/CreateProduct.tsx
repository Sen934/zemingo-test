import React from "react";
import { PageLayout } from "../../components/ui/PageLayout";
import { ProductForm } from "./ProductForm";

export const CreateProduct: React.FC = () => {
  return (
    <PageLayout title="Create Product">
      <ProductForm />
    </PageLayout>
  );
};
