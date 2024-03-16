/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist',
  rewrites: () => [
    {
      source: '/graphql',
      destination: 'http://localhost:5002/graphql'
    }
  ],
};

export default nextConfig;