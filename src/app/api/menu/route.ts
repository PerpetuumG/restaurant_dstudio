import { menu } from '../../data/data';

export const GET = async () => {
  return Response.json(menu);
};
