import autumnImg from "@/images/autumn.jpg";
import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

const page = ({ params }: { params: { id: string } }) => {

    return (
        <div>
            <h1 className="text-4xl">ID : {params.id}</h1>
            <section className="flex gap-x-4 mt-4">
                {/* local image */}
                <div>
                    <Image
                        src={autumnImg}
                        alt="maps"
                        priority
                        width={192}
                        height={192}
                        className="w-48 h-48 object-cover rounded"
                    />
                    <h2>local image</h2>
                </div>

                {/* remote image */}
                <div>
                    <Image
                        src={url}
                        alt="maps"
                        priority
                        width={192}//required for remote images
                        height={192}// * determines correct aspect ratio
                        className="w-48 h-48 object-cover rounded"
                    />
                    <h2>remote image</h2>
                </div>
            </section>

        </div>
    );
};
export default page;