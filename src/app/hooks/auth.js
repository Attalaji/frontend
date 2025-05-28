'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useAuthMiddleware(redirectTo='/Login') {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        if (!token) {
            router.push(redirectTo);
        } else {
            setAuthenticated(true);
        }
    }, [router]); // ✅ Re-run if token changes

    return authenticated; // ✅ Return auth status for conditional rendering
}
