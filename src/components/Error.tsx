/** @jsxImportSource theme-ui */

type Props = any

export default function Error(props: Props) {
  return (
    <p className="error" sx={{ color: "red", fontWeight: "bold" }}>Your request could not be handled by the server.</p>
  );
}
