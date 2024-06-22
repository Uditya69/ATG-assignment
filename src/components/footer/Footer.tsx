import{Hobbycue, HowDo, Invite, QuickLinks, Socials} from "./index"

function Footer() {
  return (
    <div className=" flex flex-col m-auto justify-center ">
      <div className=" flex p-[5vw] flex-col md:flex-row lg:flex-row m-auto text-sm w-full justify-between">
        <Hobbycue />

        <HowDo />

        <QuickLinks />
        <div className=" flex flex-col gap-2 items-start justify-between">
          <Socials />
          <Invite />
        </div>
      </div>
      <div className="bg-gray-100 h-[8vh] flex m-auto justify-center items-center text-lg font-semibold w-full">
      <a href="https://uditya.xyz" className="visited:text-black no-underline" target="_blank" >© Purple Cues Private Limited</a>


      </div>
    </div>
  );
}

export default Footer;
