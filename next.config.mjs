// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'res.cloudinary.com',
            'i.ytimg.com',
            'medrese.vercel.app',
            'hayalhanem.com',
            '52principlesforchurchleaders.com',
            'images.unsplash.com',
        ],
    },
    experimental: {
        optimizeCss: true,
    },
    async rewrites() {
        return [
            {
                source: '/ex-api/:path*',
                destination: 'http://31.220.95.127:8083/:path*',
            },
        ];
    },
};

export default nextConfig;