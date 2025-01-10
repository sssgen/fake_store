import { CustomError } from "@/server/CustomError";
import type { GoodsItemType } from "@/types/GoodsItem";

const fetchURL = process.env.FETCH_PRODUCTS_URL || "";

export async function getProducts() {
    let data: GoodsItemType[] | null = null;
    let error: CustomError | null = null;

    try {
        if (fetchURL === "") {
            throw new CustomError("Fetching URL was not provided", 400);
        }

        const goods = await fetch(fetchURL);

        if (!goods.ok) {
            throw new CustomError("Failed to fetch products", goods.status);
        }

        data = await goods.json();

        return { data, error: null };
    } catch (e) {
        if (e instanceof CustomError) {
            error = e;
        } else {
            error = new CustomError(`An unexpected error occurred: ${e}`, 500);
        }

        return { data: null, error };
    }
}
