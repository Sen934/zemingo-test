import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ENV } from "../../lib/constant";
import { IProduct } from "../models/product";

const createProduct = async (product: IProduct) => {
  const response = await axios.put<IProduct[]>(
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
