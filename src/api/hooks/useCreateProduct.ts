import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ENV } from "../../lib/constant";
import { TProduct } from "../models/product";

const createProduct = async (product: TProduct) => {
  const response = await axios.put<TProduct[]>(
    `${ENV.API_URL}/product`,
    product,
  );

  return response.data;
};

const useCreateProduct = () => {
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: createProduct,
  });

  return { createProduct: mutateAsync, isLoading };
};

export { useCreateProduct };
