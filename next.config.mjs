/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    mongodbURL:'mongodb+srv://mohamedazoz20010:mqrZJhV4IXoxp1Dh@cluster0.w2pzn5r.mongodb.net/shoppy',
    dbUser:'mohamedazoz20010',
    dbPassword:'mqrZJhV4IXoxp1Dh'
  }
};

export default nextConfig;
