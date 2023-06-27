// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'translate') {
      // Translate the message here (you'll need to implement the translation logic)
      const translatedMessage = translateMessage(request.message);

      // Send the translated message back to the background script
      sendResponse({ translatedMessage });
    }
  });

  // Function to translate the chat message
  function translateMessage(message) {
    // Implement your translation logic here
    // You can use any translation API or library of your choice
    // For example, you can use Google Translate API or a JavaScript translation library
    // Return the stranslated message

    return 'Translated: ' + message;
  }
