// test.js
fetch('https://nextjs-docs-henna-six.vercel.app/xm.mdx', {
  // 强制使用 IPv4
  family: 4,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
})
  .then(res => res.text())
  .then(data => console.log('成功获取，长度:', data.length))
  .catch(err => console.error('错误:', err.message));