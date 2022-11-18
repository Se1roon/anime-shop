import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Hoodie, Pants, Shirt } from "../interfaces/ClothesInterfaces";
import { ItemData } from "../interfaces/ItemData";

export default async function getPaths(from: string) {
  const dbInstance = collection(database, from);

  const req = await getDocs(dbInstance);

  const items: Hoodie[] | Shirt[] | Pants[] = req.docs.map((item) => ({
    ...(item.data() as ItemData),
    id: item.id,
  }));

  const ids = items.map((item) => item.id);

  return ids;
}
