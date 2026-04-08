import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Mientras Firebase dice si hay sesión o no, se muestra una carga vacía
  if (loading) return <div className="p-10 text-center font-bold text-gray-400">Loading...</div>;

  // Si no hay usuario, redirigir al login
  if (!user) {
    return <Navigate to="/login?message=auth_required" />;
  }

  // Si hay usuario, se permite ver el contenido (children)
  return children;
}