function WishlistFooter() {
  return (
    <footer className="py-16 border-t">
      <div className="flex flex-col items-center gap-8 px-5">
        <h3 className="text-3xl font-bold">
          ZIVORA
        </h3>

        <div className="flex flex-wrap gap-6">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF SERVICE</a>
          <a href="#">SHIPPING & RETURNS</a>
          <a href="#">CONTACT</a>
        </div>

        <p className="text-xs text-black/50 tracking-[3px]">
          © 2024 ZIVORA
        </p>
      </div>
    </footer>
  );
}

export default WishlistFooter;