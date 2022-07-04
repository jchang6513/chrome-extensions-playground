const onClick = () => {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { type: 'BLUR' },
      );
    },
  );
}

chrome.contextMenus.create({
  id: `BLUR-THE-PAGE-${Number(new Date())}`,
  title: 'Blur The Page',
  contexts: ['all'],
  type: 'normal',
})

chrome.contextMenus.onClicked.addListener(onClick)
