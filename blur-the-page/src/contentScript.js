chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'BLUR') {
    document.body.style.filter = 'blur(10px)'
  }
});
