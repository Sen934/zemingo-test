import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ENV } from "../../lib/constant";
import { TProduct } from "../models/product";
import { QueryKey } from "../queryKeys";

const fetchProducts = async () => {
  const response = await axios.get<TProduct[]>(`${ENV.API_URL}/product/all`);

  return response.data;
};

const useProducts = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [QueryKey.ProductAll],
    queryFn: fetchProducts,
  });

  return {
    products: data,
    isProductsLoading: isLoading,
    productsHasError: isError,
  };
};

export { useProducts };
