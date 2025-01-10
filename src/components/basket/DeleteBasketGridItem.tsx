import { useBasketStore } from "@/lib/store/useBasketStore";
import { Trash2Icon } from "lucide-react";

type DeleteBasketGridItemComponentType = {
    className?: string;
    itemId: number;
};

const DeleteBasketGridItem = ({
    className = "",
    itemId,
}: DeleteBasketGridItemComponentType) => {
    const { deleteItemFromBasketById } = useBasketStore((state) => state);

    return (
        <Trash2Icon
            className={`${className} cursor-pointer`}
            onClick={() => deleteItemFromBasketById(itemId)}
        />
    );
};

export default DeleteBasketGridItem;
