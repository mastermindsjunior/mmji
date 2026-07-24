import { notFound } from 'next/navigation';
import ServiceDetail from '../../components/services/ServiceDetail';
import { getAllServiceSlugs, getServiceBySlug } from '../../data/services';

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: 'Service Not Found' };
  }
  return {
    title: `${service.title} | MasterMinds Junior`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
