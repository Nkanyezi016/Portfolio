/* ============ DATA ============ */
const GRADIENTS = [
  "linear-gradient(135deg,#667eea,#764ba2)",
  "linear-gradient(135deg,#f093fb,#f5576c)",
  "linear-gradient(135deg,#4facfe,#00f2fe)",
  "linear-gradient(135deg,#43e97b,#38f9d7)",
  "linear-gradient(135deg,#fa709a,#fee140)",
  "linear-gradient(135deg,#30cfd0,#330867)",
];

const PROJECTS = [
  {
    id:"sentinel",
    emoji:"🛡️",
    title:"Sentinel AI",
    caption:"An intelligent monitoring &amp; analysis system built to flag what humans miss, before it becomes a problem.",
    hashtags:"#AI #Python #Automation #MachineLearning",
    tech:["Python","AI/ML","Automation"],
    role:"Solo build",
    status:"In development",
    github:"https://github.com/Nkanyezi016",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"The core idea: continuous monitoring that reasons about what it sees instead of just logging it, then surfaces the alerts that actually matter."},
      {who:"code_reviewer", text:"Clean separation between the detection logic and the alerting layer 👏"},
    ],
    case:{
      problem:"Manual monitoring doesn't scale — important signals get buried in noise, and by the time a human notices, the moment to act has often passed.",
      approach:"Designed a Python-based pipeline that watches for meaningful patterns rather than raw events, applying lightweight AI-driven analysis to separate signal from noise before anything reaches a human.",
      result:"A foundation for a monitoring tool that flags what matters instead of everything — built to be extended with new detectors as new patterns emerge."
    }
  },
 {
    id:"robotworlds",
    emoji:"🤖",
    title:"Robot Worlds",
    caption:"Built a client-server robot simulation using Java — multiple robots, one shared world, real-time state.",
    hashtags:"#Java #OOP #SQLite #Docker #Networking",
    tech:["Java","OOP","SQLite","Docker","Sockets"],
    role:"Solo build",
    status:"Complete",
    github:"https://github.com/Nkanyezi016/MultiplayerRobotGame.git",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"A client-server simulation where robots move, look, and shoot inside a shared grid world. The server owns the world state; clients just send commands and render responses."},
      {who:"code_reviewer", text:"Love how cleanly the protocol layer is separated from the game logic 🔥"},
    ],
    case:{
      problem:"Simulating multiple independent robots that share and affect the same world in real time, without any client trusting another client's data.",
      approach:"Built a Java client-server architecture: the server is the single source of truth for world state and persists it via SQLite, while each client only knows what its own robot can 'see'. Object-oriented design keeps robot behaviours, obstacles, and commands cleanly separated, and the whole thing runs in Docker for consistent environments.",
      result:"A working multiplayer simulation that demonstrates solid networking, concurrency-safe state handling, and OOP architecture end to end."
    }
  }]