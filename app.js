import { app, db } from './firebase-config.js';
import { doc, setDoc } from "firebase/firestore";

// Test Firebase connection
console.log('Firebase App:', app);

// Test Firestore by writing a document
async function testFirestore() {
    try {
        await setDoc(doc(db, "testCollection", "testDoc"), {
            name: "Test Document",
            createdAt: new Date().toISOString()
        });
        console.log("Test document written to Firestore successfully!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

testFirestore();
