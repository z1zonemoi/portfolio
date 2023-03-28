export default function useBodyOverflowScroll() {
  const lockBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const unLockBodyScroll = () => {
    document.body.style.removeProperty("overflow");
  };

  return { lockBodyScroll, unLockBodyScroll };
}
