// Every screen in the prototype, in the order of the guide (the "Prototype guide" button).
export const SCREENS: { group: string; items: { href: string; label: string }[] }[] = [
  {
    group: "Visitor",
    items: [
      { href: "/", label: "Home page" },
      { href: "/how", label: "How it works" },
      { href: "/pricing", label: "Pricing: homeowners" },
      { href: "/agents", label: "For agents" },
      { href: "/pricing/agents", label: "Pricing: agents" },
      { href: "/mission", label: "Our mission" },
      { href: "/pros", label: "Find a pro (public)" },
      { href: "/pros/join", label: "For service pros" },
      { href: "/brokers", label: "Brokers & teams" },
    ],
  },
  {
    group: "New member",
    items: [
      { href: "/start", label: "Get started: who is this for?" },
      { href: "/signup", label: "Create account" },
      { href: "/setup/home", label: "Add your home" },
      { href: "/setup/document", label: "First document" },
      { href: "/setup/score", label: "Your first score" },
      { href: "/signup/agent", label: "Create agent account" },
    ],
  },
  {
    group: "Homeowner",
    items: [
      { href: "/app", label: "Dashboard" },
      { href: "/app/todo", label: "To do" },
      { href: "/app/health", label: "Home health" },
      { href: "/app/health/report", label: "Home Health Score report" },
      { href: "/app/health/improvements", label: "Home improvements report" },
      { href: "/app/vault", label: "Vault" },
      { href: "/app/costs", label: "Costs & estimates" },
      { href: "/app/costs/estimate", label: "HVAC price estimate" },
      { href: "/app/pros", label: "Find a pro" },
      { href: "/app/property", label: "Property details" },
      { href: "/app/help", label: "Help & resources" },
    ],
  },
  {
    group: "Agent",
    items: [
      { href: "/agent", label: "Today" },
      { href: "/agent/clients", label: "Clients" },
      { href: "/agent/vaults", label: "Property vaults" },
      { href: "/agent/alerts", label: "Alerts" },
      { href: "/agent/marketing", label: "Marketing" },
      { href: "/agent/resources", label: "Resources" },
      { href: "/agent/pros", label: "Recommended pros" },
    ],
  },
];
