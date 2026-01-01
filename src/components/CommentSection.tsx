import React from 'react';
import Giscus from '@giscus/react';

export default function CommentSection() {
  return (
    <div style={{ marginTop: '3rem' }}>
      <Giscus
        id="comments"
        repo="your-username/your-repo" // 替换为你的 GitHub 仓库
        repoId="your-repo-id" // 替换为你的仓库 ID
        category="Announcements"
        categoryId="your-category-id" // 替换为你的分类 ID
        mapping="pathname"
        term="Comments"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
