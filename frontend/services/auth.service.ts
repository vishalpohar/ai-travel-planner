import api from "@/lib/axios";
import { LoginPayload, RegisterPayload } from "@/types/auth";

export const authService = {
  login: async (payload: LoginPayload) => {
    console.log(payload);
    const response = await api.post("/auth/login", payload);

    return response.data;
  },

  register: async (payload: RegisterPayload) => {
    const response = await api.post("/auth/register", payload);

    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get("/auth/me");

    return response.data;
  },
};
