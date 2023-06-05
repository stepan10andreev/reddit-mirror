import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    // if (!(user || loading)) {
      router.push('/');
    // }
  }, []);

  return (
    <p>Redirecting...</p>
  )
}
