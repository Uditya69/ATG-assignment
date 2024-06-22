import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
function AuthCard() {
  return (
    <div className=" flex flex-col gap-2">
      <button className="flex flex-row border-gray-800 items-center justify-between w-full px-5 p-1 border rounded-md m-1">
        <FcGoogle size={23}/> <p>Continue with Google </p> <div></div>
      </button>

      <button className="flex flex-row border-gray-800 items-center justify-between w-full px-5 p-1 border rounded-md m-1">
        <BiLogoFacebookCircle size={23} color="blue" /> <p>Continue with Facebook </p>{" "}
        <div></div>
      </button>
    </div>
  );
}

export default AuthCard;
