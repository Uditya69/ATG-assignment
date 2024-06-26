import { MdLock } from "react-icons/md";

function Login() {
  return (
    <div className="w-full p-4">
      <form className="flex flex-col gap-3 w-full items-center">
        <div className="bg-white p-1 pl-3 rounded-md w-full">
          <input
            className="bg-transparent outline-none w-full"
            placeholder="Email"
            type="email"
          />
        </div>

        <div className="bg-white p-1 pl-3 rounded-md w-full">
          <input
            className="bg-transparent outline-none w-full"
            placeholder="Password"
            type="password"
          />
        </div>

        <div className="flex flex-row gap-3 w-full justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className="ml-1">
              Remember me
            </label>
          </div>
          <div className="flex items-center gap-2">
            <MdLock />
            <p>Forgot Password?</p>
          </div>
        </div>

        <button className="border w-full py-2 rounded-md hover:bg-violet-600 hover:text-white transition duration-500 ease-in-out">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Login;
