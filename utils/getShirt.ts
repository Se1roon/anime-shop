import { collection, getDoc, getDocs } from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Hoodie, Shirt } from "../interfaces/ClothesInterfaces";
import { ItemData } from "../interfaces/ItemData";

const dbInstance = collection(database, "shirts");

export default async function getShirt(id: string): Promise<Shirt> {
  const req = await getDocs(dbInstance);

  const shirts: Shirt[] = req.docs.map((item) => ({
    ...(item.data() as ItemData),
    id: item.id,
  }));

  const shirt = shirts.filter((shirt) => shirt.id === id)[0];

  return shirt;
}
