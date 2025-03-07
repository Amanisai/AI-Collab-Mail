function saveDraft() {
    const draftText = document.getElementById('emailDraft').value;
    // Save draft to Firestore (assumes Firebase initialized in firebase-config.js)
    firebase.firestore().collection('drafts').doc('currentDraft').set({
        content: draftText,
        timestamp: new Date()
    }).then(() => {
        alert('Draft saved!');
    });
}

// Example function for AI suggestions (dummy)
document.getElementById('aiSuggestions').innerText = "Consider simplifying the intro paragraph.";
