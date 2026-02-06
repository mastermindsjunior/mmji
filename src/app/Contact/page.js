import { ArrowUpRight, LucideMapPin, MailIcon, PhoneIcon } from 'lucide-react'

const page = () => {
  return (
    <main>

      <section className="relative max-w-7xl mx-auto px-6 pt-56 pb-28">

        {/* background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[420px] bg-blue-500/30 rounded-b-full blur-3xl" />

        {/* BIG TITLE */}
        <h2 className="absolute top-28 left-1/2 -translate-x-1/2 font-jost font-bold text-[14vw] xl:text-8xl bg-gradient-to-b from-black/90 to-black/30 bg-clip-text text-transparent">
          CONTACT
        </h2>

        <div className="relative grid xl:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="space-y-10">

            <div>
              <h3 className="font-jost text-3xl mb-4">Get in Touch</h3>
              <p className="text-gray-700 max-w-md text-sm">
                Let’s connect and create something extraordinary. At MasterMinds Junior,
                we don’t just deliver services — we build partnerships.
              </p>
            </div>

            {/* INFO CARDS */}
            <div className="space-y-4">

              {[{
                title: 'Email us',
                value: 'admin@mastermindsjunior.com',
                icon: <MailIcon />
              },{
                title: 'Call us',
                value: '9999999999',
                icon: <PhoneIcon />
              },{
                title: 'Our Location',
                value: '1st Floor, Unit#105, Mansarovar, Jaipur, Rajasthan 302020',
                icon: <LucideMapPin />
              }].map((item, i) => (

                <div
                  key={i}
                  className="group bg-[#c1e2ff] rounded-xl px-6 py-5 flex items-center gap-4 hover:shadow-md transition"
                >

                  <div className="h-11 w-11 rounded-lg bg-white flex items-center justify-center text-black">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <p className="font-jost text-lg text-slate-800">{item.title}</p>
                    <p className="text-sm text-black/50">{item.value}</p>
                  </div>

                  <ArrowUpRight className="opacity-40 group-hover:opacity-100 transition" />

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#c1e2ff]/50 text-slate-900 rounded-2xl p-8">

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="w-full h-12 px-4 rounded-lg border border-primary-blue bg-white/40 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 px-4 rounded-lg border border-primary-blue bg-white/40 outline-none"
              />

              <textarea
                rows={6}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg border border-primary-blue bg-white/40 outline-none resize-none"
              />

              <button className="w-full h-12 bg-white rounded-lg font-medium hover:shadow transition">
                Submit
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default page
