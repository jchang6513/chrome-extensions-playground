# chrome-extensions-playground

Practices of chrome extensions

## metadata-reader
A tool that parse html head content and render the content in json format in the popup.
### Reference API
- chrome.tabs.query
- chrome.tabs.sendMessage
- chrome.runtime.onMessage
- chrome.tabs.onActivated
- chrome.tabs.onUpdated

## blur-the-page
A context option to add a filter on the page with blur effect
### Reference API
- chrome.tabs.query
- chrome.tabs.sendMessage
- chrome.runtime.onMessage
- chrome.contextMenus.create
- chrome.contextMenus.onClicked.addListener
