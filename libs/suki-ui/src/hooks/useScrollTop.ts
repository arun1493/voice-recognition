import { useState } from "react";

function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = (event: React.UIEvent<HTMLElement>) => setScrollTop((event.target as HTMLElement).scrollTop);
  return [scrollTop, { onScroll }];
}

export { useScrollTop };
