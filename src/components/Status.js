/** @jsxImportSource theme-ui */

const Status = props => {
  const styles = { textAlign: "center", gridColumn: ["19 / span 6", "24 / span 1"]}
  const { remarks } = props;
  for (let i = 0; i < remarks.length; i++) {
    const { type, text } = remarks[i];
    if (type === "status") {
      return (
        <div className="status" sx={{ ...styles }}>
          <span className="fas fa-times" title={text} />
        </div>
      );
    }
  }
  return <div className="status" sx={{ ...styles }} />;
};

export default Status;
