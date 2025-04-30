"use client";

import type React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ContentItem } from '@/types/content';
import { PartyPopper, Swords } from 'lucide-react';

interface ContentDisplayProps {
  content: ContentItem | null;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.95 },
};

const ContentDisplay: React.FC<ContentDisplayProps> = ({ content }) => {
  const Icon = content?.type === 'cheer' ? PartyPopper : Swords;
  const title = content?.type === 'cheer' ? 'Cheers!' : 'Challenge!';

  return (
    <AnimatePresence mode="wait">
      {content && (
        <motion.div
          key={content.text} // Use text as key for re-animation on change
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={cardVariants}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-full max-w-md mt-8"
        >
          <Card className="bg-card shadow-xl overflow-hidden border-primary border-2 rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-secondary text-secondary-foreground p-4 rounded-t-lg">
              <CardTitle className="text-2xl font-bold">{title}</CardTitle>
              <Icon className="h-8 w-8 text-primary" strokeWidth={2.5} />
            </CardHeader>
            <CardContent className="p-6 text-center space-y-4">
              <p className="text-lg font-medium text-foreground leading-relaxed">
                {content.text}
              </p>
              {content.imageUrl && (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md border border-border">
                  <Image
                    src={content.imageUrl}
                    alt={content.text}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority // Prioritize loading the image
                  />
                </div>
              )}
              {content.youtubeVideoId && (
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md border border-border">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${content.youtubeVideoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContentDisplay;
