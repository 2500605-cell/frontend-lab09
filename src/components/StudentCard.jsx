import styles from './StudentCard.module.css';
import Badge from './Badge.jsx';
 
function StudentCard({ name, program = 'BSCS', cgpa, email }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.program}>{program}</p>
      {cgpa ? (
        <p>
          CGPA: {cgpa} <Badge cgpa={cgpa} />
        </p>
      ) : (
        <p className={styles.missing}>CGPA not added yet</p>
      )}
      <p className={styles.email}>{email}</p>
    </div>
  );
}
 
export default StudentCard;
