
function Projects() {
  const projects = [
    { Name: "Simple Chat App", Desc: "Developed an simple chat app with real time messaging using react js, node js, express js, socket.io and postgreSQL. This app includes feature like real time messaging, user authentication, and message history." },
    { Name: "Todo App", Desc: "Developed an todo app using React for practice. This app includes feature like making a todo list, adjusting the priority level, complete and deletion options"},
  ];

  return (
    <section style={styles.section}>
      <h2>Projects</h2>
      <ul style={styles.list}>
      {projects.map((pro, index) => (
  <li key={index} style={styles.listItem}>
    {index === 0 ? (
      <a href="https://shafaqulhamim.github.io/todo-app/" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{textDecoration: "none" }}>
        <h3 style={{ color: "white" }}>{pro.Name}</h3>
      </a>
    ) : (
      <h3>{pro.Name}</h3>
    )}
    <p>{pro.Desc}</p>
  </li>
))}
      </ul>
      <hr style={styles.line} />
    </section>
  );
}

const styles = {
  section: {
    padding: "20px",
    textAlign: "left",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "#fff",
    //maxWidth: "800px",
    margin: "20px auto",
    borderRadius:"15px",
    marginBottom: "20px"
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "15px",
  },
  company: {
    fontWeight: "bold",
  },
  role: {
    margin: "5px 0",
  },
  years: {
    color: "#666",
  },
  line: {
    border: "none",
    borderTop: "2px solid rgba(255, 255, 255, 0.2)",
    marginTop: "20px",
    width: "100%",
  },
};

export default Projects;
