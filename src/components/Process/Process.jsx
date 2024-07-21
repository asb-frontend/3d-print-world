import React, { useEffect } from "react";
import s from "./Process.module.css";
import Calendar from "../Calendar/Calendar";

const Process = () => {
  useEffect(() => {
    const track = document.getElementById("image-track");

    // Handler for mousedown event
    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        );

      track.dataset.percentage = nextPercentage;

      track.animate(
        {
          transform: `translate(${nextPercentage}%, 0%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    // Add event listeners when component mounts
    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", handleOnMove);

    // Cleanup event listeners when component unmounts
    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", handleOnMove);
    };
  }, []);

  return (
    
    <div
      id="image-track"
      className={s.imageTrack}
      data-mouse-down-at="0"
      data-prev-percentage="0"
    >
      <img
        className={s.image}
        src="https://plus.unsplash.com/premium_photo-1680037568223-9fcccd15dff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        draggable={false}
      ></img>
      <img
        className={s.image}
        src="https://plus.unsplash.com/premium_photo-1680037568223-9fcccd15dff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        draggable={false}
      ></img>
      <img
        className={s.image}
        src="https://plus.unsplash.com/premium_photo-1680037568223-9fcccd15dff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        draggable={false}
      ></img>
      <img
        className={s.image}
        src="https://plus.unsplash.com/premium_photo-1680037568223-9fcccd15dff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        draggable={false}
      ></img>
      <img
        className={s.image}
        src="https://plus.unsplash.com/premium_photo-1680037568223-9fcccd15dff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        draggable={false}
      ></img>
      <img
        className={s.image}
        src="https://plus.unsplash.com/premium_photo-1680037568223-9fcccd15dff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        draggable={false}
      ></img>
      <img
        className={s.image}
        src="https://plus.unsplash.com/premium_photo-1680037568223-9fcccd15dff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        draggable={false}
      ></img>
    </div>
  );
};

export default Process;
