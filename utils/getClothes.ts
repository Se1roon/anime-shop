import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Hoodie, Shirt } from "../interfaces/ClothesInterfaces";
import { ItemData } from "../interfaces/ItemData";
import { Pants } from "./../interfaces/ClothesInterfaces";

export default async function getClothes(
  type: string
): Promise<Hoodie[] | Shirt[] | Pants[]> {
  const dbInstance = collection(database, type);

  const req = await getDocs(dbInstance);

  const clothes: Hoodie[] | Shirt[] | Pants[] = req.docs.map((item) => ({
    ...(item.data() as ItemData),
    id: item.id,
  }));

  return clothes;
}
