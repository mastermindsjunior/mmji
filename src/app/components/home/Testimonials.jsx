import React from "react";
import { Quote, Star } from "lucide-react";

const data = [
  {
    content:
      "The social media management has been handled very professionally and consistently. We are seeing great benefits from the marketing efforts, with a significant increase in enquiries and walk-in customers. Our followers have also grown, and most importantly, we have seen a positive increase in sales. Overall, we are very satisfied with the results and the service.",
    name: "",
    designation: "",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-20 text-black font-sfth">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative 2xl:max-w-7xl max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="font-jost md:text-5xl text-3xl font-bold mb-3 bg-gradient-to-r from-primary via-text-primary-dark to-primary bg-clip-text text-transparent">
            What Our Clients Say
          </h3>

          <p className="text-lg text-gray-600 font-sfth">
            Trusted by businesses, loved by clients
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((testimonial, index) => {
            const clientName = testimonial.name?.trim()
              ? testimonial.name
              : "Valued client";

            return (
              <div
                key={index}
                className="group col-span-3 relative bg-white/80 backdrop-blur-sm p-7 rounded-2xl shadow hover:shadow-2xl shadow-primary/20 hover:scale-[1.02] hover:-translate-y-1 ease-out duration-300 transition-all border border-gray-100/50 overflow-hidden flex flex-col"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-purple-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100/60 to-transparent rounded-bl-[4rem] opacity-70" />

                {/* Quote icon */}
                <div className="relative flex items-center justify-between mb-6">
                  <div className="p-3.5 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial content */}
                <div className="relative flex-1">
                  <p className="font-sfth text-gray-600 2xl:text-base text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Client information */}
                <div className="relative mt-7 pt-5 border-t border-gray-100 flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md">
                    <span className="font-jost font-bold text-white text-sm">
                      {clientName.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-jost font-bold text-gray-900 text-base">
                      {clientName}
                    </h4>

                    {testimonial.designation && (
                      <p className="font-sfth text-gray-500 text-sm">
                        {testimonial.designation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;