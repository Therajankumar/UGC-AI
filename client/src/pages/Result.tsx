import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeftIcon, DownloadIcon, GlobeIcon, Loader2Icon, VideoIcon } from "lucide-react"
import type { Projects } from "../types"
import { dummyGenerations } from "../assets/assets"
import { creditCosts } from "../assets/dummy-data"
import { GhostButton, PrimaryButton } from "../components/Buttons"

const Result = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState<Projects | null>(null)
  const [loading, setLoading] = useState(true)
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false)

  // TODO: fetch the project from the backend
  useEffect(() => {
    const timer = setTimeout(() => {
      setProject(dummyGenerations.find((p) => p.id === projectId) ?? null)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [projectId])

  // TODO: call the backend to generate the video
  const handleGenerateVideo = async () => {
    setIsGeneratingVideo(true)
    setTimeout(() => setIsGeneratingVideo(false), 2000)
  }

  // TODO: persist through the backend
  const togglePublish = () => {
    setProject((p) => (p ? { ...p, isPublished: !p.isPublished } : p))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2Icon className="size-7 animate-spin text-indigo-400" />
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">Project not found</h1>
        <p className="text-gray-400 mb-8">This project doesn't exist or was deleted.</p>
        <PrimaryButton onClick={() => navigate("/my-generations")} className="px-8 py-2.5">
          <ArrowLeftIcon className="size-4" /> My Generations
        </PrimaryButton>
      </div>
    )
  }

  const isVertical = project.aspectRatio === "9:16"

  return (
    <div className="min-h-screen text-white p-6 md:p-12 my-28">
      <div className="max-w-6xl mx-auto">
        <button
          type="button"
          onClick={() => navigate("/my-generations")}
          className="mb-8 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
        >
          <ArrowLeftIcon className="size-4" /> Back to My Generations
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Preview */}
          <div className={`glass-panel rounded-2xl overflow-hidden mx-auto w-full ${isVertical ? "max-w-sm" : ""}`}>
            <div className={`relative ${isVertical ? "aspect-[9/16]" : project.aspectRatio === "1:1" ? "aspect-square" : "aspect-video"}`}>
              {project.generatedVideo ? (
                <video src={project.generatedVideo} poster={project.generatedImage} controls playsInline className="absolute inset-0 w-full h-full object-cover" />
              ) : project.generatedImage ? (
                <img src={project.generatedImage} alt={project.productName} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-400">
                  <Loader2Icon className="size-7 animate-spin" /> Generating...
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              {project.isGenerating && (
                <span className="px-2 py-1 text-xs bg-yellow-600/40 rounded-full">Generating</span>
              )}
              {project.isPublished && (
                <span className="px-2 py-1 text-xs bg-green-600/40 rounded-full">Published</span>
              )}
            </div>
            <h1 className="text-3xl font-semibold mb-2">{project.name || project.productName}</h1>
            <p className="text-sm text-gray-400 mb-8">
              Created {new Date(project.createdAt).toLocaleDateString()} · {project.aspectRatio}
              {project.targetLength ? ` · ${project.targetLength}s` : ""}
            </p>

            <dl className="space-y-5 mb-8 text-sm">
              <div>
                <dt className="text-gray-400 mb-1">Product</dt>
                <dd>{project.productName}</dd>
              </div>
              {project.productDescription && (
                <div>
                  <dt className="text-gray-400 mb-1">Description</dt>
                  <dd>{project.productDescription}</dd>
                </div>
              )}
              {project.userPrompt && (
                <div>
                  <dt className="text-gray-400 mb-1">Prompt</dt>
                  <dd>{project.userPrompt}</dd>
                </div>
              )}
              {project.uploadedImages?.length > 0 && (
                <div>
                  <dt className="text-gray-400 mb-2">Source images</dt>
                  <dd className="flex gap-3">
                    {project.uploadedImages.map((src, i) => (
                      <img key={i} src={src} alt={i === 0 ? "product" : "model"} className="size-20 rounded-lg object-cover border border-white/10" />
                    ))}
                  </dd>
                </div>
              )}
            </dl>

            <div className="flex flex-wrap gap-3">
              {project.generatedImage && (
                <a href={project.generatedImage} download className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-white/10 bg-white/3 hover:bg-white/6 backdrop-blur-sm active:scale-95 transition">
                  <DownloadIcon className="size-4" /> Image
                </a>
              )}
              {project.generatedVideo && (
                <a href={project.generatedVideo} download className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-white/10 bg-white/3 hover:bg-white/6 backdrop-blur-sm active:scale-95 transition">
                  <DownloadIcon className="size-4" /> Video
                </a>
              )}
              <GhostButton type="button" onClick={togglePublish}>
                <GlobeIcon className="size-4" /> {project.isPublished ? "Unpublish" : "Publish to community"}
              </GhostButton>
            </div>

            {!project.generatedVideo && project.generatedImage && (
              <PrimaryButton
                onClick={handleGenerateVideo}
                disabled={isGeneratingVideo}
                className="mt-6 px-8 py-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isGeneratingVideo ? (
                  <><Loader2Icon className="size-5 animate-spin" /> Generating video...</>
                ) : (
                  <><VideoIcon className="size-5" /> Generate video ({creditCosts.video} credits)</>
                )}
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result
