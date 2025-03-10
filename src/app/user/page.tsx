import { auth, currentUser } from "@clerk/nextjs/server";
import { User } from "@/types";

export default async function Userpage() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return <div>Sign in to view this page</div>;
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  console.log(user);
  const userData: User = {
    userId: userId,
    fullName: user?.fullName,
    email: user?.emailAddresses[0].emailAddress,
  };
  console.log(userData);

  // Use `user` to render user details or create UI elements
  return <div>Welcome, {user?.firstName}!</div>;
}
