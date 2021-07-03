const state = {
  preservePitch: true,
};

browser.runtime.onMessage.addListener(async msg => {
  if (typeof msg !== 'object' || msg === null) return;

  state.preservePitch = !state.preservePitch;

  await browser.runtime.sendMessage({ enabled: state.preservePitch });
  postMessage({ pitchedEnabled: state.preservePitch }, '*');
});

(function addScript() {
  const url = browser.runtime.getURL('context.js');
  const script = document.createElement('script');
  script.src = url;
  script.onload = () => script.remove();
  document.body.append(script);
})();
