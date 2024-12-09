/* eslint-disable react/prop-types */
export function LanguageSelector({ mobile = false }) {
  return (
    <div className={`flex items-center gap-2 ${mobile ? "px-4 py-2" : ""}`}>
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png"
        alt="US Flag"
        className="h-4 w-5"
      />
      <span className="text-gray-600">United States - EN</span>
    </div>
  );
}
