import { isNil } from 'lodash';
import React, { useEffect } from 'react';
import './styles.css';

import Draggable from 'react-draggable';

const MovablePopover = (props) => {

  return (
    <div>
      {props.isVisible === true ? (
        <Draggable
        onStop={()=>{
        props.onStopPopoverMovement();
        }}
        onStart={()=>{
            props.onStartPopoverMovement();
        }}
        >
          <div        
            className={`react-draggable ${props.moveTo === "left" ? "animated-moveto-left" : 
            props.moveTo === "right" ? "animated-moveto-right" : 
            props.moveTo === "down" ? "animated-moveto-down" :
            props.moveTo === "up" ? "animated-moveto-up" : null
             }`}
            id={props.popoverId}
            style={{
              cursor: 'move',
              visibility: 'visible',
              width: '30rem',
              position: 'fixed',
              borderRadius: '1rem',
              border: '1px solid black',
              backgroundColor: props.backgroundColor,
              padding: '.5rem',
              zIndex: props.zIndex,
              top: props.topPosition,
              right: props.rightPosition,
            }}
          >
            {props.content}
          </div>
        </Draggable>
      ) : null}
    </div>
  );
};

const defaultProps = {
  topPosition: '75px',
  rightPosition: '100px',
  zIndex: '1030',
  moveTo: 'left',
  backgroundColor: 'white',
  onStartPopoverMovement: () => {},
  onStopPopoverMovement: () => {},
  id: 'movable-popover',
};

MovablePopover.defaultProps = defaultProps;

export default MovablePopover;
