function Projects() {
  const projects = [
    { 
      "Name": "TKT-Pro", 
      "Desc": "Developed a role-based service ticket management system using React.js, Node.js, Express.js, Socket.IO, and PostgreSQL. The app features user authentication, role-specific permissions (Admin, Manager, Engineer, Customer), equipment and customer management, ticket creation and assignment, status tracking, comments, notifications, and real-time updates.",
      "Link": "https://github.com/Shafaqulhamim/TickT-Pro"
    },
    { 
      "Name": "Simple Chat App", 
      "Desc": "Developed a simple chat app with real time messaging using React.js, Node.js, Express.js, Socket.IO, and PostgreSQL. This app includes features like real time messaging, user authentication, and message history.",
      "Link": "https://github.com/Shafaqulhamim/chat-app"
    },
    { 
      "Name": "Todo App", 
      "Desc": "Developed a todo app using React for practice. This app includes features like making a todo list, adjusting the priority level, complete and deletion options",
      "Link": "https://shafaqulhamim.github.io/todo-app/"
    },
  ];

  return (
    <section style={styles.section}>
      <h2>Projects</h2>
      <ul style={styles.list}>
        {projects.map((pro, index) => (
          <li key={index} style={styles.listItem}>
            <a 
              href={pro.Link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: "none" }}
            >
              <h3 style={{ color: "white" }}>{pro.Name}</h3>
            </a>
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
    margin: "20px auto",
    borderRadius: "15px",
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
