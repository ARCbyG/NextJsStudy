/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
            {
                // 들어오는 요청경로
                source:"/",

                // 라우팅 하려는 경로
                // destination:'/page/main',
                destination:'/main',

                // 브라우저나 검색엔진이 이 정보를 기억할지 여부
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
