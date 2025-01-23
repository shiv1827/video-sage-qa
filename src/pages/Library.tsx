import React, { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { VideoCard } from "@/components/VideoCard";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Mock data for demonstration
  const videos = [
    {
      id: "1",
      title: "The Future of AI: Opportunities and Challenges",
      thumbnail: "https://picsum.photos/seed/1/1280/720",
      channelName: "Tech Insights",
      views: 150000,
      duration: "15:30",
      publishedAt: new Date("2024-01-15"),
    },
    {
      id: "2",
      title: "Understanding Quantum Computing",
      thumbnail: "https://picsum.photos/seed/2/1280/720",
      channelName: "Science Explained",
      views: 75000,
      duration: "22:45",
      publishedAt: new Date("2024-01-10"),
    },
    {
      id: "3",
      title: "Sustainable Energy Solutions",
      thumbnail: "https://picsum.photos/seed/3/1280/720",
      channelName: "Green Future",
      views: 98000,
      duration: "18:20",
      publishedAt: new Date("2024-01-05"),
    },
  ];

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.channelName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-8">Video Library</h1>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              {...video}
              onClick={() => navigate(`/video/${video.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;