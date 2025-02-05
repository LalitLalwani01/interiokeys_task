import image1 from "../../assets/images/image copy 1.png";
import image2 from "../../assets/images/image copy 2.png";
import image3 from "../../assets/images/image copy 3.png";
import image4 from "../../assets/images/image copy 4.png";
import image5 from "../../assets/images/image copy 5.png";
import image6 from "../../assets/images/image copy 6.png";


const Inspirations = () => {
    const projects = [
        {
            title: "Jewel of India/Suncity Builders",
            location: "Vaishali Nagar, Jaipur, India",
            layouts: "Layouts: 3BHK (1380Sft), 4BHK (1500Sft)",
            image: {image1}, 
        },
        {
            title: "La Lagune/Suncity Builders",
            location: "Vaishali Nagar, Jaipur, India",
            layouts: 'Layouts: 3BHK (1380Sft), 4BHK (1500Sft)',
            image: {image2}, 
        },
        {
            title: "Suncity Avenue/Suncity Builders",
            location: "Vaishali Nagar, Jaipur, India",
            layouts: 'Layouts: 3BHK (1380Sft), 4BHK (1500Sft)',
            image: {image3}, 
        },
        {
            title: "Suncity Avenue 76/Suncity Builders",
            location: "Vaishali Nagar, Jaipur, India",
            layouts: 'Layouts: 3BHK (1380Sft), 4BHK (1500Sft)',
            image: {image4}, 
        },
        {
            title: "Platinum Towers/Suncity Builders",
            location: "Vaishali Nagar, Jaipur, India",
            layouts: "Layouts: 3BHK (1380Sft), 4BHK (1500Sft)",
            image: {image5},
        },
        {
            title: "Vatsal Valley/Suncity Builders",
            location: "Vaishali Nagar, Jaipur, India",
            layouts: 'Layouts: 3BHK (1380Sft), 4BHK (1500Sft)',
            image: {image6},
        }
    ];

    return (
        <div className="container mx-auto py-6 px-4 lg:px-8">
            <div>
                <h2 className="text-xl font-bold mb-4">Inspirations Created (15)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-gray-800">{project.title}</h3>
                                <p className="text-sm text-gray-600">{project.location}</p>
                                <p className="text-sm text-gray-600">{project.layouts}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Inspirations;
