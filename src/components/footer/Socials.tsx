import {
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiPinterest,
  SiYoutube,
  SiTelegram,
  SiGmail,
  SiGoogle,
} from "react-icons/si";

function Socials() {
  return (
    <div className="flex flex-col gap-3">
      <p className=" font-semibold text-lg ">Social Media</p>
      <div className=" flex flex-row gap-3 items-center text-gray-500">
        {" "}
        <SiFacebook size={20} />
        <SiTwitter size={20}/>
        <SiInstagram size={20}/>
        <SiPinterest size={20}/>
        <SiGoogle size={20}/>
        <SiGmail size={20}/>
        <SiTelegram size={20}/>
        <SiYoutube size={20}/>
      </div>
    </div>
  );
}

export default Socials;
