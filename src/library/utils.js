import BLOG from '../blog.config'

const labels = BLOG.labels || {}
const layouts = BLOG.layouts || {}

export const Configs = {
    author: BLOG.author || 'Anonymous',
    summary: BLOG.summary || 'new blog',
    title: BLOG.title || '36EKB',

    email: BLOG.email ? `mailto:${BLOG.email}` : null,
    github: BLOG.github ? `https://github.com/${BLOG.github}` : null,
    twitter: BLOG.twitter ? `https://twitter.com/${BLOG.twitter}` : null,

    labels: {
        default: labels.default || 'posts',
        latest: labels.latest || 'latest',
        list: labels.list || 'all posts',
    },

    layouts: {
        pageWidth: '750px',
        pageWidthMobile: '88vw',
    },
}