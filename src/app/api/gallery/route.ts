import { gallery } from '@/app/data/data';

export const GET = async () => {
  return Response.json(gallery);
};
