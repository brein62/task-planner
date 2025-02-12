import { sendLoginRequest } from "@/api/user";
import ErrorBox from "@/components/common/ErrorBox";
import Header from "@/components/common/Header";
import PageContainer from "@/components/common/PageContainer";
import { PublicLayout } from "@/components/common/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/authContext";
import React, { useState } from "react";
import { Link } from "react-router";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    setError("");
    
    // try logging in
    sendLoginRequest(email, password).then(response => {
      if (response.status === 200 || response.status === 201) {
        console.log(response)
        login("", "", email, false);
      } else {
        console.error("There was an error logging the user in:", response.message);
        setError(response.message);
      }
    })
  };

  return (
    <PublicLayout>
      <PageContainer title="Task Planner">
        <div className="flex flex-col gap-4">
          <h3 className="text-center text-2xl font-medium">Login</h3>
          <form
            className="mx-auto w-full max-w-md text-center px-4 flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label>Email:</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password:</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <ErrorBox message={error} />}
            <div>
              <Button type="submit">Login</Button>
            </div>
            <div>
              <Link to="/signup">Don't have an account? Sign up</Link>
            </div>
          </form>
        </div>
      </PageContainer>
    </PublicLayout>
  );
};

export default Login;
