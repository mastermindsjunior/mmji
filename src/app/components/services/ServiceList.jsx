import Link from 'next/link';
import { services } from '../../data/services';

const row1Slugs = ['social-media-marketing', 'seo-optimization', 'web-development'];
const row2Slugs = ['branding', 'app-development'];
const row3Slugs = ['graphic-logo-designing', 'content-writing', 'google-meta-ads'];

function bySlug(slug) {
  return services.find((s) => s.slug === slug);
}

const servicesRow1 = row1Slugs.map(bySlug);
const servicesRow2 = row2Slugs.map(bySlug);
const servicesRow3 = row3Slugs.map(bySlug);

function ServiceCard({ service, index }) {
  const number = service.num.toString().padStart(2, '0');

  return (
    <div
      className="group flex flex-col rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
    >
      <div className="flex items-center p-6">
        <h3 className="xl:text-3xl text-2xl font-jost font-semibold text-sec">
          {service.title}
        </h3>
        <span
          className="ml-auto xl:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-sec to-white"
        >
          {number}
        </span>
      </div>

      <div className="px-6 flex-1 flex flex-col">
        <h4 className="xl:text-lg text-base font-jost font-medium text-white">
          {service.heading}
        </h4>
        <p className="mt-4 flex-1 text-grey-200 font-sfth">
          {service.description}
        </p>
        <Link
          href={`/Services/${service.slug}`}
          className={`my-4 mt-6 inline-flex justify-center items-center ${index % 2 === 1 ? ' text-black' : ' text-black'} bg-white rounded-full w-full py-2 px-4 font-medium text-center font-jost hover:bg-sec transition-colors`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default function ServiceList() {
  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {servicesRow1.map((svc, i) => (
            <ServiceCard key={svc.slug} service={svc} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
          {servicesRow2.map((svc, i) => (
            <ServiceCard key={svc.slug} service={svc} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          {servicesRow3.map((svc, i) => (
            <ServiceCard key={svc.slug} service={svc} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
