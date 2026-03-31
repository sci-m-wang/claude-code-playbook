const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/claude-code-playbook' : '',
  assetPrefix: isGithubPages ? '/claude-code-playbook/' : undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
