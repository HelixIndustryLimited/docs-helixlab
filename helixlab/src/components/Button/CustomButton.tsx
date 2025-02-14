import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import './styles.css'

const CustomButton = ({ children, href, target = '_self' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDisabled = !href && React.Children.count(children) === 0;

  const buttonContent = isDisabled ? 'N/A' : children;

  return (
    <a
      href={isDisabled ? undefined : href}
      target={isDisabled ? undefined : target}
      rel={target === '_blank' ? 'noopener noreferrer' : ''}
      className="custom-button-link"
      style={{
        display: 'inline-block',
        textDecoration: 'none',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
      }}
      onClick={(e) => {
        if (isDisabled) e.preventDefault();
      }}
    >
      <button
        className="custom-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={isDisabled}
        style={{
          backgroundColor: isDisabled 
            ? isHovered 
              ? 'rgba(255, 0, 0, 0.7)'  // 红色背景带透明度
              : 'rgba(0, 0, 0, 0.36)'    // 灰色禁用状态
            : isHovered 
            ? '#cc9e75' 
            : 'var(--btn-bg)',
          borderRadius: '6px',
          color: isDisabled ? '#444' : 'white',
          fontSize: '12px',
          padding: '10px 20px',
          border: 'none',
          cursor: 'inherit',  // 继承父级cursor设置
          position: 'relative',
          overflow: 'hidden',
          transition: [
            'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            'transform 0.1s ease-out',
            'opacity 0.1s ease-out'
          ].join(','),
          display: 'block',
          width: '100%',
          opacity: isDisabled ? 0.7 : 1,
        }}
      >
        <span
          style={{
            display: 'inline-block',
            transition: 'opacity 0.3s ease',
            opacity: isHovered && !isDisabled ? 0 : 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {buttonContent}
        </span>
        
        {/* 仅在可用状态显示下载图标 */}
        {!isDisabled && (
          <FontAwesomeIcon
            icon={faCircleDown}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, ${isHovered ? '-50%' : '100%'})`,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isHovered ? 1 : 0,
              fontSize: '1.2em',
            }}
          />
        )}
      </button>
    </a>
  );
};

CustomButton.defaultProps = {
  target: '_self'
};

export default CustomButton;
