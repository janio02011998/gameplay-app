import React, { createContext, ReactNode, useContext, useState } from "react";
import * as AuthSession from "expo-auth-session";

import {
  CLIENT_ID,
  CND_IMAGE,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from "configs";
import { api } from "services/api";

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthrizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
    error?: string;
  };
};

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState<boolean>(false);

  async function signIn() {
    try {
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      setLoading(true);
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthrizationResponse;

      if (type === "success" && !params.error) {
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${params.access_token}`;

        const userInfo: any = await api.get("/users/@me");

        const firstName = userInfo.data.username.split(" ")[0];
        userInfo.data.avatar = `${CND_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token,
        });
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch {
      throw new Error("Não foi possível autenticar!");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
