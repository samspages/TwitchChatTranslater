// Get the necessary DOM elements
const messageInput = document.getElementById('messageInput');
const translateButton = document.getElementById('translateButton');
const translatedMessage = document.getElementById('translatedMessage');

// Add click event listener to the translate button
translateButton.addEventListener('click', () => {
  const message = messageInput.value;

  // Send a message to the content script to translate the message
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: 'translate', message }, (response) => {
      // Display the translated message
      translatedMessage.textContent = response.translatedMessage;
    });
  });
});
