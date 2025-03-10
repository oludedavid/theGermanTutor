export type FormEvent = React.FormEvent<HTMLFormElement>;
export type MouseEvent = React.MouseEvent<HTMLButtonElement>;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type User = {
  userId: string | null | undefined;
  fullName: string | null | undefined;
  email: string | null | undefined;
};
export type CourseDataT = {
  id: string;
  title: string;
  description: string;
  level: string;
  price: number;
  imageUrl?: string;
  numberOfStudents?: number;
  duration: string;
  whatYouWillLearn?: string[];
  schedule?: {
    daysOfWeek: string[];
    time: string;
    coursePeriod: string[];
  };
};

export type DeliveryInfoT = {
  fullname: string;
  phoneNumber: string;
  email: string;
  streetAddress: string;
  streetAddress2?: string;
  city: string;
  country: string;
  apartment?: string;
  stateOrProvinceOrRegion: string;
  postcode: string;
};

export type PaymentMethodT = {
  paymentMethod: "paypal" | "flutterwave" | "paystack";
};

export type AcceptConditionT = boolean;

export type CartItemT = {
  course: CourseDataT;
  quantity: number;
};

export type CartT = {
  owner: User;
  ownerItems: CartItemT[];
  deliveryInfo: DeliveryInfoT;
  paymentMethod: PaymentMethodT;
  acceptCondition: AcceptConditionT;
};

export type OrderT = CartT & {
  totalPrice: number;
  createdAt?: Date;
  orderId?: string;
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
