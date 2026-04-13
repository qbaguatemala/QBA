import React, { useState, useEffect } from 'react';
import './InstagramGrid.css';

import fallbackImages from '../data/instagram-fallback.json';

const InstagramGrid = () => {
  const [images, setImages] = useState(fallbackImages);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const beholdUrl = process.env.REACT_APP_BEHOLD_URL;
      if (!beholdUrl) return;

      try {
        const response = await fetch(beholdUrl);
        const data = await response.json();
        const postArray = Array.isArray(data) ? data : (data.posts || data.data || []);

        if (postArray && postArray.length > 0) {
          const posts = postArray.slice(0, 4);

          const formattedImages = posts.map((post, index) => {
            let className = "bento-item";
            if (index === 0) className = "bento-item main-item";
            if (index === 3) className = "bento-item wide-item";

            return {
              id: post.id || index,
              className: className,
              src: post.thumbnailUrl || post.thumbnail_url || post.mediaUrl || post.media_url,
              alt: post.caption || "Post de Instagram de Qba"
            };
          });

          if (formattedImages.length > 0) {
            setImages(formattedImages);
          }
        }
      } catch (error) {
        console.error('Error fetching Instagram posts from Behold:', error);
      }
    };

    fetchInstagramPosts();
  }, []);
  return (
    <section className="insta-section">
      <div className="container">
        <div className="insta-header">
          <h2 className="insta-title">Sigue nuestra historia en Instagram</h2>
          <a href="https://www.instagram.com/qbaguatemala" target="_blank" rel="noopener noreferrer" className="insta-handle">@qbaguatemala</a>
        </div>
        <div className="insta-grid">
          {images.map(image => (
            <div key={image.id} className={image.className}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
