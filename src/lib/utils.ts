export const preloadImages = (selector: string = 'img'): Promise<void> => {
  return new Promise((resolve) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) {
      resolve();
      return;
    }
    let loaded = 0;
    const onLoad = () => {
      loaded++;
      if (loaded === elements.length) resolve();
    };
    elements.forEach((el) => {
      if (el instanceof HTMLImageElement) {
        if (el.complete) onLoad();
        else el.addEventListener('load', onLoad);
      } else {
        const bg = getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none') {
          const src = bg.slice(4, -1).replace(/['"]/g, '');
          const img = new Image();
          img.onload = onLoad;
          img.onerror = onLoad;
          img.src = src;
        } else {
          onLoad();
        }
      }
    });
  });
};
