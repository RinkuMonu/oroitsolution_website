let lockCount = 0;

/** Reference-counted scroll lock so overlapping drawers and modals never unlock prematurely. */
export function acquireScrollLock() {
  lockCount += 1;
  if (lockCount === 1) {
    document.documentElement.style.overflow = 'hidden';
  }
  return () => {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
      document.documentElement.style.overflow = '';
    }
  };
}
