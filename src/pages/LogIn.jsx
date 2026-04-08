import { useState } from "react";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, rememberMe });
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-6 pb-10 bg-white rounded-[2.5rem] shadow-2xl p-10">
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
          className="w-full bg-pokemon-red text-white font-black uppercase tracking-widest py-4 rounded-2xl shadow-lg shadow-red-200 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4"
          onClick={() => alert("Logged with email: " +  email + " and password " + password + ".")}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}