// Google Firebase Integration Service for CTPMS - Project TPMS (tpms-6e8d8)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  setDoc
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { 
  getAuth
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

// User's exact Google Firebase Project Credentials
const firebaseConfig = {
  apiKey: "AIzaSyAAFXLtkLf55eMIeeTGHpu7KVu-WE9-Zeg",
  authDomain: "tpms-6e8d8.firebaseapp.com",
  projectId: "tpms-6e8d8",
  storageBucket: "tpms-6e8d8.firebasestorage.app",
  messagingSenderId: "480678660528",
  appId: "1:480678660528:web:c6e35266d4eb5159d6ee75",
  measurementId: "G-Z54H1Y13Q0"
};

let app = null;
let dbInstance = null;
let authInstance = null;
let isFirebaseConnected = false;

try {
  app = initializeApp(firebaseConfig);
  dbInstance = getFirestore(app);
  authInstance = getAuth(app);
  isFirebaseConnected = true;
  console.log('🔥 Live connected to user Firebase project: TPMS (tpms-6e8d8)!');
} catch (error) {
  console.warn('Firebase initialization note:', error);
}

export { app, dbInstance as firestore, authInstance as firebaseAuth, isFirebaseConnected };

// Helper to sync local data to Firebase Firestore
export async function syncCollectionToFirestore(collectionName, items) {
  if (!dbInstance) return;
  try {
    for (const item of items) {
      const pkName = `${collectionName.toLowerCase()}_id`;
      const docId = item[pkName] ? String(item[pkName]) : String(Date.now());
      const docRef = doc(dbInstance, collectionName, docId);
      await setDoc(docRef, item, { merge: true });
    }
    console.log(`Synced ${items.length} records to Firestore collection: ${collectionName}`);
  } catch (e) {
    console.warn(`Firestore sync note for ${collectionName}:`, e);
  }
}

// Helper to fetch collection from Firestore
export async function fetchCollectionFromFirestore(collectionName) {
  if (!dbInstance) return null;
  try {
    const colRef = collection(dbInstance, collectionName);
    const snapshot = await getDocs(colRef);
    const results = [];
    snapshot.forEach(doc => {
      results.push({ id: doc.id, ...doc.data() });
    });
    return results.length > 0 ? results : null;
  } catch (e) {
    console.warn(`Firestore fetch note for ${collectionName}:`, e);
    return null;
  }
}
