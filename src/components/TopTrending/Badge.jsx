export const Badge = ({ content, wrapperStyle }) => {
  return (
    <button
      style={{
        padding: "4.5px 10px",
        fontSize: "12px",
        lineHeight: "16.2px",
        border: "none",
        borderRadius: "20px",
        color: "var(--white-100)",
        maxWidth: "fit-content",
        marginBottom: "3px",
        ...wrapperStyle,
      }}
    >
      {content}
    </button>
  );
};
