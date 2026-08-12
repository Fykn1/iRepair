import LoginCard from '../components/LoginCard';

const LoginPage = () => {
  async function handleLogin(email: string) {
  }

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <LoginCard onSubmit={handleLogin} />
    </main>
  );
};

export default LoginPage;