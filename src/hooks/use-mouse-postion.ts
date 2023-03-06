import React from "react";

export const useMousePosition = ({
  spinnerRef,
}: {
  isTouch?: boolean;
  spinnerRef: React.RefObject<HTMLElement>;
}) => {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [angle, setAngle] = React.useState(0);

  React.useEffect(() => {
    const trackPosition = (ev: MouseEvent) => {
      setPos({ x: ev.clientX, y: ev.clientY });

      // Get the x and y positions of the mouse
      const mouseX = ev.clientX;
      const mouseY = ev.clientY;

      // Get the position of the element relative to the viewport
      const elemRect = spinnerRef.current?.getBoundingClientRect();

      if (elemRect) {
        const elemX = elemRect.left + elemRect.width / 2;
        const elemY = elemRect.top + elemRect.height / 2;

        setAngle(Math.atan2(mouseY - elemY, mouseX - elemX) * (180 / Math.PI));
      }
    };

    window.addEventListener("mousemove", trackPosition);

    return () => {
      window.removeEventListener("mousemove", trackPosition);
    };
  }, []);

  return { ...pos, angle };
};
