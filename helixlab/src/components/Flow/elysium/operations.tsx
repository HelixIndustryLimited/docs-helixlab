import React from 'react';
import { ReactFlow, Controls, Background, MarkerType, Position} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './operations.css';
import Translate from '@docusaurus/Translate';
import CustomEdge1 from './CustomEdge1';
import AnnotationNode from './AnnotationNode';
import Icon from './Icon'


const edgeTypes = {
  customedge1: CustomEdge1,
};

const nodeTypes = {
  annotation: AnnotationNode,
  icon: Icon,
};

const edges = [
  {
    id: '1-2',
    source: '1',
    target: '2',
    label: (
      <Translate id="flow.elysium.operations.1_2">
        USB 数据线已连接
      </Translate>
    ),
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: '1-3',
    source: '1',
    target: '3',
    label: (
      <Translate id="flow.elysium.operations.1_3">
        USB 数据线未连接
      </Translate>
    ),
    type: 'smooth',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: '3-4',
    source: '3',
    target: '4',
    label: (
      <Translate id="flow.elysium.operations.3_4">
        长按 fn+1 三秒左右
      </Translate>
    ),
    type: 'smooth',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: '3-5',
    source: '3',
    target: '5',
    label: (
      <Translate id="flow.elysium.operations.3_5">
        长按 fn+2 三秒左右
      </Translate>
    ),
    type: 'smooth',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: '4-6',
    source: '4',
    target: '6',
    label: (
      <Translate id="flow.elysium.operations.4_6">
        若已配对
      </Translate>
    ),
    type: 'smooth',
    animated: true,
  },
  {
    id: '4-7',
    source: '4',
    target: '7',
    label: (
      <Translate id="flow.elysium.operations.4_7">
        若未配对
      </Translate>
    ),
    type: 'smooth',
    animated: true,
  },
  {
    id: '6-8',
    source: '6',
    target: '8',
    label: (
      <Translate id="flow.elysium.operations.6_8">
        短按 fn+X
      </Translate>
    ),
    type: 'smooth',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: '8-7',
    source: '8',
    target: '7',
    type: 'smooth',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: '7-6',
    source: '7',
    target: '6',
    type: 'customedge1',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

const nodes = [
  {
    id: '1',
    type: 'input',
    draggable: false,
    selectable: true,
    data: {
      label: 'Elysium',
    },
    position: { x: 350, y: 50 },
  },
  {
    id: '2',
    type: 'output',
    draggable: false,
    selectable: true,
    data: {
      label: (
        <Translate id="flow.elysium.operations.2">
          USB 模式
        </Translate>
      ),
    },
    position: { x: 150, y: 200 },
  },
  {
    id: '3',
    type: 'default',
    draggable: false,
    selectable: true,
    data: {
      label: (
        <Translate id="flow.elysium.operations.3">
          无线模式
        </Translate>
      ),
    },
    position: { x: 550, y: 200 },
  },
  {
    id: '4',
    type: 'default',
    draggable: false,
    selectable: true,
    data: {
      label: (
        <Translate id="flow.elysium.operations.4">
          切换到 BLE 模式
        </Translate>
      ),
    },
    sourcePosition: Position.Left,
    position: { x: 400, y: 400 },
  },
  {
    id: '5',
    type: 'output',
    draggable: false,
    selectable: true,
    data: {
      label: (
        <Translate id="flow.elysium.operations.5">
          切换到 2G4 模式
        </Translate>
      ),
    },
    position: { x: 700, y: 400 },
  },
  {
    id: '6',
    type: 'default',
    draggable: false,
    selectable: true,
    data: {
      label: (
        <Translate id="flow.elysium.operations.6">
          连接至已配对的主机
        </Translate>
      ),
    },
    targetPosition: Position.Left,
    position: { x: 450, y: 550 },
  },
  {
    id: '7',
    type: 'default',
    draggable: false,
    selectable: true,
    data: {
      label: (
        <Translate id="flow.elysium.operations.7">
          与新主机配对
        </Translate>
      ),
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: { x: 200, y: 550 },
  },
  {
    id: '8',
    type: 'default',
    draggable: false,
    selectable: true,
    data: {
      label: (
        <Translate id="flow.elysium.operations.8">
          删除已配对的主机
        </Translate>
      ),
    },
    sourcePosition: Position.Left,
    position: { x: 400, y: 700 },
  },
  {
    id: 'annotation-1',
    type: 'annotation',
    draggable: false,
    selectable: false,
    data: {
      label: (
        <Translate id="flow.elysium.operations.annotation-1">
          需要打开电池开关并确保电池有电
        </Translate>
      ),
      arrowStyle: {
        left: 0,
        bottom: 0,
        transform: 'translate(5px, 25px) scale(1, -1) rotate(100deg)',
      },
    },
    position: { x: 710, y: 160 },
  },
  {
    id: 'icon-1',
    type: 'icon',
    data: {
      iconType: 2,
      iconBgColor: '#2196f3',
      iconPosition: {
      top: '-16px',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    iconSize: '1.5rem'
    },
    position: { x: 532, y: 395 },
  },
  {
    id: 'icon-2',
    type: 'icon',
    data: {
      iconType: 3,
      iconBgColor: '#cc9e75',
      iconPosition: {
      top: '-16px',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    iconSize: '1.2rem'
    },
    position: { x: 833, y: 395 },
  },
  {
    id: 'icon-3',
    type: 'icon',
    data: {
      iconType: 1,
      iconBgColor: '#363636',
      iconPosition: {
      top: '-16px',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    iconSize: '1.2rem'
    },
    position: { x: 282, y: 196 },
  }
];

function Flow() {
  return (
    <div style={{ height: '100%' }}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{   // ✅ 可选的配置参数
          padding: 0.2,     // 边距比例 (0-1)
          duration: 800,    // 过渡动画时间(ms)
          includeHiddenNodes: false
        }}             
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;