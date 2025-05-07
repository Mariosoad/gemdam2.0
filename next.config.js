const nextConfig = {
    compress: true,
    swcMinify: true,
  
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: "briptravel.com.ar", pathname: '/media/**' },
        { protocol: 'https', hostname: "images.unsplash.com" },
        { protocol: 'https', hostname: "imagedelivery.net" },
        { protocol: 'https', hostname: "res.cloudinary.com" },
      ],
    },
  
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader'],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  