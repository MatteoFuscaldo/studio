"use client";

import type React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ContentItem } from '@/types/content';
import { PartyPopper, Swords, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAdjacentContent } from '@/services/content';
import { Button } from '@/components/ui/button';

interface ContentDisplayProps {
  content: ContentItem | null;
  onContentChange?: (content: ContentItem) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.95 },
};

const ContentDisplay: React.FC<ContentDisplayProps> = ({ content, onContentChange }) => {
  const Icon = content?.type === 'cheer' ? PartyPopper : Swords;
  const title = content?.type === 'cheer' ? 'Cheers!' : 'Challenge!';

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!content?.id) return;
    
    const adjacentContent = getAdjacentContent(content.id, direction);
    if (adjacentContent && onContentChange) {
      onContentChange(adjacentContent);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {content && (
        <motion.div
          key={content.id || content.text} // Use ID or text as key for re-animation on change
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={cardVariants}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-full max-w-2xl mt-8 relative" // Increased from max-w-md to max-w-2xl
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
          
          {/* Navigation arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg -ml-6 hover:bg-background"
              onClick={() => handleNavigation('prev')}
              aria-label="Previous content"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg -mr-6 hover:bg-background"
              onClick={() => handleNavigation('next')}
              aria-label="Next content"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContentDisplay;
