import React, { useState, useEffect } from 'react';
import "../assets/stylepages/homepage.css"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Thêm lắng nghe cho sự kiện cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Hủy lắng nghe khi component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Xử lý sự kiện click cho nút scroll-to-top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
