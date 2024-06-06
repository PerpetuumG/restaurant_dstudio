import { menu } from '@/app/data/data';

export const GET = async (_request: Request, { params }: { params: { id: string } }) => {
  const food = menu.find((item: { id: number }) => item.id.toString() === params.id);
  return Response.json(food);
};
