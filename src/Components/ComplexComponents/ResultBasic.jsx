import React from 'react';

const ResultBasic = ({ title, content }) => {
  return (
    <div style={{ width: '100%', height: '100%', padding: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
      <div style={{ alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
        <div style={{ alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'flex' }}>
          <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '20px', fontFamily: 'Pretendard', fontWeight: '600', lineHeight: '23px', wordWrap: 'break-word' }}>
            {title}
          </div>
          <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '29px', wordWrap: 'break-word' }}>
            {content}
          </div>
        </div>
        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
            <img 
                style={{ width: '16px', height: '16px' }} 
                src="/images/star.svg" 
                alt="Logo img" 
            />
        </div>
      </div>
    </div>
  );
};

export default ResultBasic;