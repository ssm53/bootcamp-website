import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HeyLearn2Code",
  description: "This is HeyLearn2Code's website. We are a coding bootcamp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// 1. HERO PAGE - DONE
// The most affordable & personalised coding bootcamp.
// We will hold your hand while you learn to code.
// In 3 months, you will be able to build full-stack apps and be ready to apply for software developer jobs
// Oh, and we only accept 6 students per cohort.

// message from founder - DONE
// do a video la shaun!

// more info aboout bootcamp - DONE
// affordable pricing - USD 1.5K (show me a bootcamp with a better price)
// only 6 students per cohort
// instant help - this is not your udemy or online course you find online. you will get help in less than 5 mins.
// 700+ hours of material
// build a product for a real-life company... and GET PAID!
// learn to code with AI
// career supprt after bootcamp
// 90% doing. 10% theory. Build 10 projects!
// Bonus1: you will learn langchain...used to build AI products!
// Bonus2: we will teach you to make websites in less than 20 minutes!

// But I cant quite my job - DONE

// what you will learn
// frontend
// nextjs, javascript, svelte, tailwind, daisyui
// backend
// docker, prisma, express, nodejs, aws, javascript

// comparison of us and others
// do table to compare!

// about founder - more of it.

// who is this for?
