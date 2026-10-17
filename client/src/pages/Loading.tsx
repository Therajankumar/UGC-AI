import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Loader2Icon } from "lucide-react"

// shown after checkout while the new credits are applied, then sends the user on
const Loading = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate("/my-generations"), 5000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <Loader2Icon className="size-10 animate-spin text-indigo-400 mb-6" />
      <h1 className="text-2xl font-semibold mb-2">Setting things up...</h1>
      <p className="text-gray-400">Updating your plan and credits. You'll be redirected in a few seconds.</p>
    </div>
  )
}

export default Loading
