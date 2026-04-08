import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error.code);
      if (error.code === 'auth/invalid-credential') {
        alert("Invalid email or password.");
      } else {
        alert("Error: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Google login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-6 pb-10 bg-white rounded-[2.5rem] shadow-2xl p-10 border border-gray-100">
      <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6 border-b pb-2">
        Log In
      </h4>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo correo */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Email Address</label>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3 focus-within:border-pokemon-red transition-colors">
            <input
              type="email"
              placeholder="trainer@pokeapp.com"
              className="bg-transparent w-full outline-none text-sm text-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
        </div>

        {/* Campo comtraseña */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Password</label>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3 focus-within:border-pokemon-red transition-colors">
            <input
              type="password"
              placeholder="••••••••"
              className="bg-transparent w-full outline-none text-sm text-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Remember Me Y Forgot Password */}
        <div className="flex items-center justify-between px-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 accent-pokemon-red cursor-pointer"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="text-xs font-bold text-gray-500">Remember me</span>
          </label>
          
          <button 
            type="button" 
            className="text-xs font-bold text-pokemon-red hover:underline"
            onClick={() => alert("Redirecting to reset password...")}
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-black uppercase tracking-widest py-4 rounded-2xl shadow-lg transition-all mt-4 ${
            loading 
            ? 'bg-gray-300 shadow-none cursor-not-allowed opacity-50' 
            : 'bg-pokemon-red shadow-red-200 hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      {/* Social Login */}
      <div className="mt-8 flex flex-col gap-4">
        <div className="relative flex items-center justify-center">
          <div className="border-t w-full border-gray-100"></div>
          <span className="bg-white px-3 text-[10px] text-gray-400 font-black uppercase absolute tracking-widest">
            Social Login
          </span>
        </div>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-100 p-4 rounded-2xl hover:bg-gray-50 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-sm"
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            className="w-5 h-5" 
            alt="Google" 
          />
          <span className="text-xs font-black text-gray-600 uppercase tracking-wider">
            Sign in with Google
          </span>
        </button>
      </div>
    </div>
  );
}