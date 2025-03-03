import React, { useState, useCallback } from 'react';
import './styles.css';

interface Props {
  content: string | React.ReactNode;
  offsetX?: number;
  offsetY?: number;
  linkStyle?: React.CSSProperties;
  maxWidth?: number;
}

const HoverLinkText = ({ 
  content,
  offsetX = 20,
  offsetY = 30,
  linkStyle = {},
  maxWidth = 600
}: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const baseX = e.clientX;
    const baseY = e.clientY;
  
    // 动态测量内容尺寸
    const tempDiv = document.createElement('div');
    tempDiv.style.cssText = `
      position: absolute;
      visibility: hidden;
      white-space: pre-wrap;
      max-width: ${maxWidth}px;
      min-width: 120px;
      padding: 12px 16px;
      font: 14px system-ui;
    `;
    tempDiv.textContent = typeof content === 'string' ? content : '';
    document.body.appendChild(tempDiv);
    
    // 获取预测尺寸
    const tooltipWidth = Math.min(tempDiv.offsetWidth, maxWidth);
    const tooltipHeight = tempDiv.offsetHeight;
    document.body.removeChild(tempDiv);
  
    // 水平边界检测
    const adjustedX = baseX + tooltipWidth > viewportWidth 
      ? viewportWidth - tooltipWidth - 10 // 保留安全边距
      : baseX;
  
    // 垂直边界检测
    const adjustedY = baseY + tooltipHeight > viewportHeight
      ? viewportHeight - tooltipHeight - 10 // 底部防溢出
      : baseY;
  
      setPosition({
        x: adjustedX + 10,  // 添加视觉偏移补偿
        y: baseY + 20        // 确保悬浮窗底部对齐指针
      });
    }, [maxWidth, content]);

  return (
    <span className="hover-link-wrapper">
      <span 
        className="pseudo-link"
        style={linkStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        role="button"
        tabIndex={0}
      >
        more..
      </span>

      {isHovering && (
        <div 
          className="text-overlay"
          style={{ 
            left: position.x,
            top: position.y,
            maxWidth: maxWidth
          }}
        >
          <div className="text-content">
            {content}
          </div>
        </div>
      )}
    </span>
  );
};

export default HoverLinkText;