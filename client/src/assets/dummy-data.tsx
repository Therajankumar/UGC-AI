import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: ' Drag & drop your assests . we auto -optimize formats and sizes.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'Optimized models deliver output in seconds with great fidelity'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'video synthesis',
        desc: 'Bring product shots to life with short film ,social -ready videos. '
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try the platform at no cost.',
        credits: 25,
        features: [
            '25 credits',
            'standard quality',
            'No watermark',
            'slower generation speed ',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'pro',
        price: '$29',
        desc: 'creators and small teams',
        credits: 80,
        features: [
            '80 credits',
            'HD quality',
            'No watermark',
            'video generation',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'ultra',
        price: '$99',
        desc: 'scale across teams and agencies',
        credits: 300,
        features: [
            '300 credits',
            'FHD quality',
            'No watermark',
            'Fast generation speed',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does the AI generation work?',
        answer: 'We leverage state-of-the-art diffusion models trained on millions of product images to blend your product into realistic scenes while preserving details, lighting and reflections.'
    },
    {
        question: 'Do I own the generated images?',
        answer: 'Yes — you receive full commercial rights to any images and videos generated on the platform. Use them for ads, ecommerce, social media and more.'
    },
    {
        question: 'Can I cancel anytime?',
        answer: 'Yes — you can cancel from your dashboard. You will retain access through the end of your billing period. '
    },
    {
        question: 'What input formats do you support?',
        answer: 'We accept JPG, PNG and WEBP. Outputs are high-resolution PNGs and MP4s optimized for social platforms.'
    }
];

export const footerLinks = [
    {
        title: "Quick links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];