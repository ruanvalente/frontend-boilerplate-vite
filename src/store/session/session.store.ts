import { create } from "zustand";

type State = {
  username: string
  token: string
  profile: string
};

type Action = {
  setSession: (session: State) => void;
};

export const useSessionStore = create<State & Action>((set) => ({
  username: '',
  token: '',
  profile: '',
  setSession: (session) => set(() => ({
    username: session.username,
    token: session.token,
    profile: session.profile,
  })),
}));
