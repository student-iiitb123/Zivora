function SignInRedirect() {
  return (
    <div className="text-center mt-10">
      <p className="text-black/60 text-sm">
        Already have an account?
      </p>

      <a
        href="/login"
        className="
          inline-block
          mt-2
          text-black
          font-medium
          uppercase
          tracking-[3px]
          hover:underline
          underline-offset-4
        "
      >
        Sign In
      </a>
    </div>
  );
}

export default SignInRedirect;