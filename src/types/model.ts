/* eslint-disable @typescript-eslint/no-explicit-any */

export type TUser = {
  user_id: string;
  fullName: string;
  email: string;
  password: string;
  role: "Student" | "Teacher" | "Admin";
  is_approved?: boolean;
  is_email_verified: boolean;
  created_at: Date;
  updated_at: Date;
};

export type TCourse = {
  course_id: string;
  title: string;
  description: string[];
  category: string;
  price: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
};

export type TCourseSession = {
  course_session_id: string;
  course_id: string;
  teacher_id: string;
  start_date: Date;
  end_date: Date;
  max_capacity: number;
  current_enrollment: number;
  status: "open" | "closed" | "ongoing" | "completed" | "cancelled";
  created_at: Date;
  updated_at: Date;
};

export type TCart = {
  cart_id: string;
  student_id: string;
  status?: "Active" | "Ordered" | "Cancelled";
  created_at: Date;
  updated_at: Date;
};

export type TCartItem = {
  cart_item_id: string;
  cart_id: string;
  course_session_id: string;
  price: number;
  added_at: Date;
};

export type TOrder = {
  order_id: string;
  student_id: string;
  cart_id?: string;
  total_amount: number;
  status: "Pending" | "Paid" | "Cancelled";
  payment_id?: string;
  order_date: Date;
  created_at: Date;
};

export type TOrderItem = {
  order_item_id: string;
  order_id: string;
  course_session_id: string;
  price: number;
};

export type TPayment = {
  payment_id: string;
  order_id: string;
  amount: number;
  payment_method: string;
  transaction_id: string;
  status: "Pending" | "Completed" | "Failed" | "Refunded";
  payment_date: Date;
  created_at: Date;
};

export type TTeacherEarning = {
  earning_id: string;
  teacher_id: string;
  course_session_id: string;
  total_students: number;
  total_amount: number;
  status: "Pending" | "Paid";
  payout_date?: Date;
  created_at: Date;
  updated_at: Date;
};

export type TEnrollment = {
  enrollment_id: string;
  student_id: string;
  course_session_id: string;
  enrollment_date: Date;
  status: "Active" | "Completed" | "Cancelled";
};

export type TDashboard = {
  dashboard_id: string;
  user_id: string;
  settings: Record<string, any>;
  created_at: Date;
  updated_at: Date;
};

export type TAttendance = {
  attendance_id: string;
  course_session_id: string;
  student_id: string;
  date: Date;
  is_present: boolean;
  recorded_at: Date;
};

export type TTeacherAttendance = {
  teacher_attendance_id: string;
  teacher_id: string;
  course_session_id: string;
  date: Date;
  is_present: boolean;
  recorded_at: Date;
};

export type TCertificate = {
  certificate_id: string;
  student_id: string;
  course_session_id: string;
  issued_date: Date;
  certificate_url: string;
};
