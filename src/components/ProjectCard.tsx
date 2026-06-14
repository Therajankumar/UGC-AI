import type React from "react"
import type { Projects } from "../types"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Loader2Icon } from "lucide-react"




// const ProjectCard = ({gen ,setGenerations ,forCommunity =false }:{gen : Projects,
//     setGenerations:React.Dispatch<React.SetStateAction<Projects[]>>,
//     forCommunity?:boolean
// }) => {
//    const navigate =useNavigate();
//    const [menuOpen ,setMenuOpen] =useState(false);

//   return (
//     <div key ={gen.id} className="mb-4 break-inside-avoid">
//       <div className="bg-white/5 border-white/10 rounded-xl overflow-hidden
//       hover:border-white/20 transition group">
//         {/* preview */}
//         < className={`${
//     gen.aspectRatio === "9:16"
//       ? "aspect-[9/16]"
//       : "aspect-video"
//   } relative overflow-hidden`}>
//            {gen.generatedImage && (
//             <img src={gen.generatedImage} alt={gen.productName}className=
//             {`absolute inset-0 w-full h-full object-cover transition 
//                 duration-500 ${gen.generatedVideo ? 'group-hover:opacity-0':
//                     'group-hover:scale-105'
//                 }`}/>
//            )} 

//            {gen.generatedVideo && (
//             <video src ={gen.generatedVideo} muted loop playsInline
//             className="absolute inset-0 w-full h-full object-cover opacity-0
//             group-hover:opacity-100 transition duration-500"
//             onMouseEnter={(e)=>e.currentTarget.play()}
//             onMouseLeave={(e)=>e.currentTarget.pause()} />
//            )}

//         {(!gen?.generatedImage && !gen?.generatedVideo)&&(
//             <div className="absolute inset-0 w-full h-full flex flex-col
//             items-center justify-center bg-black/20">
//             <Loader2Icon className="size-7 animate-spin"/>
//             </div>
//         )}
//         {/*status badge*/}
//         <div className="absolute left-3 top-3 flex gap-2 items-center">
//             {gen.isGenerating && (
//                 <span className="text-xs px-2 py-1 bg-yellow-600/30
//                 rounded-full"> Generating</span>
//             )}

//          {gen.isPublished && (
//                 <span className="text-xs px-2 py-1 bg-green-600/30
//                 rounded-full"> Published</span>
//             )}

        
//         </div>
       
//           {/*source images  */} 
        
//         </div>
//       {/*details */}
//       <div>

//       </div>
//       </div>
//     </div>
//   )
// }

// export default ProjectCard
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