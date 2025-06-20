import React from 'react';
import './BoardPage.scss';
import ExcalidrawWrapper from '../excalidraw-wrapper/ExcalidrawWrapper';

const BoardPage: React.FC = () => {
  return (
    <div className="board-page-container">
      <ExcalidrawWrapper />
    </div>
  );
};

export default BoardPage;
