import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Code, Eye, EyeOff, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import AnimatedWaveBackground from "../components/AnimatedWaveBackground";
import { useProgress } from "../data/ProgressContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../data/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { loginWithGoogle, user } = useProgress();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  // Validação de Email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validação de Senha
  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  // Limpar mensagens de erro/sucesso
  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  // Handle de Login com Email/Senha
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    clearMessages();

    // Validações
    if (!formData.email.trim()) {
      setError("Por favor, insira seu email");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError("Email inválido");
      return;
    }
    if (!formData.password) {
      setError("Por favor, insira sua senha");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setSuccess("Login realizado com sucesso! 🎉");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      const errorMessages = {
        "auth/invalid-email": "Email inválido",
        "auth/user-not-found": "Usuário não encontrado",
        "auth/wrong-password": "Senha incorreta",
        "auth/too-many-requests": "Muitas tentativas. Tente novamente mais tarde",
      };
      setError(errorMessages[err.code] || "Erro ao fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Handle de Cadastro
  const handleSignup = async (e) => {
    e.preventDefault();
    clearMessages();

    // Validações
    if (!formData.name.trim()) {
      setError("Por favor, insira seu nome");
      return;
    }
    if (!formData.email.trim()) {
      setError("Por favor, insira seu email");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError("Email inválido");
      return;
    }
    if (!formData.password) {
      setError("Por favor, insira uma senha");
      return;
    }
    if (!isValidPassword(formData.password)) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      setSuccess("Conta criada com sucesso! Bem-vindo! 🎉");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      const errorMessages = {
        "auth/email-already-in-use": "Este email já está registrado",
        "auth/invalid-email": "Email inválido",
        "auth/weak-password": "Senha fraca. Use pelo menos 6 caracteres",
      };
      setError(errorMessages[err.code] || "Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Handle de Recuperação de Senha
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    clearMessages();

    if (!resetEmail.trim()) {
      setError("Por favor, insira seu email");
      return;
    }
    if (!isValidEmail(resetEmail)) {
      setError("Email inválido");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setSuccess("Email de recuperação enviado! Verifique sua caixa de entrada.");
      setResetEmail("");
      setTimeout(() => setShowResetModal(false), 2000);
    } catch (err) {
      setError("Erro ao enviar email de recuperação. Verifique o email e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#0a0c10] overflow-hidden" style={{ backgroundColor: '#0a0c10' }}>
      <AnimatedWaveBackground />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[420px] px-4 sm:px-0"
        style={{ width: '100%', maxWidth: '420px' }}
      >
        {/* Glass Card */}
        <div className="glass-card rounded-[2rem] p-6 sm:p-8 shadow-2xl border border-white/10" style={{ borderRadius: '2rem', padding: '1.5rem' }}>
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10" style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
            <div className="p-2 rounded-xl bg-[#58cc02]/20" style={{ padding: '0.5rem', borderRadius: '0.75rem' }}>
              <Code className="w-6 sm:w-8 h-6 sm:h-8 text-[#58cc02]" style={{ width: '24px', height: '24px' }} />
            </div>
            <h1 className="text-lg sm:text-2xl font-bold text-white tracking-tight" style={{ fontSize: '1.25rem', color: 'white' }}>
              Aprendendo<span className="text-[#58cc02]">ACoda</span>
            </h1>
          </div>

          {/* Mensagens de Sucesso */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-4 flex items-center gap-2 p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-sm"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{success}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mensagens de Erro */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-4 flex items-center gap-2 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Login/Cadastro */}
          {!showResetModal && (
            <div className="flex bg-black/40 rounded-xl p-1.5 mb-8 border border-white/5" style={{ display: 'flex', gap: '0.5rem', padding: '0.4rem' }}>
              <button
                onClick={() => {
                  setIsLogin(true);
                  clearMessages();
                }}
                className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isLogin
                    ? "bg-[#58cc02] text-black shadow-lg"
                    : "text-zinc-500 hover:text-white"
                }`}
                style={{ flex: 1, padding: '0.5rem 1rem', borderRadius: '0.5rem' }}
              >
                Entrar
              </button>
              <button
                onClick={() => {
                  setIsLogin(false);
                  clearMessages();
                }}
                className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  !isLogin
                    ? "bg-[#58cc02] text-black shadow-lg"
                    : "text-zinc-500 hover:text-white"
                }`}
                style={{ flex: 1, padding: '0.5rem 1rem', borderRadius: '0.5rem' }}
              >
                Cadastrar
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">
            {showResetModal ? (
              <motion.div
                key="reset"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <form className="space-y-5" onSubmit={handlePasswordReset} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <h3 className="text-white font-semibold mb-4">Recuperar Senha</h3>
                    <div className="space-y-2">
                      <Label className="text-zinc-400 ml-1">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          value={resetEmail}
                          onChange={(e) => setResetEmail(e.target.value)}
                          className="pl-10 h-12 bg-black/30 border-white/10 rounded-xl focus:border-[#58cc02]"
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#58cc02] hover:bg-[#46a302] text-black font-bold rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ width: '100%', height: '3rem', borderRadius: '0.75rem' }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader className="w-4 h-4 animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      "Enviar Link de Recuperação"
                    )}
                  </Button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowResetModal(false);
                      clearMessages();
                    }}
                    className="w-full py-2 text-sm text-[#58cc02] hover:text-[#46a302] font-medium"
                  >
                    Voltar ao Login
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key={isLogin ? "login" : "signup"}
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <form className="space-y-5" onSubmit={isLogin ? handleEmailLogin : handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label className="text-zinc-400 ml-1">Nome completo</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" style={{ width: '16px', height: '16px' }} />
                        <Input
                          type="text"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="pl-10 h-12 bg-black/30 border-white/10 rounded-xl focus:border-[#58cc02]"
                          disabled={loading}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label className="text-zinc-400 ml-1">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" style={{ width: '16px', height: '16px' }} />
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10 h-12 bg-black/30 border-white/10 rounded-xl focus:border-[#58cc02]"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-zinc-400 ml-1">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" style={{ width: '16px', height: '16px' }} />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="pl-10 pr-10 h-12 bg-black/30 border-white/10 rounded-xl focus:border-[#58cc02]"
                        disabled={loading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                        style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)' }}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" style={{ width: '16px', height: '16px' }} /> : <Eye className="w-4 h-4" style={{ width: '16px', height: '16px' }} />}
                      </button>
                    </div>
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label className="text-zinc-400 ml-1">Confirmar Senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          className="pl-10 pr-10 h-12 bg-black/30 border-white/10 rounded-xl focus:border-[#58cc02]"
                          disabled={loading}
                        />
                      </div>
                    </div>
                  )}

                  {isLogin && (
                    <div className="flex justify-end pr-1" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setShowResetModal(true);
                          clearMessages();
                        }}
                        className="text-xs text-[#58cc02] hover:underline font-medium"
                        style={{ fontSize: '0.75rem' }}
                      >
                        Esqueceu a senha?
                      </button>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#58cc02] hover:bg-[#46a302] text-black font-bold rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ width: '100%', height: '3rem', borderRadius: '0.75rem' }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader className="w-4 h-4 animate-spin" />
                        {isLogin ? "Entrando..." : "Criando conta..."}
                      </span>
                    ) : (
                      isLogin ? "Entrar na conta" : "Criar minha conta"
                    )}
                  </Button>
                </form>

                <div className="flex items-center gap-4 my-8" style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2rem 0' }}>
                  <div className="flex-1 h-px bg-white/5" style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">ou continue com</span>
                  <div className="flex-1 h-px bg-white/5" style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />
                </div>

                <div className="grid grid-cols-2 gap-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={loginWithGoogle}
                    disabled={loading}
                    className="bg-white/5 border-white/10 hover:bg-white/10 text-white flex items-center justify-center gap-2 h-11 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ display: 'flex', gap: '0.5rem', height: '2.75rem', borderRadius: '0.75rem' }}
                  >
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" style={{ width: '20px', height: '20px' }}>
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" />
                    </svg>
                    <span>Google</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    disabled={loading}
                    className="bg-white/5 border-white/10 hover:bg-white/10 text-white flex items-center justify-center gap-2 h-11 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ display: 'flex', gap: '0.5rem', height: '2.75rem', borderRadius: '0.75rem' }}
                  >
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </Button>
                </div>

                {/* Terms and Privacy */}
                <div className="mt-6 text-center text-[11px] text-zinc-500">
                  <p>
                    Ao continuar, você concorda com nossos{" "}
                    <a href="#" className="text-[#58cc02] hover:underline">
                      Termos de Serviço
                    </a>
                    {" "}e{" "}
                    <a href="#" className="text-[#58cc02] hover:underline">
                      Política de Privacidade
                    </a>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Logo/Link */}
          {!showResetModal && (
            <div className="mt-10 text-center opacity-20">
              <p className="text-[9px] text-white uppercase tracking-[0.6em] font-black" style={{ fontSize: '9px', letterSpacing: '0.6em' }}>Aprendendo A Coda</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
