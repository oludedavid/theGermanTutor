export type CourseDataT = {
  id: number;
  title: string;
  description: string;
  level: string;
  price: number;
  imageUrl?: string;
  duration: string;
  whatYouWillLearn?: string[];
  schedule?: {
    daysOfWeek: string[];
    time: string;
    coursePeriod: string[];
  };
};

export type CompetenceProps = {
  image: string;
  title: string;
  discription: string;
};

export type HeroCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export type PageHeaderProps = {
  customHeading?: string;
};

export type CourseCardProps = {
  course: CourseDataT;
};

export type CourseSectionProps = {
  bgColor: string;
};

export type LogoProps = {
  width: number;
  height: number;
};
