import { auth, currentUser } from "@clerk/nextjs/server";
import { User } from "@/types";

export default async function getUser() {
  const { userId } = await auth();
  const user = await currentUser();

  const userData: User = {
    userId: userId,
    fullName: user?.fullName,
    email: user?.emailAddresses[0].emailAddress,
  };

  return userData;
}
