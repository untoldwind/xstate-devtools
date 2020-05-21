const extensionId = "lnhmmdhbigihnomjdmmjchkeehonpdbb";

// listening to messages from `xstate` package
window.addEventListener('message', msg => {
  const { type } = msg.data;
  switch (type) {
    case 'connect': {
      chrome.runtime.sendMessage(msg.data);
      return;
    }
    case 'update': {
      chrome.runtime.sendMessage(msg.data);
      return;
    }
    case 'disconnect': {
      chrome.runtime.sendMessage(msg.data);
      return;
    }
  }
});
chrome.runtime.sendMessage({ type: "reset" });

