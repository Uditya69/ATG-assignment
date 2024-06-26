
function Signup() {
  return (
    <div className="w-full p-4">
      <form className="flex flex-col gap-3 w-full items-center">
        <div className="bg-white w-full p-1 pl-3 rounded-md">
          <input
            className="bg-transparent outline-none w-full"
            placeholder="Email"
            type="email"
          />
        </div>

        <div className="bg-white w-full p-1 pl-3 rounded-md">
          <input
            className="bg-transparent outline-none w-full"
            placeholder="Password"
            type="password"
          />
        </div>

        <div className="flex items-center gap-1">
          <input type="checkbox" name="agree" id="agree" />
          <label htmlFor="agree" className="text-gray-500 text-xs ml-1">
            By Continuing you agree to our{" "}
            <span className="text-gray-900">Terms of service</span> and{" "}
            <span className="text-gray-900">Privacy Policy</span>
          </label>
        </div>

        <button className="w-full bg-purple-600 text-white font-semibold px-5 py-1 rounded-md mt-2">
          Agree and continue
        </button>
      </form>
    </div>
  );
}

export default Signup;
