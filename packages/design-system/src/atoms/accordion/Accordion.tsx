import { ReactNode, useRef, useState, useEffect } from 'react';
import '../../tailwind.css';

/* eslint-disable-next-line */

export interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  isExpanded?: boolean;
  containerClassName?: string;
  titleClassName?: string;
  onClick?: () => void;
}

function Accordion({ title, children, isExpanded, containerClassName, titleClassName, onClick }: AccordionProps) {

  const [isExpand, setIsExpand] = useState(false);
  const content = useRef<any>(null);

  useEffect(() => {
    setIsExpand(!!isExpanded);
  }, [isExpanded]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsExpand((prevValue) => !prevValue);
    }
  };

  const dynamicHeight = () => {
    return isExpand ? { height: `${content.current?.scrollHeight}px` } : { height: '0' }
  }

  const transitionStyle = 'overflow-hidden transition-all ease-out duration-200';

  return (
    <div className={containerClassName}>
      <div onClick={handleClick} className={`cursor-pointer ${titleClassName}`}>{title}</div>
      <div ref={content} className={transitionStyle} style={dynamicHeight()}>
        {children}
      </div>
    </div>
  )
}

export default Accordion;
