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

const Status = (props: Props) => {
  const { remarks } = props;
  for (let i = 0; i < remarks.length; i++) {
    const { type, text } = remarks[i];
    if (type === "status") {
      return (
        <div className="status" sx={{ textAlign: "center", gridColumn: ["19 / span 6", "24 / span 1"] }}>
          <span className="fas fa-times" title={text} />
        </div>
      );
    }
  }
  return <div className="status" sx={{ textAlign: "center", gridColumn: ["19 / span 6", "24 / span 1"] }} />;
};

export default Status;
