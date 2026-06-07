function SocialButton({ provider }) {
  return (
    <button
      type="button"
      className="h-12 border border-black/10 rounded-lg flex items-center justify-center uppercase text-xs tracking-[3px] hover:border-black hover:bg-black hover:text-white transition-all duration-300"
    >
      {provider}
    </button>
  );
}

export default SocialButton;