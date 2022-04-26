import { memo } from "react";

export interface MemoProps {
  onIncrease: () => void;
}

const MemoComponent = ({ onIncrease }: MemoProps) => {
  console.log("re-render");
  return (
    <>
      <div>Hello World</div>
      <button onClick={onIncrease}>Click me</button>
    </>
  );
};

/**
 * memo nhận vào 1 component.
 * so sánh preProps với nextProps ===, => có render lại component hay không?
 */

export default memo(MemoComponent);
