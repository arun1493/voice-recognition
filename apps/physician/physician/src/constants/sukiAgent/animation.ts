const RING_ANIMATION_DURATION = 1;

const RING_BASE_OPACITY = 1;

const RING_OPACITY_INDEX = 0.1;

const RING_SCALE = 1.2;

const SINGLE_RING_VARIANTS = {
  oscillate: {
    opacity: 0.4,
    scale: RING_SCALE,
    transition: {
      from: 1,
      yoyo: Infinity,
      duration: RING_ANIMATION_DURATION,
      type: "tween",
      ease: "easeInOut"
    }
  }
};

export { RING_ANIMATION_DURATION, RING_BASE_OPACITY, RING_OPACITY_INDEX, RING_SCALE, SINGLE_RING_VARIANTS };
