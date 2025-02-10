import ErrorBox from "@/components/common/ErrorBox";
import PageContainer from "@/components/common/PageContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Link } from "react-router";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.length === 0) {
      setError("Username cannot be empty");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    setError("");
    // Handle successful signup here
    console.log("Signup successful");
  };

  return (
    <PageContainer title="Task Planner">
      <div className="flex flex-col gap-4">
        <h3 className="text-center text-2xl font-medium">Sign up</h3>
        <form
          className="mx-auto w-full max-w-md text-center px-4 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label>Username:</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
            <Button type="submit">Sign Up</Button>
          </div>
          <div>
            <Link to="/login">Already have an account? Log in</Link>
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default Signup;
