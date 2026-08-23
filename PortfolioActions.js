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
  }]