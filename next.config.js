/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "briptravel.com.ar",
                port: '',
                pathname: '/media/**',
            },
            {
                protocol: 'https',
                hostname: "images.unsplash.com",
                port: '',
            },
            {
                protocol: 'https',
                hostname: "imagedelivery.net",
                port: '',
            }
        ],
    },
}


module.exports = nextConfig