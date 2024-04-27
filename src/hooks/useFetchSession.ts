import { useEffect } from "react";
import { useSessionStore } from "@/store";

export const useFetchSession = () => {
  const { setSession } = useSessionStore()
  useEffect(() => {
    const keepSessionAlive = async () => {
      try {
        const response = await fetch(`http://localhost:3000/keep-alive`, {
          method: 'GET',
        });
        const { data } = await response.json();
        setSession({
          username: data.username ?? '',
          token: data.token ?? '',
          profile: data.profile ?? '',
        });
        console.log('Sessão mantida.', { data });
      } catch (error) {
        console.error('Erro ao manter sessão:', error);
      }
    };
    keepSessionAlive();
    const intervalId = setInterval(keepSessionAlive, 60 * 1000); // 1 minuto em milissegundos
    return () => clearInterval(intervalId);
  }, [setSession]);
};
