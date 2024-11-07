import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ENV } from "../../lib/constant";
import { IInventoryItem } from "../models/inventory";
import { QueryKey } from "../queryKeys";

const createInventory = async (inventory: IInventoryItem[]) => {
  const response = await axios.post<IInventoryItem[]>(
    `${ENV.API_URL}/inventory`,
    inventory,
  );

  return response.data;
};

const useUpdateInventory = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: createInventory,
    onMutate: async (newInventory) => {
      await queryClient.cancelQueries({ queryKey: [QueryKey.Inventory] });

      queryClient.setQueryData([QueryKey.Inventory], newInventory);

      return { newInventory };
    },
  });

  return { updateInventory: mutateAsync, isLoading };
};

export { useUpdateInventory };
