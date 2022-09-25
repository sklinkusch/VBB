/** @jsxImportSource theme-ui */

type Remarks = {
  categories: number[] | undefined,
  code: string | undefined,
  company: string | undefined,
  icon: {
    title: string | null | undefined,
    type: string | undefined
  },
  id: string | undefined,
  modified: string | undefined,
  priority: number | undefined | null,
  products: {
    bus: boolean | undefined,
    express: boolean | undefined,
    ferry: boolean | undefined,
    regional: boolean | undefined,
    suburban: boolean | undefined,
    subway: boolean | undefined,
    tram: boolean | undefined
  },
  summary: string | null | undefined,
  text: string,
  type: string,
  validFrom: string | undefined,
  validUntil: string | undefined
}[]

type Props = {
  remarks: Remarks
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
