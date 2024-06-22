
function ScrollTop() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
      return (
        <button
        onClick={scrollToTop}
        className=" fixed bottom-4 right-4 text-purple-600 hover:text-white hover:bg-purple-600 font-bold py-2 px-2 rounded-full shadow-md transition duration-500 ease-in-out"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      );
}

export default ScrollTop