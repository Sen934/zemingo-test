import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ENV } from "../../lib/constant";
import { IInventoryItem } from "../models/inventory";
import { QueryKey } from "../queryKeys";

const fetchInventory = async () => {
  const response = await axios.get<IInventoryItem[]>(
    `${ENV.API_URL}/inventory`,
  );

  return response.data;
};

const useInventory = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [QueryKey.Inventory],
    queryFn: fetchInventory,
  });

  return {
    inventory: data,
    isInventoryLoading: isLoading,
    inventoryHasError: isError,
  };
};

export { useInventory };
