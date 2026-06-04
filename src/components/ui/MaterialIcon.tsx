type MaterialIconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function MaterialIcon({
  name,
  className = "",
  size = 24,
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      style={{ fontSize: size }}
    >
      {name}
    </span>
  );
}
