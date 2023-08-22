import { FC } from "react";

const ContentBody: FC = () => {
    // Define the list items
    const items = [
        "One-piece wall sections composed of eco-friendly materials",
        "Solid insulation via two sheets of oriented strand board (OSB) that engulfs a rigid core of expanded polystyrene foam (EPS)",
        "Unmatched energy efficiency, drastically cutting down your expenses",
        "A commitment to green living through less waste and more recycling",
    ];

    return (
        <div className="container py-10 mx-auto p-32">
            <h2 className="text-3xl font-bold mb-4">
                Transforming the Way You Live with Our Services
            </h2>

            <p className="text-lg mb-4">
                Our promise is not just a home, but a lifestyle upgrade. We believe in changing the residential landscape with homes that cost less and offer more. Every AmeriPanel home comes with:
            </p>

            <ul className="list-disc pl-6 mb-4">
                {items.map((item, index) => (
                    <li key={index} className="text-lg"> {item} </li>
                ))}
            </ul>

            <p className="text-lg mb-8">
                Ready to redefine modern living? Get in touch with us and explore how we can reshape your homely experience.
            </p>

            <a className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-600 text-white text-lg" href="#" role="button">
                Contact Us
            </a>
        </div>
    );
};

export default ContentBody;