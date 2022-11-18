import { collection, getDoc, getDocs } from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Hoodie, Pants } from "../interfaces/ClothesInterfaces";
import { ItemData } from "../interfaces/ItemData";

const dbInstance = collection(database, "pants");

export default async function getSinglePants(id: string): Promise<Pants> {
  const req = await getDocs(dbInstance);

  const pants: Pants[] = req.docs.map((item) => ({
    ...(item.data() as ItemData),
    id: item.id,
  }));

  const singlePants = pants.filter((item) => item.id === id)[0];

  return singlePants;
}
