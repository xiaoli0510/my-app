'use client';
import { signIn, signUp } from '@/lib/auth-client';

// signUp.email({ email, password, name })
// signIn.email({ email, password })

import { useState } from 'react';

const initialState = { message: '' };
export default function Login() {
  const [email, setEmail] = useState('12345@qq.com');
  const [password, setPassword] = useState('12345678Xx@');
  const handleRegister = async (e) => {
    e.preventDefault();
    const { data, error } = await signUp.email({
      email,
      password,
      name:email,
    });
    if (error) {
      console.log('error', error);
    } else {
      console.log('data', data);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await signIn.email({
      email,
      password,
    });
    if (error) {
      console.log('error', error);
    } else {
      console.log('data', data);
    }
  };
  return (
    <div>
      <div>login</div>
      <div className="flex flex-col gap-2 w-[300px] mx-auto mt-30">
        <form className="flex flex-col gap-2">
          <input
            value={email}
            className="border border-gray-300 rounded-md p-2"
            type="text"
            name="username"
            placeholder="用户名"
          />
          <input
            value={password}
            className="border border-gray-300 rounded-md p-2"
            type="password"
            name="password"
            placeholder="密码"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md" onClick={handleRegister}>
            注册
          </button>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md" onClick={handleLogin}>
            登录
          </button>
        </form>
      </div>
    </div>
  );
}
