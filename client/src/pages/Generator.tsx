import { useState } from "react";
import Title from "../components/Title";
import UploadZone from "../components/uploadZone";
import {
  Loader2Icon,
  RectangleHorizontalIcon,
  RectangleVerticalIcon,
  Wand2Icon,
} from "lucide-react";
import { PrimaryButton } from "../components/Buttons";

const Generator = () => {
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [aspectRatio, setAspectRatio] = useState("9:16");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [modelImage, setModelImage] = useState<File | null>(null);
  const [userPrompt, setUserPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  // Handle file upload
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "product" | "model"
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (type === "product") setProductImage(e.target.files[0]);
      else setModelImage(e.target.files[0]);
    }
  };

  // Handle generate (to be connected with backend)
  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!productImage || !modelImage) {
      setError("Please upload both a product image and a model image.");
      return;
    }
    setError("");
    setIsGenerating(true);

    // TODO: Add API call here

    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
      <form onSubmit={handleGenerate} className="max-w-4xl mx-auto mb-40">
        <Title
          heading="Create In-context Image"
          description="Upload your model and product images to generate stunning UGC, short-form videos and social media posts"
        />

        <div className="flex gap-20 max-sm:flex-col items-start justify-between">
          {/* Left column */}
          <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <UploadZone
              label="Product Image"
              file={productImage}
              onClear={() => setProductImage(null)}
              onChange={(e) => handleFileChange(e, "product")}
            />

            <UploadZone
              label="Model Image"
              file={modelImage}
              onClear={() => setModelImage(null)}
              onChange={(e) => handleFileChange(e, "model")}
            />
          </div>

          {/* Right column */}
          <div className="w-full">
            <div className="mb-4 text-gray-300">
              <label htmlFor="name" className="block text-sm mb-4">
                Project Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name your project"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
              />
            </div>

            <div className="mb-4 text-gray-300">
              <label htmlFor="productName" className="block text-sm mb-4">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter the name of the product"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
              />
            </div>

            <div className="mb-4 text-gray-300">
              <label
                htmlFor="productDescription"
                className="block text-sm mb-4"
              >
                Product Description{" "}
                <span className="text-xs text-violet-400">(optional)</span>
              </label>

              <textarea
                id="productDescription"
                rows={4}
                value={productDescription}
                onChange={(e) =>
                  setProductDescription(e.target.value)
                }
                placeholder="Enter the description of the product"
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none resize-none transition-all"
              />
            </div>

            <div className="mb-4 text-gray-300">
              <label className="block text-sm mb-4">Aspect Ratio</label>
              <div className="flex gap-3">
                {[
                  { ratio: "9:16", label: "Vertical (9:16)", Icon: RectangleVerticalIcon },
                  { ratio: "16:9", label: "Horizontal (16:9)", Icon: RectangleHorizontalIcon },
                ].map(({ ratio, label, Icon }) => (
                  <button
                    key={ratio}
                    type="button"
                    aria-label={label}
                    aria-pressed={aspectRatio === ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`p-2.5 rounded transition-all ring-2 ${
                      aspectRatio === ratio
                        ? "ring-violet-500/50 bg-violet-500/20 text-white"
                        : "ring-transparent bg-white/6 text-gray-400 hover:text-white"
                    }`}
                  >
                    <Icon className="size-8" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4 text-gray-300">
              <label htmlFor="userPrompt" className="block text-sm mb-4">
                User Prompt{" "}
                <span className="text-xs text-violet-400">(optional)</span>
              </label>

              <textarea
                id="userPrompt"
                rows={4}
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Describe how you want the narration to be"
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none resize-none transition-all"
              />
            </div>
          </div>
        </div>

        {error && (
          <p role="alert" className="text-center text-sm text-red-400 mt-6">{error}</p>
        )}

        {/* Button */}
        <div className="flex justify-center mt-10">
          <PrimaryButton
            disabled={isGenerating}
            className="px-10 py-3 rounded-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <Loader2Icon className="size-5 animate-spin" /> Generating...
              </>
            ) : (
              <>
                <Wand2Icon className="size-5" /> Generate Image
              </>
            )}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Generator;
