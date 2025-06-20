import React from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import './ExcalidrawWrapper.scss'; // To be created

const ExcalidrawWrapper: React.FC = () => {
  return (
    <div className="excalidraw-wrapper-container">
      <Excalidraw />
    </div>
  );
};

export default ExcalidrawWrapper;
