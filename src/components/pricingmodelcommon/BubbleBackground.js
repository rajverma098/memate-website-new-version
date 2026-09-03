'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

const defaultColors = {
  first: '18,113,255',
  second: '221,74,255',
  third: '0,220,255',
  fourth: '200,50,50',
  fifth: '180,180,50',
  sixth: '140,100,255',
};

const BubbleBackground = React.forwardRef(function BubbleBackground(
  {
    className,
    children,
    interactive = false,
    transition = { stiffness: 100, damping: 20 },
    colors = defaultColors,
    style,
    ...props
  },
  ref,
) {
  const containerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => containerRef.current);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, transition);
  const springY = useSpring(mouseY, transition);

  const rectRef = React.useRef(null);
  const rafIdRef = React.useRef(null);

  const rawId = React.useId();
  const filterId = React.useMemo(() => `goo${rawId.replace(/:/g, '')}`, [rawId]);

  React.useLayoutEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        rectRef.current = containerRef.current.getBoundingClientRect();
      }
    };

    updateRect();

    const el = containerRef.current;
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateRect) : null;
    if (el && ro) ro.observe(el);

    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true });

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, []);

  React.useEffect(() => {
    if (!interactive) return;

    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = rectRef.current;
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      });
    };

    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [interactive, mouseX, mouseY]);

  const cssVars = {
    '--first-color': colors.first,
    '--second-color': colors.second,
    '--third-color': colors.third,
    '--fourth-color': colors.fourth,
    '--fifth-color': colors.fifth,
    '--sixth-color': colors.sixth,
  };

  return (
    <div
      ref={containerRef}
      data-slot="bubble-background"
      className={cx('bubbleBackgroundRoot', className)}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        ...cssVars,
        ...style,
      }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: 0, height: 0 }}
        aria-hidden="true"
      >
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          filter: `url(#${filterId}) blur(40px)`,
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '80%',
            height: '80%',
            borderRadius: 9999,
            mixBlendMode: 'hard-light',
            background:
              'radial-gradient(circle at center, rgba(var(--first-color),0.8) 0%, rgba(var(--first-color),0) 50%)',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
          animate={{ y: [-50, 50, -50] }}
          transition={{ duration: 30, ease: 'easeInOut', repeat: Infinity }}
        />

        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transformOrigin: 'calc(50% - 400px) 50%',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <div
            style={{
              width: '80%',
              height: '80%',
              borderRadius: 9999,
              mixBlendMode: 'hard-light',
              background:
                'radial-gradient(circle at center, rgba(var(--second-color),0.8) 0%, rgba(var(--second-color),0) 50%)',
            }}
          />
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transformOrigin: 'calc(50% + 400px) 50%',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          <div
            style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              borderRadius: 9999,
              mixBlendMode: 'hard-light',
              background:
                'radial-gradient(circle at center, rgba(var(--third-color),0.8) 0%, rgba(var(--third-color),0) 50%)',
              top: 'calc(50% + 200px)',
              left: 'calc(50% - 500px)',
            }}
          />
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '80%',
            height: '80%',
            borderRadius: 9999,
            mixBlendMode: 'hard-light',
            background:
              'radial-gradient(circle at center, rgba(var(--fourth-color),0.8) 0%, rgba(var(--fourth-color),0) 50%)',
            opacity: 0.7,
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 40, ease: 'easeInOut', repeat: Infinity }}
        />

        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transformOrigin: 'calc(50% - 800px) calc(50% + 200px)',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
          <div
            style={{
              position: 'absolute',
              width: '160%',
              height: '160%',
              borderRadius: 9999,
              mixBlendMode: 'hard-light',
              background:
                'radial-gradient(circle at center, rgba(var(--fifth-color),0.8) 0%, rgba(var(--fifth-color),0) 50%)',
              top: 'calc(50% - 80%)',
              left: 'calc(50% - 80%)',
            }}
          />
        </motion.div>

        {interactive && (
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 9999,
              mixBlendMode: 'hard-light',
              background:
                'radial-gradient(circle at center, rgba(var(--sixth-color),0.8) 0%, rgba(var(--sixth-color),0) 50%)',
              opacity: 0.7,
              x: springX,
              y: springY,
              transform: 'translateZ(0)',
              willChange: 'transform',
            }}
          />
        )}
      </div>

      {children}
    </div>
  );
});

export { BubbleBackground };

