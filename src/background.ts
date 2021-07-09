import iconOn from 'url:./icon-on.svg';
import iconOff from 'url:./icon-off.svg';

browser.browserAction.onClicked.addListener(async tab => {
  await browser.tabs.sendMessage(tab.id, { type: 'click', tabId: tab.id ?? -1 });
});
browser.runtime.onMessage.addListener(async ({ enabled }, sender) => {
  await browser.browserAction.setIcon({
    path: enabled ? iconOn : iconOff,
    tabId: sender.tab?.id,
  });
});
