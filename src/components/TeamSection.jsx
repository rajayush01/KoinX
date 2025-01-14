import React from 'react';
import john from "../assets/john.png";
import Elina from "../assets/Elina.png";
import JohnS from "../assets/johnS.png";

const TeamMember = ({ name, designation, description, imageUrl }) => (
    <div className="bg-blue-50 flex sm:flex-row flex-col items-center gap-6 rounded-lg p-6">
        <div className="flex flex-col items-center sm:items-start">
            <img
                src={imageUrl || "/api/placeholder/100/100"}
                alt={name}
                className="w-24 h-24 rounded-lg object-cover mb-3"
            />
            <h3 className="text-lg font-medium text-center sm:text-left text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500 text-center sm:text-left">{designation}</p>
        </div>
        <div className="flex-1">
            <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
    </div>
);

const TeamSection = () => {
    const teamMembers = [
        {
            name: "John Smith",
            designation: "Designation here",
            description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
            imageUrl: john
        },
        {
            name: "Elina Williams",
            designation: "Designation here",
            description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
            imageUrl: Elina
        },
        {
            name: "John Smith",
            designation: "Designation here",
            description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
            imageUrl: JohnS
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">Team</h2>
            <p className="text-gray-700 mb-8">
                Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
            </p>
            <div className="flex flex-col gap-4">
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        {...member}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamSection;