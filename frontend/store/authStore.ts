import { create } from "zustand";
import { persist } from "zustand/middleware";
import { showSuccess } from "@/lib/toast";

import { authService } from "@/services/auth.service";
import { User } from "@/types/auth";

interface AuthStore {
  user: User | null;
  token: string | null;

  loading: boolean;
  initialized: boolean;

  login: (email: string, password: string) => Promise<void>;

  register: (name: string, email: string, password: string) => Promise<void>;

  logout: () => void;

  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      loading: false,
      initialized: false,

      login: async (email, password) => {
        set({ loading: true });
        try {
          const data = await authService.login({ email, password });
          set({ user: data.user, token: data.token });
        } catch (error: any) {
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      register: async (name, email, password) => {
        set({ loading: true });
        try {
          const data = await authService.register({ name, email, password });
          showSuccess(data.message || "Registerd successfully");
        } catch (error: any) {
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      logout: () => {
        set({ user: null, token: null });
        showSuccess("Logged out successfully");
      },

      initialize: async () => {
        const token = get().token;

        if (!token) {
          set({ initialized: true });

          return;
        }

        try {
          const data = await authService.getCurrentUser();

          set({ user: data.user });
        } catch (error) {
          console.log(error);
        } finally {
          set({ initialized: true });
        }
      },
    }),
    { name: "auth-storage" },
  ),
);
