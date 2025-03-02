import PageHeader from "@/ui/components/page-header";

export default async function CoursesDetail({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const courseId = (await params).courseId;
  return (
    <div>
      <PageHeader />
      <div>Course ID: {courseId}</div>
    </div>
  );
}
