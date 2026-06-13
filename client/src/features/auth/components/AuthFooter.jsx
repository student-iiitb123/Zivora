function AuthFooter() {
  return (
    <footer className="mt-12 text-center">
      <p className="font-label-md text-secondary">
        Don't have an account?{" "}
        <a
          className="text-primary font-bold hover:underline underline-offset-4 decoration-1"
          href="/register"
        >
          Register Now
        </a>
      </p>
    </footer>
  );
}

export default AuthFooter;