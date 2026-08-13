import type { ChangeEvent, SubmitEvent } from 'react';

interface LoginCardProps {
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
}

const LoginCard = ({
  email,
  password,
  loading,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginCardProps) => {
  return (
    <div className="bg-gray-300 h-auto w-72 border-3 rounded-2xl border-gray-500 p-4">
      <h2 className="text-center text-lg font-bold mb-3">iRepair — Login</h2>

      <form onSubmit={onSubmit} className="grid gap-3">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={onEmailChange}
          required
          className="w-full bg-white border border-gray-400 rounded px-2 py-1"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={onPasswordChange}
          required
          className="w-full bg-white border border-gray-400 rounded px-2 py-1"
        />

        {error && (
          <p className="text-red-600 text-sm text-center font-medium">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="justify-self-center bg-gray-500 text-white font-medium py-1 px-4 rounded cursor-pointer hover:bg-gray-600 transition disabled:opacity-50"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default LoginCard;