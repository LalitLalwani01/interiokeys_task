
const Reviews = () => {
  // Array of reviews
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
    <div className="grid grid-cols-1 lg:grid-rows-4 gap-4 bg-white p-4 shadow-md rounded-md">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col gap-2"
        >
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg">{review.name}</h4>
            <div className="flex items-center text-red-500">
              <span className="text-lg font-bold">{review.rating}</span>
              <svg
                className="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-1L12 2z"></path>
              </svg>
            </div>
          </div>

          {/* Role */}
          <p className="text-sm text-gray-600">{review.role}</p>

          {/* Comment */}
          <p className="text-sm text-gray-800">{`"${review.comment}"`}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
