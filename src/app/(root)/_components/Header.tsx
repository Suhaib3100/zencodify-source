"use client";

import Link from "next/link";
import { Blocks, Code2, Sparkles } from 'lucide-react';
import { SignedIn } from "@clerk/nextjs";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import HeaderProfileBtn from "./HeaderProfileBtn";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { AnimatedButton } from "@/components/ui/animated-button";
import { motion } from "framer-motion";

interface HeaderProps {
  isPro: boolean;
}

function Header({ isPro }: HeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10"
    >
      <BackgroundGradient className="rounded-2xl">
        <div className="flex items-center lg:justify-between justify-center backdrop-blur-xl p-6 mb-4 rounded-2xl border border-white/10">
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="group relative">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
                  <Blocks className="size-6 text-white transform group-hover:rotate-12 transition-all duration-300" />
                </div>

                <div className="flex flex-col">
                  <span className="block text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    ZenCodify
                  </span>
                  <span className="block text-sm text-blue-300/80 font-medium">
                    Interactive Code Editor
                  </span>
                </div>
              </motion.div>
            </Link>

            <nav className="flex items-center space-x-4">
              <Link href="/snippets">
                <AnimatedButton className="group">
                  <span className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                    <span className="font-medium">Snippets</span>
                  </span>
                </AnimatedButton>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ThemeSelector />
              <LanguageSelector hasAccess={isPro} />
            </motion.div>

            {!isPro && (
              <Link href="/pricing">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl 
                    bg-gradient-to-r from-amber-500 to-orange-500 
                    hover:from-amber-400 hover:to-orange-400 
                    text-white shadow-lg transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Upgrade to Pro</span>
                </motion.div>
              </Link>
            )}

            <SignedIn>
              <motion.div whileHover={{ scale: 1.05 }}>
                <RunButton />
              </motion.div>
            </SignedIn>

            <div className="pl-4 border-l border-white/10">
              <motion.div whileHover={{ scale: 1.05 }}>
                <HeaderProfileBtn />
              </motion.div>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
}

export default Header;

