// background.js
const updateTotal = (tabId) => {
  chrome.tabs.sendMessage(tabId, { type: 'total' }, function(response) {
    if (response) {
      const { total } = response
      chrome.action.setBadgeText({ text: String(total) })
      chrome.action.setBadgeBackgroundColor({ color: '#203864' })
    }
  });
}

chrome.tabs.onActivated.addListener((tab) => {
  updateTotal(tab.tabId)
})

chrome.tabs.onUpdated.addListener((tabId) => {
  updateTotal(tabId)
})
