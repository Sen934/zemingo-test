import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ENV } from "../../lib/constant";
import { IProduct } from "../models/product";
import { QueryKey } from "../queryKeys";

const createProduct = async (product: IProduct) => {
  const response = await axios.put<IProduct[]>(
    `${ENV.API_URL}/product`,
    product,
  );

  return response.data;
};

const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.ProductAll] });
    },
  });

  return { createProduct: mutateAsync, isLoading };
};

export { useCreateProduct };
