//app/components/CookiePreference.tsx
'use client';

export default function CookiePreference() {
  function changePreference() {
    localStorage.removeItem('pynex-cookie-consent');
    window.dispatchEvent(new Event('pynex-cookie-consent-changed'));
    window.location.reload();
  }

  return (
    <button
      type="button"
      onClick={changePreference}
      className="btn-secondary mt-4"
    >
      Change cookie preference
    </button>
  );
}