import React from 'react';

export default function Document() {
  return (
    <div className="doc-viewer-container" style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}>
      <h1>Document</h1>
      <iframe
        src="https://drive.google.com/file/d/1qydStZQPnyVnzDjggoWnfltOp5SVk-wN/preview"
        width="100%"
        height="100%"
        style={{ width: '80%', height: '80vh', border: 'none' }}
        allow="autoplay"
      />
    </div>
  );
}
