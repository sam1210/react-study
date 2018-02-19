import React from 'react'


function RenderingTag (props) {
  if (props.renderChk == true) {
    return (
      <div>
        <p>{props.renderName}</p>
      </div>
    );
  }else {
    return (
      <div>
        <p>テキスト入力後「rendering」クリックして！</p>
      </div>
    );
  }
}


export default RenderingTag
