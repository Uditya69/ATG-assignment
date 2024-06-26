import quoutes from "../../assets/quotes.svg";
import audio from "../../assets/audiotrack.svg";
import dancer from "../../assets/dancer.svg";
function Testimonial() {
  return (
    <div className="p-[10vh]">
      <div className="p-5 flex flex-col items-center gap-5 bg-purple-50 rounded-md">
        <div className="flex flex-row items-center gap-2 text-xl font-semibold lg:self-start md:self-start">
          <img src={quoutes} alt="" />
          <p>Testimonials</p>
        </div>
        <div>
          <p className="font-light">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
        </div>
        <div
          id="audio and namecard"
          className="flex flex-col-reverse items-center gap-[5vw] lg:flex-row"
        >
          <img src={audio} className="w-[63vw] h-[10vh]" alt="" />
          <div className=" flex flex-row items-center gap-[2vw]">
            <img src={dancer} alt="" className="h-[8vh]" />
            <div>
              <p className="font-semibold text-violet-700">Shubha Nagaranjan</p>
              <p className="text-xs text-blue-500">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
