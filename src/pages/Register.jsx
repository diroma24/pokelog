import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRedirectSim = (page) => {
    alert(`Redirecting to: ${page}...`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully.");
      navigate("/"); 
    } catch (error) {
      console.error(error.code);
      alert("Error: " + error.message);
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
        Create an Account
      </h4>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
            Email Address <span className="text-pokemon-red">*</span>
          </label>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3 focus-within:border-pokemon-red transition-colors">
            <input
              type="email"
              placeholder="trainer@pokeapp.com"
              className="bg-transparent w-full outline-none text-sm text-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
            Password <span className="text-pokemon-red">*</span>
          </label>
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

        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
            Repeat Password <span className="text-pokemon-red">*</span>
          </label>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3 focus-within:border-pokemon-red transition-colors">
            <input
              type="password"
              placeholder="••••••••"
              className="bg-transparent w-full outline-none text-sm text-gray-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Switches Section */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold text-gray-500">
              I accept the{" "}
              <button 
                type="button"
                onClick={() => handleRedirectSim("Terms of Service")}
                className="text-pokemon-red hover:underline cursor-pointer"
              >
                Terms of Service
              </button> <span className="text-pokemon-red">*</span>
            </span>
            <button
              type="button"
              onClick={() => setTerms(!terms)}
              className={`shrink-0 w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${terms ? 'bg-pokemon-red' : 'bg-gray-300'}`}
            >
              <div className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${terms ? 'translate-x-5' : ''}`} />
            </button>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold text-gray-500">
              Agree to{" "}
              <button 
                type="button"
                onClick={() => handleRedirectSim("Privacy & Cookies Policy")}
                className="text-pokemon-red hover:underline cursor-pointer"
              >
                Privacy & Cookies
              </button> <span className="text-pokemon-red">*</span>
            </span>
            <button
              type="button"
              onClick={() => setPrivacy(!privacy)}
              className={`shrink-0 w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${privacy ? 'bg-pokemon-red' : 'bg-gray-300'}`}
            >
              <div className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${privacy ? 'translate-x-5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!terms || !privacy || loading}
          className={`w-full text-white font-black uppercase tracking-widest py-4 rounded-2xl shadow-lg transition-all mt-4 ${
            terms && privacy && !loading
            ? 'bg-pokemon-red shadow-red-200 hover:scale-[1.02] active:scale-[0.98]' 
            : 'bg-gray-300 shadow-none cursor-not-allowed opacity-50'
          }`}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>

      {/* Social Login Section */}
      <div className="mt-8 flex flex-col gap-4">
        <div className="relative flex items-center justify-center">
          <div className="border-t w-full border-gray-100"></div>
          <span className="bg-white px-3 text-[10px] text-gray-400 font-black uppercase absolute tracking-widest">
            Social Signup
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
            Sign up with Google
          </span>
        </button>
      </div>
    </div>
  );
}