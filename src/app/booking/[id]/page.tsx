import BookingDetails from "@/components/Bookings";

 
interface PageProps {
    params: Promise<{ id: string }>;
  } 
   const Page = async ({ params }: PageProps) => {
    const { id } = await params;
  
    return <div>
        <BookingDetails id={id} />
    </div>;
  };
  
  export default Page;