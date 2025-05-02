"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContentDisplay from '@/components/content-display';
import { getRandomContent } from '@/services/content';
import type { ContentItem, ContentType } from '@/types/content';
import { PartyPopper, Swords, Beer } from 'lucide-react'; // Added Beer icon
import { motion } from 'framer-motion';


export default function Home() {
  const [currentContent, setCurrentContent] = useState<ContentItem | null>(null);

  const handleGetContent = (type: ContentType) => {
    const newContent = getRandomContent(type);
    setCurrentContent(newContent);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24 bg-gradient-to-br from-background to-secondary">
       <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-12"
      >
         <Beer className="h-16 w-16 text-primary mx-auto mb-4 animate-bounce" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary tracking-tight mb-2">
          Riccardo si SPOSA!
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-medium">
          Scegli se bere o se vuoi una sfida!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-xs sm:max-w-md justify-center"
      >
        <Button
          onClick={() => handleGetContent('cheer')}
          className="text-lg font-semibold py-6 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg transition-transform transform hover:scale-105"
          aria-label="Get a random cheer"
        >
          <PartyPopper className="mr-2 h-6 w-6" />
          Brinda!
        </Button>
        <Button
          onClick={() => handleGetContent('challenge')}
          variant="destructive" // Use destructive variant for accent color (Red)
          className="text-lg font-semibold py-6 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          aria-label="Get a random challenge"
        >
          <Swords className="mr-2 h-6 w-6" />
          Sfida!
        </Button>
      </motion.div>

      <ContentDisplay content={currentContent} />

    </main>
  );
}
