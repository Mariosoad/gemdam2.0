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
            },
            {
                protocol: 'https',
                hostname: "res.cloudinary.com",
                port: '',
            }
        ],
    },

    rules: [
        {
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: [
                'raw-loader',
                'glslify-loader'
            ]
        }
    ]
};

module.exports = nextConfig;