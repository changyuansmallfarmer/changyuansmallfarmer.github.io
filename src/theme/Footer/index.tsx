import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function Footer(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className="container">
          <div className="row">
            {/* 第一栏：关于 */}
            <div className="col col--4">
              <h5 className={styles.footerTitle}>关于</h5>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className={styles.authorContent}>
                  <h6 className={styles.authorName}>知识探索者</h6>
                  <p className={styles.authorBio}>
                    热爱技术，喜欢分享。在这里记录学习笔记、技术心得和生活感悟，与大家共同成长。
                  </p>
                </div>
              </div>
            </div>

            {/* 第二栏：联系方式 */}
            <div className="col col--4">
              <h5 className={styles.footerTitle}>联系方式</h5>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className={styles.contactLabel}>邮箱</span>
                  <a href="mailto:your-email@example.com" className={styles.contactValue}>
                    shao605719056@163.com
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className={styles.contactLabel}>微信公众号</span>
                  <span className={styles.contactValue}>蒲城小农</span>
                </li>
              </ul>
            </div>

            {/* 第三栏：更多 */}
            <div className="col col--4">
              <h5 className={styles.footerTitle}>更多</h5>
              <ul className={styles.footerLinks}>
                <li>
                  <Link to="/docs/intro">知识库</Link>
                </li>
                <li>
                  <Link to="/blog">博客文章</Link>
                </li>
                <li>
                  <Link to="/docs/mermaid-examples">Mermaid示例</Link>
                </li>
                <li>
                  <Link to="https://docusaurus.io/">Docusaurus</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.copyright}>
            Copyright © {new Date().getFullYear()} {siteConfig.title}. Built with ❤️ using Docusaurus.
          </div>
        </div>
      </div>
    </footer>
  );
}
