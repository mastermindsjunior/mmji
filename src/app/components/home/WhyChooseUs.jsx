import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-24 px-4 flex justify-center items-center">

      <div className="2xl:max-w-7xl max-w-6xl w-full relative">

        {/* glow */}
        <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-3xl -z-10" />

        <div className="bg-gradient-to-br from-[#d7ecff] to-[#b8dcff] border border-white/40 shadow-xl rounded-3xl p-10 md:p-14">

          {/* Header */}
          <div className="flex xl:flex-row flex-col justify-between items-center gap-6 mb-10">

            <h2 className="font-jost text-4xl md:text-5xl font-bold text-black">
              Why Choose Us?
            </h2>

            <p className="font-sftn text-gray-700 leading-relaxed xl:w-[55%] text-center xl:text-left">
              With a stronghold across India and growing global reach, we are the
              best digital marketing agency for startups and growing businesses.
              Clients choose us for:
            </p>

          </div>

          {/* Features */}
          <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

            {[
              "Personalized & strategic approach",
              "Creative solutions tailored to industry needs",
              "Transparent communication and reporting",
              "Proven results and ROI-focused mindset",
            ].map((item, i) => (
              <li
                key={i}
                className="group bg-slate-800 backdrop-blur border border-black rounded-xl px-5 py-4 text-xs text-center text-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="block font-medium group-hover:text-blue-200 transition">
                  {item}
                </span>
              </li>
            ))}

          </ul>

        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;
