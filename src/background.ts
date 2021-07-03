browser.browserAction.onClicked.addListener(async tab => {
  await browser.tabs.sendMessage(tab.id, { type: 'click', tabId: tab.id ?? -1 });
});
browser.runtime.onMessage.addListener(async ({ enabled }, sender) => {
  await browser.browserAction.setIcon({
    path: enabled ? 'icon-on.svg' : 'icon-off.svg',
    tabId: sender.tab?.id,
  });
});
