/** @jsxImportSource theme-ui */

interface Remark {
  code: string
  type: string
  validFrom: string
  validUntil: string
  summary: string
  text: string
}

interface Props {
  remarks: Remark[]
}

export default function Stattext(props: Props) {
  const { remarks } = props
  const statuses = remarks.filter(remark => remark.type === "status");
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
