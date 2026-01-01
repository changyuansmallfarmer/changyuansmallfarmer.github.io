import React from 'react';
import styles from './Contact.module.css';

interface ContactProps {
  isFooter?: boolean;
}

export default function Contact({ isFooter = false }: ContactProps) {
  const containerClass = isFooter ? styles.footerContact : '';
  return (
    <div className={`${styles.contactSection} ${containerClass}`}>
      <h3 className={styles.contactTitle}>保持联系</h3>
      <p className={styles.contactSubtitle}>随时欢迎交流与合作</p>
      <div className={styles.contactList}>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          <div className={styles.contactInfo}>
            <span className={styles.contactLabel}>邮箱</span>
            <a href="mailto:your-email@example.com" className={styles.contactValue}>
              your-email@example.com
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          <div className={styles.contactInfo}>
            <span className={styles.contactLabel}>微信公众号</span>
            <span className={styles.contactValue}>your-wechat-id</span>
          </div>
        </div>

        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </div>
          <div className={styles.contactInfo}>
            <span className={styles.contactLabel}>GitHub</span>
            <a href="https://github.com/yourusername" className={styles.contactValue}>
              github.com/yourusername
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
