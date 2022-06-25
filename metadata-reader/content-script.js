chrome.runtime.onMessage.addListener(
  (request, _sender, sendResponse) => {
    const metadata = {}
    const children = document.head.children

    if (request.type === 'total') {
      sendResponse({ total: children.length });
    } else if (request.type === 'data') {
      for (let i = 0; i < children.length; i++) {
        const node = children[i];
        const tagName = node.tagName.toLowerCase()
        const attributes = node.getAttributeNames()
        const data = attributes.reduce((acc, key) => {
          acc[key] = node.attributes[key].value
          return acc
        }, {})

        if (node.text) {
          data['text'] = node.text
        }

        if (metadata[tagName]) {
          metadata[tagName].push(data)
        } else {
          metadata[tagName] = [data]
        }
      }

      sendResponse({ metadata, total: children.length });
    }
  });
