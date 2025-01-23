import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  channelName: string;
  views: number;
  duration: string;
  publishedAt: Date;
  onClick: () => void;
}

export const VideoCard = ({
  title,
  thumbnail,
  channelName,
  views,
  duration,
  publishedAt,
  onClick,
}: VideoCardProps) => {
  return (
    <Card 
      onClick={onClick}
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-fade-up"
    >
      <CardHeader className="p-0 relative aspect-video overflow-hidden rounded-t-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 text-xs rounded">
          {duration}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2 line-clamp-2 group-hover:text-primary">
          {title}
        </CardTitle>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{channelName}</span>
          <div className="flex items-center gap-2">
            <span>{views.toLocaleString()} views</span>
            <span>•</span>
            <span>{formatDistanceToNow(publishedAt, { addSuffix: true })}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};