import { assets } from '../assets/assets';

// brand mark plus wordmark, rendered as text so it uses the site font
const Logo = () => (
    <span className="flex items-center gap-2">
        <img src={assets.logo} alt="" className="size-8" />
        <span className="text-xl font-semibold tracking-tight text-white">
            UGC<span className="text-violet-400">.AI</span>
        </span>
    </span>
);

export default Logo;
