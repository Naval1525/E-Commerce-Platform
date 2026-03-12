import { listCategories } from "./category.repository";

export async function getCategories() {
  return listCategories();
}
