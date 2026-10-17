import { useEffect, useState } from "react"
import { Loader2Icon, SparklesIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import type { Projects } from "../types"
import { dummyGenerations } from "../assets/assets"
import ProjectCard from "../components/ProjectCard"
import { PrimaryButton } from "../components/Buttons"

const Mygenerations = () => {
  const navigate = useNavigate()
  const [generations, setGenerations] = useState<Projects[]>([])
  const [loading, setLoading] = useState(true)

  // TODO: replace with the user's projects from the backend
  const fetchGenerations = async () => {
    setTimeout(() => {
      setGenerations(dummyGenerations)
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    fetchGenerations()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2Icon className="size-7 animate-spin text-indigo-400" />
      </div>
    )
  }

  return (
    <div className="min-h-screen text-white p-6 md:p-12 my-28">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">My Generations</h1>
            <p className="text-gray-400">
              {generations.length} {generations.length === 1 ? "project" : "projects"}
            </p>
          </div>
          <PrimaryButton onClick={() => navigate("/generate")} className="px-6 py-2.5">
            <SparklesIcon className="size-4" /> New generation
          </PrimaryButton>
        </header>

        {generations.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center">
            <h2 className="text-xl font-semibold mb-2">No generations yet</h2>
            <p className="text-sm text-gray-400 mb-6">Upload a product and a model image to create your first UGC ad.</p>
            <PrimaryButton onClick={() => navigate("/generate")} className="px-8 py-2.5">
              <SparklesIcon className="size-4" /> Create your first ad
            </PrimaryButton>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {generations.map((gen) => (
              <ProjectCard key={gen.id} gen={gen} setGenerations={setGenerations} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Mygenerations
