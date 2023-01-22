import { ReactNode, useRef, useState, useEffect } from 'react';
import '../../tailwind.css';

/* eslint-disable-next-line */

export interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  isExpanded?: boolean;
}

function Accordion({ title, children, isExpanded }: AccordionProps) {

  const [isExpand, setIsExpand] = useState(false);
  const content = useRef<any>(null);

  useEffect(() => {
    setIsExpand(!!isExpanded);
  }, [isExpanded]);

  const onClick = () => {
    setIsExpand((prevValue) => !prevValue);
  };

  const displayContent = () => {
    return isExpand ? { height: `${content.current?.scrollHeight}px` } : { height: '0' }
  }

  return (
    <div>
      <div onClick={onClick}>{title}</div>
      <div
        ref={content}
        className='overflow-hidden transition-all ease-out duration-200'
        style={displayContent()}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion;
