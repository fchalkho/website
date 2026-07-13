// Outlined X glyph from the Figma "Main" design (node 1:51). Distinct from the
// legacy solid mark used inside the ASCII route. Color is driven by currentColor.
export default function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9.14 7.06L13.6067 1.86666H12.5467L8.66667 6.37333L5.56667 1.86666H2L6.68667 8.68667L2 14.1333H3.06L7.15333 9.37334L10.4267 14.1333H14L9.14 7.06ZM7.69333 8.74667L7.22 8.06667L3.44 2.66666H5.06667L8.11333 7.02667L8.58667 7.70667L12.5467 13.3733H10.92L7.68667 8.74667H7.69333Z"
        fill="currentColor"
      />
    </svg>
  );
}
