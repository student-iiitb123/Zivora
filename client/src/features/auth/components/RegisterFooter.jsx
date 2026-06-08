function RegisterFooter() {
  return (
    <footer className="mt-24 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <h3 className="text-xl font-semibold tracking-tight">
          ZIVORA
        </h3>

        <div className="flex items-center gap-8 text-sm uppercase tracking-[2px] text-black/50">
          <a
            href="/privacy"
            className="hover:text-black transition-colors"
          >
            Privacy
          </a>

          <a
            href="/terms"
            className="hover:text-black transition-colors"
          >
            Terms
          </a>

          <a
            href="/contact"
            className="hover:text-black transition-colors"
          >
            Contact
          </a>
        </div>

        <p className="text-sm text-black/40">
          © 2026 ZIVORA. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default RegisterFooter;