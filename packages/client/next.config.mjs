/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist',
  rewrites: () => [
    {
      source: process.env.NEST_GRAPHQL_PATH,
      destination: process.env.NEST_GRAPHQL_URL
    }
  ],
};

export default nextConfig;