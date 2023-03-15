import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { database, storage } from '../../config/firebase';
import { getDatabase, ref, remove } from "firebase/database";

import NewsCollection from '../components/NewsCollection';


export function SaveArticle(title, image, credits, article){
    console.log('saving article: ' + title + "IMAGE: " + image)
    const tempNewsArticle = {
        title: title,
        image: image,
        credits: credits,
        article: article
    }
    console.log(tempNewsArticle)
    addDoc(collection(database, NewsCollection()), tempNewsArticle);
}

export const DeleteArticle = async (key) => {
    console.log('deleting note: ' + key)
    try {
        const docRef = doc(database, NewsCollection(), key)
        await deleteDoc(docRef)
    } catch(error) {
        console.error('Error deleting note:', error)
    }
}

// Make authentication for admin