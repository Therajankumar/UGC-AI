import { ImageIcon, RefreshCwIcon, VideoIcon } from "lucide-react"
import Pricing from "../components/Pricing"
import Faq from "../components/Faq"
import Title from "../components/Title"
import { creditCosts } from "../assets/dummy-data"

const creditInfo = [
  {
    icon: <ImageIcon className="size-6" />,
    title: "Image generation",
    desc: `${creditCosts.image} credits per in-context product image.`,
  },
  {
    icon: <VideoIcon className="size-6" />,
    title: "Video generation",
    desc: `${creditCosts.video} credits per short-form UGC video.`,
  },
  {
    icon: <RefreshCwIcon className="size-6" />,
    title: "Upgrade anytime",
    desc: "Running low? Switch to a bigger plan whenever you need more credits.",
  },
]

const Plans = () => {
  return (
    <div className="min-h-screen text-white pt-28">
      <Pricing />

      {/* how credits work */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Title
            title="Credits"
            heading="How credits work"
            description="Every plan comes with a monthly pool of credits. Spend them on images or videos however you like."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {creditInfo.map((item) => (
              <div key={item.title} className="glass-panel rounded-2xl p-6">
                <div className="mb-4 size-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />
    </div>
  )
}

export default Plans
