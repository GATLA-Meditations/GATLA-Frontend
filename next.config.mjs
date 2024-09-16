import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    },
};

export default withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
})(nextConfig);
