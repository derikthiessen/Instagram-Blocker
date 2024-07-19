chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ['content.js']
    }).catch(err => console.error('Script execution error:', err));
  }, { url: [{ urlMatches: '.*instagram.com.*' }] });
  
  
  