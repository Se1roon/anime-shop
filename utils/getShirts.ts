import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Shirt } from "../interfaces/ClothesInterfaces";
import { ItemData } from "../interfaces/ItemData";

const dbInstance = collection(database, "shirts");

export default async function getShirts(): Promise<Shirt[]> {
  const req = await getDocs(dbInstance);

  const shirts: Shirt[] = req.docs.map((item) => ({
    ...(item.data() as ItemData),
    id: item.id,
  }));

  return shirts;
}
