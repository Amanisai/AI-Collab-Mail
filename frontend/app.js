import { app, db } from './firebase-config.js';
import { doc, setDoc } from "firebase/firestore";

// Check if Firebase is connected
console.log('Firebase App Initialized:', app);

// Function to test Firestore
async function testFirestore() {
    try {
        await setDoc(doc(db, "testCollection", "testDoc"), {
            name: "Test Document",
            createdAt: new Date().toISOString()
        });
        console.log("Test document successfully written to Firestore!");
    } catch (error) {
        console.error("Error writing document to Firestore:", error);
    }
}

// Run Firestore test when page loads
testFirestore();
