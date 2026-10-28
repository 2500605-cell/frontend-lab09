function Badge({ cgpa }) {
  let label = 'Average';
  let color = '#e67e22';
  if (cgpa >= 3.5) {
    label = 'Excellent';
    color = '#0e8c4c';
  } else if (cgpa >= 3.0) {
    label = 'Good';
    color = '#2f6fd6';
  }
 
  const style = {
    backgroundColor: color,
    color: 'white',
    padding: '2px 10px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  };
 
  return <span style={style}>{label}</span>;
}
 
export default Badge;
