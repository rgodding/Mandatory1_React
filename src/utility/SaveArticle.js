import { collection, addDoc } from 'firebase/firestore'
import { database, storage } from '../../config/firebase';

const newsCollection = "NewsArticleList"

export default function SaveArticle(title, image, credits, article){
    console.log('saving article')
    const tempNewsArticle = {
        title: title,
        image: image,
        credits: credits,
        article: article
    }
    addDoc(collection(database, newsCollection), tempNewsArticle);
}


// Make authentication for admin