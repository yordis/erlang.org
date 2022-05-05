type IrcChatIconProps = { className?: string } & Omit<JSX.IntrinsicElements['svg'], 'viewBox' | 'fill'>;

export function IrcChatIcon(props: IrcChatIconProps) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <title>IRC Chat Icon</title>
      <path d="M22.548 9l.452-2h-5.364l1.364-6h-2l-1.364 6h-5l1.364-6h-2l-1.364 6h-6.184l-.452 2h6.182l-1.364 6h-5.36l-.458 2h5.364l-1.364 6h2l1.364-6h5l-1.364 6h2l1.364-6h6.185l.451-2h-6.182l1.364-6h5.366zm-8.73 6h-5l1.364-6h5l-1.364 6z" />
    </svg>
  );
}
