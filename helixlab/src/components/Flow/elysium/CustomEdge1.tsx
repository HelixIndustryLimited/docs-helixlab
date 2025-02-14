import React from 'react';
import {
  getBezierPath,
  BaseEdge,
  type EdgeProps,
} from '@xyflow/react';

export type GetSpecialPathParams = {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
};

export const getSpecialPath = (
  { sourceX, sourceY, targetX, targetY }: GetSpecialPathParams,
  offset: number,
) => {
  const centerX = (sourceX + targetX) / 2;
  const centerY = (sourceY + targetY) / 2;

  return `M ${sourceX} ${sourceY} Q ${centerX} ${
    centerY + offset
  } ${targetX} ${targetY}`;
};

export default function CustomEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
}: EdgeProps) {
  // 移除双向边检测逻辑
  const offset = sourceX < targetX ? 25 : -25;
  const path = getSpecialPath(
    { sourceX, sourceY, targetX, targetY },
    offset
  );

  return <BaseEdge path={path} markerEnd={markerEnd} />;
}
