/* eslint-disable no-unused-vars */
export function TimelineItem({ line, icon: Icon, children, removeSpace }) {
  return (
    <div className="flex items-start relative">
      {line && (
        <div className="w-9 start-0 top-9 absolute bottom-0 rtl:-translate-x-1/2 translate-x-1/2 border-s border-s-input"></div>
      )}
      <div className="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-input size-9 text-secondary-foreground">
        <Icon size={16} className="text-base" />
      </div>
      <div className={`ps-2.5 ${!removeSpace ? 'mb-7' : ''} text-base grow`}>
        {children}
      </div>
    </div>
  );
}
