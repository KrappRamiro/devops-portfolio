export const HERO_CONTENT = "Hi! Im Ramiro Krapp. You may find information about me in this webpage. I mainly do DevOps.";

export const ABOUT_TEXT = "DevOps Engineer with 3+ years of experience building CI/CD pipelines, orchestrating containers with Kubernetes, and provisioning cloud infrastructure on AWS and GCP. Currently working at GoCloud. Background in software development spanning IoT, web, and backend systems. Comfortable across Python, Rust and Javascript";

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud' },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', category: 'cloud' },
  // { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud' },

  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers' },
  { name: 'Docker Compose', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg', category: 'containers' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers' },
  { name: 'Helm', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/helm.svg', category: 'containers' },
  { name: 'OpenShift', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/redhatopenshift.svg', category: 'containers' },

  // Infrastructure as Code
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure' },
  { name: 'OpenTofu', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/opentofu.svg', category: 'infrastructure' },
  { name: 'Nix', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nixos/nixos-original.svg', category: 'infrastructure' },

  // Web Servers & Reverse Proxies
  { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', category: 'networking' },
  { name: 'Traefik', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/traefikproxy.svg', category: 'networking' },

  // Embedded & IoT
  { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', category: 'embedded' },
  { name: 'ESP8266/32', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/espressif.svg', category: 'embedded' },
  { name: 'KiCad', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kicad.svg', category: 'embedded' },
  { name: 'MQTT', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mqtt.svg', category: 'embedded' },

  // DevOps / Automation
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops' },
  { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'devops' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops' },
  { name: 'Azure DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg', category: 'devops' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops' },
  { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops' },
  { name: 'SonarQube', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg', category: 'devops' },

  // Monitoring
  { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'monitoring' },
  { name: 'Prometheus', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/prometheus.svg', category: 'monitoring' },
  { name: 'CloudWatch', icon: 'https://www.vectorlogo.zone/logos/amazon_cloudwatch/amazon_cloudwatch-icon.svg', category: 'monitoring' },

  // Programming
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'programming' },
  { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', category: 'programming' },
  { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg', category: 'programming' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'programming' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'programming' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'programming' },
  { name: 'FastAPI', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fastapi.svg', category: 'programming' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'programming' },

  // Databases
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'database' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database' },
];

export const PROJECTS = [
  {
    title: 'meli-proxy',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Rate-limited API proxy for MercadoLibre, originally built as a tech challenge. Configurable rules per IP, path, or both, backed by Redis for shared state. Packaged with Docker Compose for local dev and Helm charts for Kubernetes deploys, with Prometheus metrics and healthchecks wired in.',
    technologies: ['Python', 'FastAPI', 'Redis', 'Docker', 'Kubernetes', 'Helm', 'Prometheus'],
    category: 'devops',
    githubLink: 'https://github.com/KrappRamiro/meli-proxy',
    websiteLink: '',
  },
  {
    title: 'nixos-config',
    image: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Multi-host NixOS configuration using Nix flakes. Declarative system setup, fully reproducible across machines, with a modular layout that separates hosts from reusable modules. Justfile drives the common operations (rebuild, update, switch).',
    technologies: ['Nix', 'NixOS', 'Flakes', 'Linux', 'Just'],
    category: 'devops',
    githubLink: 'https://github.com/KrappRamiro/nixos-config',
    websiteLink: '',
  },
  {
    title: 'krappvim',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Personal Neovim configuration written in Lua and packaged as a Nix flake module, so the editor follows the same reproducibility rules as the rest of the system. Selene for linting and Stylua for formatting keep the config tidy.',
    technologies: ['Neovim', 'Lua', 'Nix', 'Flakes'],
    category: 'devops',
    githubLink: 'https://github.com/KrappRamiro/krappvim',
    websiteLink: '',
  },
  {
    title: 'Personal Portfolio on Cloudflare Pages + OpenTofu',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'This very site. Vite + React + TypeScript frontend deployed to Cloudflare Pages. Infrastructure (Pages project, custom domain, DNS records) managed declaratively with OpenTofu and the Cloudflare provider.',
    technologies: ['Cloudflare Pages', 'OpenTofu', 'Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'devops',
    githubLink: 'https://github.com/KrappRamiro/devops-portfolio',
    websiteLink: 'https://krapp.dev',
  },
];

export const CONTACT = {
  address: 'CABA, Argentina',
  email: 'contact@krapp.dev',
  social: {
    github: 'https://github.com/KrappRamiro',
    linkedin: 'https://linkedin.com/in/ramiro-krapp',
  }
};

export const RESUME_URL = 'https://krappramiro.github.io/CV/krapp_ramiro_cv.pdf';

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  networking: SKILLS.filter(skill => skill.category === 'networking'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  monitoring: SKILLS.filter(skill => skill.category === 'monitoring'),
  programming: SKILLS.filter(skill => skill.category === 'programming'),
  database: SKILLS.filter(skill => skill.category === 'database'),
  embedded: SKILLS.filter(skill => skill.category === 'embedded'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
