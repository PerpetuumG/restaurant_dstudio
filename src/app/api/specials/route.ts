import { specials } from '@/app/data/data';

export const GET = async () => {
  return Response.json(specials);
};
