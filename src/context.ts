(function main() {
  const state = {
    preservePitch: true,
  };
  addEventListener('message', e => {
    if (typeof e.data !== 'object' || e.data === null || typeof e.data.pitchedEnabled !== 'boolean') return null;

    state.preservePitch = e.data.pitchedEnabled;
    setPreservePitchAll();
  });

  function setPreservePitchAll() {
    for (const element of document.querySelectorAll('video,audio')) {
      if (element instanceof HTMLMediaElement) {
        setPreservePitch(element);
      }
    }
  }

  addEventListener('play', async e => {
    if (e.target !== null && e.target instanceof HTMLMediaElement) {
      setPreservePitch(e.target);
    }
  });

  function setPreservePitch(el: any) {
    el.mozPreservePitch = state.preservePitch;
    el.mozPreservesPitch = state.preservePitch;
    el.preservesPitch = state.preservePitch;
  }
})();
