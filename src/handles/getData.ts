import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../firebase/firebase";

const getData = async () => {
  const ref = collection(firestore, "test_data");
  const snapshot = await getDocs(ref);
  const data = snapshot.docs.map((doc) => doc.data());
  return data;
};

export default getData;
