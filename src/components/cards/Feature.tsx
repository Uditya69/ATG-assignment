import { IoPeopleOutline , IoLocationOutline, IoBagHandleOutline, IoCalendarOutline } from 'react-icons/io5';

type HoveredCard = 'card1' | 'card2' | 'card3' | 'card4' | null;


function Feature() {
  const [hoveredCard, setHoveredCard] = useState<HoveredCard>(null); // State to track hovered card id

  const handleMouseEnter = (cardId:HoveredCard) => {
    setHoveredCard(cardId); // Update state when mouse enters a card
  };

  const handleMouseLeave = () => {
    setHoveredCard(null); // Reset state when mouse leaves any card
  };
 

  return (
    <div>
      <div className="grid p-[10vh] grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <div
          id="card1"
          className={` flex flex-col gap-[3vh] p-4 rounded-md border ${hoveredCard === 'card1' ? 'bg-purple-600 text-white' : ''} transition-all duration-500 ease-in-out`}
          onMouseEnter={() => handleMouseEnter('card1')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row items-center gap-[3vw]">
            <IoPeopleOutline size={32} className={`${hoveredCard?"":"text-purple-600"}`}/>
            <p className="text-xl font-semibold"> People</p>
          </div>
          <div>
            <p className="text-sm">
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
          </div>
          <button className={`px-3 py-1 rounded-md border-[1.2px] border-purple-600 text-purple-600 w-fit ${hoveredCard === 'card1' ? 'border-white text-white' : ''} transition-all duration-500 ease-in-out`}>
            Add new
          </button>
        </div>

        <div
          id="card2"
          className={` flex flex-col gap-[3vh] p-4 rounded-md border ${hoveredCard === 'card2' ? 'bg-green-700 text-white' : ''} transition-all duration-500 ease-in-out`}
          onMouseEnter={() => handleMouseEnter('card2')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row items-center gap-[3vw]">
            <IoLocationOutline size={32} className={`${hoveredCard?"":"text-green-700"}`} />
            <p className="text-xl font-semibold"> Place</p>
          </div>
          <div>
            <p className="text-sm">
              Find a class, school, playground, auditorium, studio, shop
              or an event venue. Book a slot at venues that allow booking
              through hobbycue. Meet up
            </p>
          </div>
          <button className={`px-3 py-1 rounded-md border-[1.2px] border-purple-600 text-purple-600  w-fit ${hoveredCard === 'card2' ? 'border-white text-white' : ''} transition-all duration-500 ease-in-out`}>
            Add new
          </button>
        </div>

        <div
          id="card3"
          className={`flex flex-col gap-[3vh] p-4 rounded-md border ${hoveredCard === 'card3' ? 'bg-red-400 text-white' : ''} transition-all duration-500 ease-in-out`}
          onMouseEnter={() => handleMouseEnter('card3')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row items-center gap-[3vw]">
            <IoBagHandleOutline size={32} className={`${hoveredCard?"":"text-red-400"}`} />
            <p className="text-xl font-semibold"> Product</p>
          </div>
          <div>
            <p className="text-sm">
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </p>
          </div>
          <button className={`px-3 py-1 rounded-md border-[1.2px] border-purple-600 text-purple-600  w-fit ${hoveredCard === 'card3' ? 'border-white text-white' : ''} transition-all duration-500 ease-in-out`}>
            Add new
          </button>
        </div>

        <div
          id="card4"
          className={`flex flex-col gap-[3vh] p-4 rounded-md border ${hoveredCard === 'card4' ? 'bg-blue-500 text-white' : ''} transition-all duration-500 ease-in-out`}
          onMouseEnter={() => handleMouseEnter('card4')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row items-center gap-[3vw]">
            <IoCalendarOutline size={32} className={`${hoveredCard?"":"text-blue-500"}`} />
            <p className="text-xl font-semibold"> Program</p>
          </div>
          <div>
            <p className="text-sm">
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
          </div>
          <button className={`px-3 py-1 rounded-md border-[1.2px] border-purple-600 text-purple-600 w-fit ${hoveredCard === 'card4' ? 'border-white text-white' : ''} transition-all duration-500 ease-in-out`}>
            Add new
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
