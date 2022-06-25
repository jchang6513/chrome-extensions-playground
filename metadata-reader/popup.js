chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { type: 'data' }, function(response) {
    if (response) {
      $('#metadata').JSONView(response.metadata)
    }
  });
});
