"use client";
import { permanentRedirect, redirect, useRouter } from "next/navigation";

export default function About({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>about</div>
      <button className="text-blue-300 block" onClick={ () => redirect('/about/me')}>Me</button>
      <button className="text-blue-300 block" onClick={ () => permanentRedirect('/about/me2')}>Me2</button>
      {children}
    </div>
  );
}
