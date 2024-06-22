import pic3 from "../../assets/pic3.svg";
import pic4 from "../../assets/pic4.svg";
function EndCard() {
  return (
    <div className=" flex flex-col gap-[5vh] p-5 items-center bg-sky-50">
      <div className=" flex flex-col gap-[3vh] self-start">
        <div className=" gap-1 text-2xl italic font-semibold">
          Your <span className="text-purple-600"> Hobby</span>, Your{" "}
          <span className="text-blue-600">Community...</span>
        </div>
        <button
          className="px-4 py-2 w-fit rounded-md bg-purple-600 text-white font-semibold
        "
        >
          Get Started
        </button>
      </div>
      <div className="flex flex-row ">
        <img src={pic3} className="w-[35vw]" alt="" />
        <img src={pic4} className="w-[35vw]" alt="" />
      </div>
    </div>
  );
}

export default EndCard;
