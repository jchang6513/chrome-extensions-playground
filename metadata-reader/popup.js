const metadataEl = document.getElementById("metadata");

let metadata = {}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, undefined, function(response) {
    if (response) {
      metadata = response.metadata;
      $('#metadata').JSONView(metadata)
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  console.log($('#metadata'))
});
