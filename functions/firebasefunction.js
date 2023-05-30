import { db } from "../database/firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const deatilCollectionRef = collection(db, "details");
class DetailDataService {
  addDetails = (addDetails) => {
    return addDoc(deatilCollectionRef, addDetails);
  };

  updateDetails = (id, updateDetails) => {
    const updateDetailDoc = doc(db, "details", id);
    return updateDoc(updateDetailDoc, updateDetails);
  };

  deleteDeatils = (id) => {
    const deleteDetailDoc = doc(db, "details", id);
    return deleteDoc(deleteDetailDoc);
  };

  getAllDetails = () => {
    return getDocs(deatilCollectionRef);
  };

  getDeatils = (id) => {
    const detailDoc = doc(db, "details", id);
    return getDoc(detailDoc);
  };
}

export default new DetailDataService();