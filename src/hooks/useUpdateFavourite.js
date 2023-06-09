import { collection, query, where, addDoc, doc, deleteDoc, getDocs } from "firebase/firestore";
import db from '.././config/firebase'
import { useState } from "react";


export const useUpdateFavourite = (updateReducers) => {
    const [isLike, setIsLike] = useState(false);
    const [isUnlike, setIsUnlike] = useState(false);
    const [isLoadingLike, setIsLoadingLike] = useState(false);
    const [isLoadingUnlike, setIsLoadingUnlike] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState('');


    const handleLike = async (id) => {
        try {
            const q = query(collection(db, "favourites"), where("pokemon_id", "==", id));
            const snapshot = await getDocs(q)
            const result = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            if (result.length) {
                setIsLoadingUnlike(true)
                const docRef = doc(db, "favourites", result[0].id)
                await deleteDoc(docRef)
                setIsUnlike(true)
                setIsLoadingUnlike(false)

            } else {
                setIsLoadingLike(true)
                const collectionRef = collection(db, "favourites")
                const payload = { pokemon_id: id }
                await addDoc(collectionRef, payload);
                setIsLike(true)
                setIsLoadingLike(false)
            }
        } catch (error) {
            setIsError(true)
            setError(error)
            console.log(error)
            console.log(error)
        } finally {
            updateReducers()
        }
    };

    return { handleLike, isLike, isUnlike, isLoadingLike, isLoadingUnlike, isError, error };
};





