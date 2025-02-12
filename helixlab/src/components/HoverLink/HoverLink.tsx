import React, { useState } from 'react';
import './styles.css';

const HoverLink = ({ href, svgPath, children, offsetX, offsetY }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // 直接使用视口坐标（fixed定位不需要计算滚动偏移）
    setPosition({
      x: e.clientX + offsetX,
      y: e.clientY - offsetY
    });
  };

  return (
    <span className="hover-link-wrapper">
      <a
        href={href}
        className="hover-link"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
      </a>

      {isHovering && (
        <div 
          className="svg-overlay"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        >
          <img 
            src={svgPath} 
            alt=""
            className="custom-svg"
          />
        </div>
      )}
    </span>
  );
};

export default HoverLink;
