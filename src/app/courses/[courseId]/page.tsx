"use client";
import { notFound } from "next/navigation";
import PageHeader from "@/ui/components/page-header";
import { courseData } from "@/data/courses";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, Calendar, Clock } from "lucide-react";
import ReadyToStart from "@/ui/components/ready-to-start";
import { useParams } from "next/navigation";
import { useCartStore } from "@/store/cart-store";
import { CartItemT } from "@/types";

export default function CourseDetail() {
  const params = useParams<{ courseId: string }>();
  const { addCartItem } = useCartStore((state) => state);

  if (!params?.courseId) {
    return notFound();
  }

  const course = courseData?.find((c) => c.id.toString() === params.courseId);

  if (!course) {
    return notFound();
  }

  function addItemToCart() {
    if (!course) {
      console.error("Cannot add to cart: Course not found");
      return;
    }
    const cartItem: CartItemT = {
      course: course,
      quantity: 1,
    };

    addCartItem(cartItem);
  }
  return (
    <div>
      <PageHeader />
      <div className="w-full flex justify-center py-8 px-4">
        <div className="w-full max-w-6xl bg-[#FFFFF7] rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Left column - Course details */}
            <div className="flex flex-col gap-8 border-b md:border-b-0 pb-8 md:pb-0">
              <figure className="w-full max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden">
                <Image
                  src={course.imageUrl || "/course1.png"}
                  alt={`${course.title} image`}
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </figure>

              <div className="flex flex-col gap-4">
                <h2 className="text-[#0F0F0F] text-2xl md:text-3xl lg:text-4xl font-extrabold">
                  {course.title}
                </h2>
                <p className="text-[#525252] text-base font-normal">
                  {course.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[#0F0F0F] text-xl md:text-2xl font-extrabold">
                  What you will learn:
                </h3>
                {course.whatYouWillLearn ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {course.whatYouWillLearn.map((item, index) => (
                      <li key={index} className="text-[#525252]">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#525252] text-base">
                    This course provides comprehensive training in German
                    language skills appropriate for the {course.level} level.
                  </p>
                )}
              </div>
            </div>

            {/* Right column - Pricing and schedule */}
            <div className="flex flex-col gap-6">
              {/* Price card */}
              <div className="grid grid-cols-1 gap-4 rounded-2xl bg-[#910F3F] p-6 place-items-center">
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                  €{course.price} EUR
                </h3>
                <p className="text-white text-sm mb-2">
                  Duration: {course.duration}
                </p>
                <Button
                  variant={"default"}
                  className="uppercase w-1/2 flex items-center justify-center gap-2 bg-[#FFFFF7] text-[#910F3F] hover:bg-[#F2EFDD] py-6"
                  onClick={addItemToCart}
                >
                  <ShoppingBasket />
                  <span>Add to cart</span>
                </Button>
              </div>

              {/* Schedule info */}
              <div className="border border-[#BBB8A2] rounded-lg p-6">
                <h6 className="uppercase text-[#910F3F] font-extrabold text-lg mb-3">
                  Schedule
                </h6>
                <p className="text-[#525252] mb-4">Classes are held on:</p>

                <div className="flex items-start gap-3 mb-4 pb-3 border-b border-[#BBB8A2]">
                  <Calendar className="text-[#910F3F] mt-1 flex-shrink-0" />
                  <span className="text-[#525252]">
                    {course?.schedule?.daysOfWeek.join(", ")}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-6 pb-3 border-b border-[#BBB8A2]">
                  <Clock className="text-[#910F3F] mt-1 flex-shrink-0" />
                  <span className="text-[#525252]">
                    {course?.schedule?.time}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <h6 className="uppercase text-[#910F3F] font-extrabold text-lg">
                    Course Duration
                  </h6>
                  <p className="text-[#525252] text-sm">
                    The course runs during the following periods in 2025:
                  </p>
                  <ul className="flex flex-col gap-2 mt-2">
                    {course?.schedule?.coursePeriod.map((period, index) => (
                      <li
                        key={index}
                        className="text-[#0F0F0F] text-sm pb-2 border-b border-[#BBB8A2]"
                      >
                        {period}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReadyToStart />
    </div>
  );
}
