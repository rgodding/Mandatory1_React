import { collection, addDoc, query, onSnapshot } from 'firebase/firestore'
import { database, storage } from '../../config/firebase';

import NewsCollection from "../components/NewsCollection";

export const readDB = async (setNewsArticles) => {
    console.log('reading DB')
  const reference = collection(database, NewsCollection());
  const q = query(reference, (ref) => ref.orderBy("createdAt", "desc"));
  onSnapshot(q, (snapshot) => {
    const _newsArticles = [];
    snapshot.forEach((doc) => {
      _newsArticles.push({
        ...doc.data(),
        key: doc.id,
      });
    });
    setNewsArticles(_newsArticles);
  });
};