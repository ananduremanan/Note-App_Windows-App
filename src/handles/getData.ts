import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../firebase/firebase";
import { onSnapshot } from "firebase/firestore";

const listenToData = (setData: any) => {
  const ref = collection(firestore, "test_data");
  const unsubscribe = onSnapshot(ref, (snapshot: any) => {
    const data = snapshot.docs.map((doc: any) => doc.data());
    setData(data);
  });
  return unsubscribe;
};

const getData = async (setData: any) => {
  const ref = collection(firestore, "test_data");
  const snapshot = await getDocs(ref);
  const data = snapshot.docs.map((doc) => doc.data());
  setData(data);
  const unsubscribe = listenToData(setData);

  return unsubscribe;
};

export default getData;
