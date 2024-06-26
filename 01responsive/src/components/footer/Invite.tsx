
function Invite() {
  return (
    <div className="flex flex-col m-auto gap-2">
      <p className=" font-semibold text-lg">Invite Friends</p>
      <div className="">
        <input
          className="outline-none border-[1.5px] px-2 py-1 border-purple-700 rounded-s-md"
          placeholder="Email"
        />
        <button className="bg-purple-700 text-white px-2 py-1 font-semibold border-[1.5px] border-purple-700 rounded-e-md">
          Send{" "}
        </button>
      </div>
    </div>
  );
}

export default Invite;
