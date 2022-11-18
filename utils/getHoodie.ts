import { collection, getDoc, getDocs } from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Hoodie } from "../interfaces/ClothesInterfaces";
import { ItemData } from "../interfaces/ItemData";

const dbInstance = collection(database, "hoodies");

export default async function getHoodie(id: string): Promise<Hoodie> {
  const req = await getDocs(dbInstance);

  const hoodies: Hoodie[] = req.docs.map((item) => ({
    ...(item.data() as ItemData),
    id: item.id,
  }));

  const hoodie = hoodies.filter((hoodie) => hoodie.id === id)[0];

  return hoodie;
}
