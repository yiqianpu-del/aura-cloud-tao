'use client';
import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Dynamically load Decap CMS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/decap-cms@^3/dist/decap-cms.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: '#666', fontFamily: 'system-ui, sans-serif' }}>
      Loading admin panel...
    </div>
  );
}
