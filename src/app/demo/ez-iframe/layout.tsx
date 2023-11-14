import "@/app/globals.css";
import Head from "next/head";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Iframe',  
    other: { authord: ["sdf", 'sdfsd', 'qqq']},
  }
  

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
