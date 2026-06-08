function TermsAndPreferences() {
  return (
    <div className="space-y-5">
      {/* Terms */}

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="mt-1 w-4 h-4 accent-black"
        />

        <span className="text-sm text-black/70 leading-relaxed">
          I agree to the{" "}
          <a
            href="/terms"
            className="text-black font-medium hover:underline"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="text-black font-medium hover:underline"
          >
            Privacy Policy
          </a>
        </span>
      </label>

      {/* Marketing */}

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="mt-1 w-4 h-4 accent-black"
        />

        <span className="text-sm text-black/70 leading-relaxed">
          Send me exclusive offers, product launches,
          and member-only updates.
        </span>
      </label>
    </div>
  );
}

export default TermsAndPreferences;