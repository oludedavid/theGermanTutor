import { notFound } from "next/navigation";
import PageHeader from "@/ui/components/page-header";
import { courseData } from "@/ui/components/courses-section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, Calendar, Clock } from "lucide-react";
import ReadyToStart from "@/ui/components/ready-to-start";

export default async function CourseDetail({
  params,
}: {
  params: { courseId: string };
}) {
  const courseId = params.courseId;
  const course = courseData.find((c) => c.id.toString() === courseId);
  if (!course) {
    notFound();
  }

  // Find related courses (same level or adjacent levels)
  const relatedCourses = courseData
    .filter(
      (c) =>
        c.id !== course.id &&
        (c.level === course.level ||
          (course.level.includes("-")
            ? c.level.includes(course.level.split("-")[0])
            : false))
    )
    .slice(0, 3);

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

          {/* Related courses */}
          {relatedCourses.length > 0 && (
            <div className="p-6 mt-4 border-t border-[#BBB8A2]">
              <h3 className="text-[#0F0F0F] text-xl md:text-2xl font-extrabold mb-6">
                Related Courses
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCourses.map((relatedCourse) => (
                  <div
                    key={relatedCourse.id}
                    className="border border-[#BBB8A2] rounded-lg p-4 flex flex-col gap-3 hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={relatedCourse.imageUrl || "/course1.png"}
                      alt={relatedCourse.title}
                      width={200}
                      height={120}
                      className="w-full h-36 object-cover rounded-md"
                    />
                    <h4 className="font-bold text-lg">{relatedCourse.title}</h4>
                    <p className="text-[#525252] text-sm line-clamp-2">
                      {relatedCourse.description}
                    </p>
                    <div className="flex justify-between mt-auto pt-3">
                      <span className="text-[#910F3F] font-bold">
                        €{relatedCourse.price}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#910F3F] text-[#910F3F] hover:bg-[#910F3F] hover:text-white"
                        onClick={() =>
                          (window.location.href = `/courses/${relatedCourse.id}`)
                        }
                      >
                        View Course
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <ReadyToStart />
    </div>
  );
}
