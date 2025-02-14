import React from 'react';
import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluetooth } from '@fortawesome/free-brands-svg-icons';
import { faUsb } from '@fortawesome/free-brands-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

const ICON_MAP = {
  1: faUsb,
  2: faBluetooth,
  3: faWifi
};

function AnnotationNode({ data }) {
  const selectedIcon = ICON_MAP[data.iconType] || faUsb;

  return (
    <div className="icon-container">
      {/* 图标容器 - 添加背景色参数 */}
      <div 
        className="icon-wrapper" 
        style={{
          ...data.iconPosition,
          background: data.iconBgColor || '#000', // 新增背景色参数
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <FontAwesomeIcon 
          icon={selectedIcon}
          style={{ 
            fontSize: data.iconSize || '1rem',
            color: data.iconColor || '#fff'
          }}
        />
      </div>

      {/* 内容部分保持不变 */}
      <div className='annotation-content'>
        {data.level && <div className='annotation-level'>{data.level}.</div>}
        <div>{data.label}</div>
      </div>
    </div>
  );
}

export default memo(AnnotationNode);
