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

const Status = (props: Props) => {
  const { remarks } = props;
  for (let i = 0; i < remarks.length; i++) {
    const { type, text } = remarks[i];
    if (type === "status") {
      return (
        <div className="status" sx={{ textAlign: "center", gridColumn: ["19 / span 6", "24 / span 1"]}}>
          <span className="fas fa-times" title={text} />
        </div>
      );
    }
  }
  return <div className="status" sx={{ textAlign: "center", gridColumn: ["19 / span 6", "24 / span 1"]}} />;
};

export default Status;
