import { whyUs } from '@/app/data/data';

export const GET = async () => {
  return Response.json(whyUs);
};
