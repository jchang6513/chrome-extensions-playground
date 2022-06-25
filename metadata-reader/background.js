// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.tabs.sendMessage(tabId, undefined, function(response) {
    if (response) {
      const { total } = response
      chrome.action.setBadgeText({ text: String(total) })
      chrome.action.setBadgeBackgroundColor({ color: '#203864' })
    }
  });
})
