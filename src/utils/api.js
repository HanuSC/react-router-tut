import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "vanlife-hanus.firebaseapp.com",
  projectId: "vanlife-hanus",
  storageBucket: "vanlife-hanus.appspot.com",
  messagingSenderId: "226161652098",
  appId: "1:226161652098:web:a1dc148e9973b06e989f9b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansRef = collection(db, 'vans')


export async function getVans() {
    const querySnapshot = await getDocs(vansRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(), 
        id: doc.id
    }))
    console.log(dataArr)
    return dataArr
}

export async function getVan(id) {
    const vanRef = doc(db, 'vans', id) 
    const van = await getDoc(vanRef)
    return {
        ...van.data(), 
        id: van.id
    }
}

export async function getHostVans() {
    const q = query(vansRef, where('hostId', '==', '123'))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(), 
        id: doc.id
    }))
    return dataArr
}


export async function loginUser(credentials) {
    const res = await fetch('/api/login', {
        method: "post", body: JSON.stringify(credentials)
    })

    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText, 
            status: res.status
        }
    }

    return data
}



