import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Pants } from "../interfaces/ClothesInterfaces";
import { ItemData } from "../interfaces/ItemData";

const dbInstance = collection(database, "pants");

export default async function getPants(): Promise<Pants[]> {
  const req = await getDocs(dbInstance);

  const pants: Pants[] = req.docs.map((item) => ({
    ...(item.data() as ItemData),
    id: item.id,
  }));

  return pants;
}
