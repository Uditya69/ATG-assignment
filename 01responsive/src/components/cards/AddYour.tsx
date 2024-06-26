import plus from "../../assets/plus.svg";
function AddYour() {
  return (
    <div className="bg-sky-50 p-[10vh]">
      <div className=" bg-white flex flex-col gap-[3vh] p-4 rounded-md border">
        <div className=" flex flex-row items-center  gap-[3vw]">
          <img src={plus} alt="" />
          <p className=" text-xl font-semibold"> Add your own</p>
        </div>
        <div>
          <p className="text-sm">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
        </div>
        <button className=" px-3 py-1 rounded-md border-[1.2px] border-purple-600 text-purple-600 w-fit">
          {" "}
          Add new
        </button>
      </div>
    </div>
  );
}

export default AddYour;
