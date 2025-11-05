

// import React from "react";
// import { FaStar, } from "react-icons/fa";
// import Title from "../../../UI/Title";
// import Para from "../../../UI/Para";
// const testimonials = [
//   {
//     id: 1,
//     name: "Max Kabanuk",
//     company: "Evolving Sanctuary",
//     testimonial:
//       "It was so easy working with you! I appreciated the speed and attention to detail with the assets I needed. Especially, on short notice. The work went smoothly and I feel taken care of.",
//     rating: 5,
//     color: "bg-blue-100",
//     avatar: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   },
//   {
//     id: 2,
//     name: "Sarah Taylor",
//     company: "Huneebee Project",
//     testimonial:
//       "I'm very grateful to have learned so much about design and its impact on businesses. I'm looking forward to building the Huneebee Project brand with your expertise by my side.",
//     rating: 5,
//     color: "bg-yellow-100",
//     avatar: "https://media.istockphoto.com/id/1437047112/photo/volunteer-friends-gardening-at-sunset-taking-a-selfie.jpg?s=612x612&w=0&k=20&c=0Qp1W9TjUH_iVgGJOoyELBDIzmrwtIbe22x8xdBwV9M=",
//   },
//   {
//     id: 3,
//     name: "Ben Chaffee",
//     company: "EngineeredFitness",
//     testimonial:
//       "We were happy and impressed by the website! We love how it looks and how it’s worked for the business. Zahr made sure to understand our needs and then execute what we needed.",
//     rating: 4,
//     color: "bg-rose-100",
//     avatar: "https://spratx.com/wp-content/uploads/2018/01/Testimonial-Man-147986_500x675.jpg",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="text-center mb-12">
//         <Title  title=" Reviews that speak volumes." />
//         <Para  title=" Don’t just take our word for it, hear what people have to say about us."/>
//         <p >
//         </p>
//       </div>
//       <div className="flex  gap-5  px-4">
//         {testimonials.map((item) => (
//           <div
//             key={item.id}
//             className={`w-96  h-96 p-6 rounded-lg shadow-md  hover:text-shadow-amber-100  transition-all  ${item.color}`}
//           >
//             <p className="text-gray-800 italic mb-4">“{item.testimonial}”</p>
//             <div className="flex text-yellow-500 mb-2">
//               {[...Array(item.rating)].map((_, i) => (
//                 <FaStar key={i} />
//               ))}
//             </div>
//             <div className="flex items-center gap-3">
//               <img
//                 src={item.avatar}
//                 alt={item.name}
//                 className="w-16 h-16 rounded-full object-cover"
//               />
//               <div>
//                 <p className="font-semibold">{item.name}</p>
//                 <p className="text-sm text-gray-600">{item.company}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
// export default Testimonials;
import React from "react";
import { FaStar } from "react-icons/fa";
import Title from "../../../UI/Title";
import Para from "../../../UI/Para";

const testimonials = [
  {
    id: 1,
    name: "Max Kabanuk",
    company: "Evolving Sanctuary",
    testimonial:
      "It was so easy working with you! I appreciated the speed and attention to detail with the assets I needed. Especially, on short notice. The work went smoothly and I feel taken care of.",
    rating: 5,
    color: "bg-blue-100",
    avatar:
      "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    name: "Sarah Taylor",
    company: "Huneebee Project",
    testimonial:
      "I'm very grateful to have learned so much about design and its impact on businesses. I'm looking forward to building the Huneebee Project brand with your expertise by my side.",
    rating: 5,
    color: "bg-yellow-100",
    avatar:
      "https://media.istockphoto.com/id/1437047112/photo/volunteer-friends-gardening-at-sunset-taking-a-selfie.jpg?s=612x612&w=0&k=20&c=0Qp1W9TjUH_iVgGJOoyELBDIzmrwtIbe22x8xdBwV9M=",
  },
  {
    id: 3,
    name: "Ben Chaffee",
    company: "EngineeredFitness",
    testimonial:
      "We were happy and impressed by the website! We love how it looks and how it’s worked for the business. Zahr made sure to understand our needs and then execute what we needed.",
    rating: 4,
    color: "bg-rose-100",
    avatar:
      "https://spratx.com/wp-content/uploads/2018/01/Testimonial-Man-147986_500x675.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-12">
        <Title title="Reviews that speak volumes." />
        <Para title="Don’t just take our word for it, hear what people have to say about us." />
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`w-full sm:w-80 md:w-96 p-6 rounded-lg shadow-md transition-all ${item.color}`}
          >
            <p className="text-gray-800 italic mb-4 leading-relaxed">
              “{item.testimonial}”
            </p>

            <div className="flex text-yellow-500 mb-3">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
