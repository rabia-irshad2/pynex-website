'use client';

export default function CookiePreference() {
  function changePreference() {
    localStorage.removeItem('pynex-cookie-consent');
    window.dispatchEvent(new Event('pynex-cookie-preference-reset'));
    window.location.reload();
  }

  return (
    <button type="button" onClick={changePreference} className="btn-secondary mt-4">
      Change cookie preference
    </button>
  );
}
