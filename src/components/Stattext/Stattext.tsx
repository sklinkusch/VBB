/** @jsxImportSource theme-ui */

type Remarks = {
  text: string | undefined,
  type: string | undefined,
}[]

type Props = {
  remarks: Remarks
}

export default function Stattext(props: Props) {
  const statuses = props.remarks.filter(remark => remark.type === "status");
  if (statuses.length > 0) {
    return (
      <div className="stattext" sx={{ textAlign: "justify", gridColumn: "2 / span 22" }}>
        {statuses.map((status, index) => (
          <p key={index}>
            <span className="fas fa-times" />
            {status.text}
          </p>
        ))}
      </div>
    );
  }
  return null;
}
