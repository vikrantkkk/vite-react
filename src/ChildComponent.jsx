// import React from 'react'

// const ChildComponent = (props) => {
//     console.log(props)
//   return (
//     <div>Hello {props.firstName}</div>
//   )
// }
// export default ChildComponent

import React from 'react'

export const ChildComponent = ({style}) => {
    console.log(style);
    
  return (
    <div style={style}>ChildComponent</div>
  )
}
