function RememberMe() {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 accent-black"
        />

        <span className="text-sm text-black/70">
          Remember me
        </span>
      </label>

      <button
        type="button"
        className="text-sm text-black hover:underline"
      >
        Forgot password?
      </button>
    </div>
  );
}

export default RememberMe;