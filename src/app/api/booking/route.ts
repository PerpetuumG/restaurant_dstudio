import { bookings } from '@/app/data/data';

export const GET = async () => {
  return Response.json(bookings);
};

export const POST = async (request: Request) => {
  const booking = await request.json();
  delete booking.validate;
  const newBooking = {
    id: booking.lenght + 1,
    details: booking,
  };
  booking.push(newBooking);

  return new Response(JSON.stringify(newBooking), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
  });
};
