import { create } from "zustand";
import { User } from "@/types";
import secureLocalStorage from "react-secure-storage";

interface States {
  owner: User | null;
}

interface Actions {
  setUser: (user: User) => Promise<void>;
  getUser: () => User | null;
}

export const useUserStore = create<States & Actions>((set, get) => ({
  owner: null,

  setUser: async (user: User) => {
    if (user) {
      secureLocalStorage.setItem("user", JSON.stringify(user));
      set({ owner: user });
    }
  },

  getUser: () => {
    const storedUser = secureLocalStorage.getItem("user");
    if (typeof storedUser === "string") {
      try {
        return JSON.parse(storedUser) as User;
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
    return get().owner || null;
  },
}));
