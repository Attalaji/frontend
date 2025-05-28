'use client'
import { createContext, useContext, useEffect, useState } from "react";
import axios from '../utils/axios';
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            try {
                const token = localStorage.getItem('auth-token');
                if (!token) {
                    setLoading(false);
                    return;
                }

                const response = await axios.get('/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(response.data);
            } catch (error) {
                console.error("Failed to fetch user:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    const login = async (form) => {
        try {
            const response = await axios.post('/login', form, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
    
            localStorage.setItem('auth-token', response.data.token); // ✅ Correct key
            setUser(response.data.user);
            router.push('/UserDashboard/Reservasi');
        } catch (error) {
            console.log("Login error:", error.response?.data);
            alert(error.response?.data?.message || "Login failed");
        }
    };

    const logout = async () => {
        try {
            const token = localStorage.getItem('auth-token');
            if (!token) return;

            await axios.post('/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            localStorage.removeItem('auth-token');
            setUser(null);
            router.push('/login');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
