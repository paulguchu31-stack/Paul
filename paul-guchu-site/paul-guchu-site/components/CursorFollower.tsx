 "use client";

import { useEffect } from "react";

export default function CursorFollower() {
  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return;
    }

    const outer = document.createElement("div");
    const dot = document.createElement("div");

    outer.className = "cursor-follower";
    dot.className = "cursor-follower-dot";

    document.body.appendChild(outer);
    document.body.appendChild(dot);

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;

    const move = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      outer.classList.add("is-visible");
      dot.classList.add("is-visible");
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.16;
      currentY += (mouseY - currentY) * 0.16;

      outer.style.transform =
        `translate3d(${currentX}px, ${currentY}px, 0)`;

      dot.style.transform =
        `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      requestAnimationFrame(animate);
    };

    const enterInteractive = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        target?.closest(
          "a, button, input, textarea, select, [role='button'], .faq-question"
        )
      ) {
        outer.classList.add("is-hovering");
        dot.classList.add("is-hovering");
      }
    };

    const leaveInteractive = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        target?.closest(
          "a, button, input, textarea, select, [role='button'], .faq-question"
        )
      ) {
        outer.classList.remove("is-hovering");
        dot.classList.remove("is-hovering");
      }
    };

    const leaveWindow = () => {
      outer.classList.remove("is-visible");
      dot.classList.remove("is-visible");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", enterInteractive);
    window.addEventListener("mouseout", leaveInteractive);
    window.addEventListener("mouseleave", leaveWindow);

    const frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", enterInteractive);
      window.removeEventListener("mouseout", leaveInteractive);
      window.removeEventListener("mouseleave", leaveWindow);

      outer.remove();
      dot.remove();
    };
  }, []);

  return null;
}
