// Save and restore locale preference
(function () {
  const LOCALE_STORAGE_KEY = 'docusaurus.locale';

  // Save current locale to localStorage
  function saveLocale() {
    const currentPath = window.location.pathname;
    let locale = 'be'; // default

    if (currentPath.startsWith('/en/') || currentPath === '/en') {
      locale = 'en';
    }

    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }

  // Save locale on page load
  if (typeof window !== 'undefined') {
    saveLocale();

    // Save locale on navigation
    const originalPushState = history.pushState;
    history.pushState = function () {
      originalPushState.apply(this, arguments);
      saveLocale();
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function () {
      originalReplaceState.apply(this, arguments);
      saveLocale();
    };
  }
})();
