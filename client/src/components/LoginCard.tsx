interface LoginCardProps {
  onSubmit?: (email: string) => void;
}

const LoginCard = ({ onSubmit }: LoginCardProps) => {
  return (
    <div className="bg-gray-300 h-auto w-72 border-3 rounded-2xl border-gray-500 grid gap-3 p-4">
      <h2 className="justify-self-center text-lg font-bold">Login</h2>
      
      <input 
        type="email" 
        placeholder="E-mail" 
        className="justify-self-start w-full bg-white border border-gray-400 rounded px-2 py-1"
      />
      
      <input 
        type="password" 
        placeholder="Senha" 
        className="justify-self-start w-full bg-white border border-gray-400 rounded px-2 py-1"
      />

      <button className="justify-self-center bg-gray-500 text-white font-medium py-1 px-4 rounded hover:bg-gray-600 transition">
        Entrar
      </button>
    </div>
  );
};

export default LoginCard;