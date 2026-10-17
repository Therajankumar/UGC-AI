import type React from "react"
import type { Projects } from "../types"
import { Loader2Icon } from "lucide-react"

// setGenerations and forCommunity are accepted for the upcoming card actions menu
const ProjectCard = ({
  gen,
}: {
  gen: Projects;
  setGenerations: React.Dispatch<React.SetStateAction<Projects[]>>;
  forCommunity?: boolean;
}) => {
  return (
    <div className="mb-4 break-inside-avoid">
      <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition">

        {/* Preview */}
        <div
          className={`${
            gen.aspectRatio === "9:16"
              ? "aspect-[9/16]"
              : "aspect-video"
          } relative overflow-hidden`}
        >
          {/* Image */}
          {gen.generatedImage && (
            <img
              src={gen.generatedImage}
              alt={gen.productName}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                gen.generatedVideo
                  ? "group-hover:opacity-0"
                  : "group-hover:scale-105"
              }`}
            />
          )}

          {/* Video */}
          {gen.generatedVideo && (
            <video
              src={gen.generatedVideo}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              onMouseEnter={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play();
              }}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
          )}

          {/* Loading */}
          {!gen.generatedImage && !gen.generatedVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Loader2Icon className="w-7 h-7 animate-spin text-white" />
            </div>
          )}

          {/* Status badges */}
          <div className="absolute left-3 top-3 flex gap-2">
            {gen.isGenerating && (
              <span className="px-2 py-1 text-xs bg-yellow-600/40 rounded-full text-white">
                Generating
              </span>
            )}

            {gen.isPublished && (
              <span className="px-2 py-1 text-xs bg-green-600/40 rounded-full text-white">
                Published
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="p-4">
          <h3 className="font-medium text-white truncate">
            {gen.productName}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;