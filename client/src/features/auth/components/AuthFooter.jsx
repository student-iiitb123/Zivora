import { Link } from "react-router-dom";

function AuthFooter() {
  return (
    <footer className="mt-12 text-center">
      <p className="font-label-md text-secondary">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-primary font-bold hover:underline underline-offset-4 decoration-1"
        >
          Register Now
        </Link>
      </p>
    </footer>
  );
}

export default AuthFooter;