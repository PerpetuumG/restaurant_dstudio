import { testimonials } from '@/app/data/data';

export const GET = async () => {
  return Response.json(testimonials);
};
