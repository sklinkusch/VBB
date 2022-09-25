/** @jsxImportSource theme-ui */

type Props = {
  remarks: {
    code: string,
    type: string | null | undefined,
    validFrom: string | null | undefined,
    validUntil: string | null | undefined,
    summary: string,
    text: string
  }[]
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
