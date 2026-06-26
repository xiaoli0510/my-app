'use client';
import { permanentRedirect, redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { onCLS, onINP, onLCP } from 'web-vitals';

function logDelta({ name, id, delta }) {
  console.log(`${name} matching ID ${id} changed by ${delta}`);
}

export default function About() {
  useEffect(() => {
    console.log(4444444444444444);
    onCLS(logDelta);
    onINP(logDelta);
    onLCP(logDelta);
  }, []);
  return (
    <div>
      <div>我是English语言的</div>
      <button className="text-blue-300 block" onClick={() => redirect('/about/me')}>
        Me
      </button>
      <button className="text-blue-300 block" onClick={() => permanentRedirect('/about/me2')}>
        Me2
      </button>
    </div>
  );
}
