import type React from "react"
import type { Projects } from "../types"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { DownloadIcon, EllipsisIcon, GlobeIcon, ImageIcon, Loader2Icon, Trash2Icon, VideoIcon } from "lucide-react"

const ProjectCard = ({
  gen,
  setGenerations,
  forCommunity = false,
}: {
  gen: Projects;
  setGenerations: React.Dispatch<React.SetStateAction<Projects[]>>;
  forCommunity?: boolean;
}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // TODO: call the backend once it's ready, for now only local state changes
  const togglePublish = () => {
    setGenerations((prev) =>
      prev.map((p) => (p.id === gen.id ? { ...p, isPublished: !p.isPublished } : p))
    );
    setMenuOpen(false);
  };

  const deleteProject = () => {
    if (!confirm(`Delete "${gen.name || gen.productName}"? This can't be undone.`)) return;
    setGenerations((prev) => prev.filter((p) => p.id !== gen.id));
    setMenuOpen(false);
  };

  const openResult = () => {
    if (!forCommunity) navigate(`/result/${gen.id}`);
  };

  return (
    <div className="mb-4 break-inside-avoid">
      <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition">

        {/* Preview */}
        <div
          onClick={openResult}
          className={`${
            gen.aspectRatio === "9:16"
              ? "aspect-[9/16]"
              : gen.aspectRatio === "1:1"
              ? "aspect-square"
              : "aspect-video"
          } relative overflow-hidden ${forCommunity ? "" : "cursor-pointer"}`}
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

            {gen.isPublished && !forCommunity && (
              <span className="px-2 py-1 text-xs bg-green-600/40 rounded-full text-white">
                Published
              </span>
            )}
          </div>

          {/* Source images */}
          {gen.uploadedImages?.length > 0 && (
            <div className="absolute right-3 bottom-3 flex -space-x-3">
              {gen.uploadedImages.slice(0, 2).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="source"
                  className="size-10 rounded-full object-cover border-2 border-gray-950"
                />
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-medium text-white truncate">
              {gen.name || gen.productName}
            </h3>
            <p className="text-xs text-gray-400 mt-1 flex items-center gap-2">
              {gen.generatedVideo ? <VideoIcon className="size-3.5" /> : <ImageIcon className="size-3.5" />}
              {gen.aspectRatio} · {new Date(gen.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Actions menu, only for the owner's own generations */}
          {!forCommunity && (
            <div className="relative shrink-0">
              <button
                type="button"
                aria-label="Project actions"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition"
              >
                <EllipsisIcon className="size-5" />
              </button>

              {menuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                  <div className="absolute right-0 bottom-full mb-2 z-20 w-44 rounded-lg bg-gray-900 border border-white/10 py-1 text-sm shadow-xl">
                    {gen.generatedImage && (
                      <a href={gen.generatedImage} download className="flex items-center gap-2 px-3 py-2 hover:bg-white/5">
                        <DownloadIcon className="size-4" /> Download image
                      </a>
                    )}
                    {gen.generatedVideo && (
                      <a href={gen.generatedVideo} download className="flex items-center gap-2 px-3 py-2 hover:bg-white/5">
                        <DownloadIcon className="size-4" /> Download video
                      </a>
                    )}
                    <button type="button" onClick={togglePublish} className="w-full flex items-center gap-2 px-3 py-2 hover:bg-white/5">
                      <GlobeIcon className="size-4" /> {gen.isPublished ? "Unpublish" : "Publish"}
                    </button>
                    <button type="button" onClick={deleteProject} className="w-full flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-red-500/10">
                      <Trash2Icon className="size-4" /> Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
