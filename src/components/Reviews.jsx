const Reviews = () => {
  const reviews = [
    {
      name: "Piyush Goyal",
      role: "Turnkey Interiors Solution",
      comment:
        "I had the pleasure of working with Piyush Rai from ArchiLabs on a recent construction project and I must say, it was a truly professional experience.",
      rating: 4.5,
    },
    {
      name: "Rahul Sahni",
      role: "Turnkey Interiors Solution",
      comment:
        "I had the pleasure of working with Piyush Rai from ArchiLabs on a recent construction project and I must say, it was a truly professional experience.",
      rating: 4.5,
    },
    {
      name: "Roshan Jain",
      role: "Turnkey Interiors Solution",
      comment:
        "I had the pleasure of working with Piyush Rai from ArchiLabs on a recent construction project and I must say, it was a truly professional experience.",
      rating: 4.5,
    },
    {
      name: "Piya Shah",
      role: "Turnkey Interiors Solution",
      comment:
        "I had the pleasure of working with Piyush Rai from ArchiLabs on a recent construction project and I must say, it was a truly professional experience.",
      rating: 4.5,
    },
  ];

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-1 p-3">
          <span className="text-red-500 font-bold text-lg">113</span>
          <h3 className="text-gray-900 font-bold text-lg">Reviews and Ratings</h3>
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-red-500 font-semibold text-2xl">4.5</span>
          <svg
            className="w-6 h-6 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-1L12 2z"></path>
          </svg>
        </div>
        <p className="text-gray-600 text-sm">average rating</p>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md relative"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#2E3134] text-white font-bold rounded-full">
                  N
                </div>
                <h4 className="font-bold text-gray-800">{review.name}</h4>
                <div className="flex items-center text-red-500 w-[52px]">
                  <div className="bg-red-700 flex items-center  justify-center p-[2px] rounded-[9px]">
                    <svg
                      className="w-5 h-5 ml-1"
                      fill="white"
                      viewBox="0 0 24 24"
                      >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-1L12 2z"></path>
                    </svg>
                    <span className="text-sm flex p-[4px] rounded-md font-semibold text-white bg-red-700">{review.rating}
                    </span>
                  </div>
               </div>
                </div>
              </div>
              <p className="text-sm text-[#C53D3D] font-semibold mb-1">{review.role}</p>
              <p className="text-sm text-[#5F6368]">{`"${review.comment}"`}</p>
            </div>
        ))}
          </div>

      {/* See All Button */ }
          < div className = "text-center mt-4" >
          <button className="text-red-500 font-semibold text-sm hover:underline">
            See All
          </button>
      </div>
    </div>
  );
};

export default Reviews;
