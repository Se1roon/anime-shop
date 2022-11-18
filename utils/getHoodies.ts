import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Hoodie } from "../interfaces/Hoodie";
import { ItemData } from "../interfaces/ItemData";

const dbInstance = collection(database, "hoodies");

export default async function getHoodies(): Promise<Hoodie[]> {
  const req = await getDocs(dbInstance);

  const hoodies: Hoodie[] = req.docs.map((item) => ({
    ...(item.data() as ItemData),
    id: item.id,
  }));

  return hoodies;
}
