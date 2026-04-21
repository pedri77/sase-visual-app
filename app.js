const vendors = [
  {
    name: "Zscaler",
    color: "#2563eb",
    logo: "https://www.zscaler.com/favicon.ico",
    docsUrl: "https://help.zscaler.com/",
    productUrl: "https://www.zscaler.com/products/zscaler-client-connector",
    ens: "ENS Alta",
    ensDetail: "Certificación ENS High publicada por Zscaler para su plataforma cloud.",
    ensUrl: "https://www.zscaler.com/es/industries/security-and-compliance",
    strength: 4.6,
    fit: 4.1,
    risk: 2,
    gartner: "SSE Leader · SASE Visionary",
    bestFor: "Cloud-first, ZTNA, SWG y usuarios remotos.",
    caution: "Validar SD-WAN, forwarding y apps no web."
  },
  {
    name: "Netskope",
    color: "#0f766e",
    logo: "https://www.netskope.com/favicon.ico",
    docsUrl: "https://docs.netskope.com/en/",
    productUrl: "https://www.netskope.com/netskope-one",
    ens: "ENS Alta",
    ensDetail: "Netskope publica certificación National Security Scheme en categoría High.",
    ensUrl: "https://www.netskope.com/company/security-compliance-and-assurance",
    strength: 4.3,
    fit: 4.5,
    risk: 2,
    gartner: "SSE Leader · SASE Leader",
    bestFor: "DLP, CASB, SaaS y control de datos.",
    caution: "Validar Endpoint DLP y diseño de sedes."
  },
  {
    name: "Palo Alto Networks",
    color: "#6d28d9",
    logo: "https://www.paloaltonetworks.com/favicon.ico",
    docsUrl: "https://docs.paloaltonetworks.com/prisma-access/administration",
    productUrl: "https://www.paloaltonetworks.com/sase/access",
    ens: "No evidenciado públicamente",
    ensDetail: "No se ha localizado certificación ENS pública para Prisma Access/SASE; sí publica otras certificaciones globales.",
    ensUrl: "https://www.paloaltonetworks.com/company/certifications.html",
    strength: 4.7,
    fit: 4.6,
    risk: 3,
    gartner: "SSE Leader · SASE Leader",
    bestFor: "Plataforma enterprise, Prisma SASE 4.0, Cortex XSIAM/XDR y seguridad AI.",
    caution: "Coste, complejidad, gobierno de políticas y adopción real de plataforma.",
    platform: [
      "Cortex XSIAM",
      "Cortex XDR/XSOAR/Xpanse",
      "Prisma SASE 4.0",
      "Prisma Access Browser",
      "Prisma AIRS 3.0",
      "Strata Cloud Manager"
    ],
    platformUrl: "https://www.paloaltonetworks.com/cortex/cortex-xsiam"
  },
  {
    name: "Fortinet",
    color: "#b45309",
    logo: "https://www.fortinet.com/favicon.ico",
    docsUrl: "https://docs.fortinet.com/product/fortisase",
    productUrl: "https://www.fortinet.com/products/sase",
    ens: "Vía servicio gestionado",
    ensDetail: "Telefónica Tech publica ENS Alta para su servicio gestionado flexWAN by Fortinet; no equivale automáticamente a FortiSASE directo.",
    ensUrl: "https://www.telefonica.es/es/wp-content/uploads/sites/10/2021/11/esquema-nacional-seguridad-2019-0011-TDE.pdf",
    strength: 4.1,
    fit: 4.0,
    risk: 4,
    gartner: "SASE Leader · SSE Challenger",
    bestFor: "Sedes, SD-WAN, FortiGate y TCO (Coste Total de Propiedad).",
    caution: "Exigir disciplina de parcheo y hardening admin."
  },
  {
    name: "Cisco",
    color: "#334155",
    logo: "https://www.cisco.com/favicon.ico",
    docsUrl: "https://docs.sse.cisco.com/sse-user-guide/docs/welcome-cisco-secure-access",
    productUrl: "https://www.cisco.com/site/us/en/solutions/secure-access-service-edge-sase/index.html",
    ens: "ENS Alta",
    ensDetail: "Cisco Secure Access publica ENS High como certificación global del servicio.",
    ensUrl: "https://www.cisco.com/site/us/en/products/security/secure-access/compliance.html",
    strength: 3.9,
    fit: 4.1,
    risk: 3,
    gartner: "SASE ecosystem player",
    bestFor: "Entornos Cisco, SD-WAN, ISE y observabilidad.",
    caution: "Validar convergencia real de consola y operación."
  }
];

const criteria = [
  { id: "threat", label: "Eficacia de prevención", weight: 5, scores: [5, 4, 5, 4, 4] },
  { id: "dlp", label: "DLP", weight: 5, scores: [4, 5, 4, 4, 3] },
  { id: "casb", label: "CASB", weight: 4, scores: [4, 5, 4, 3, 3] },
  { id: "ztna", label: "ZTNA", weight: 5, scores: [5, 4, 4, 3, 3] },
  { id: "swg", label: "SWG", weight: 5, scores: [5, 5, 4, 4, 4] },
  { id: "sdwan", label: "SD-WAN", weight: 4, scores: [2, 3, 4, 5, 4] },
  { id: "performance", label: "Rendimiento global", weight: 4, scores: [5, 4, 4, 4, 4] },
  { id: "ops", label: "Simplicidad operacional", weight: 4, scores: [4, 4, 3, 4, 3] },
  { id: "apps", label: "Convivencia con apps críticas", weight: 5, scores: [4, 5, 5, 4, 5] },
  { id: "ecosystem", label: "Integraciones", weight: 4, scores: [4, 4, 5, 4, 5] },
  { id: "soc", label: "Integración SOC / XSIAM / SIEM", weight: 4, scores: [3, 4, 5, 4, 4] },
  { id: "implementation", label: "Implementación y provisión", weight: 4, scores: [4, 4, 3, 4, 3] },
  { id: "onprem", label: "On-premise / soberanía", weight: 3, scores: [2, 2, 3, 5, 4] },
  { id: "success", label: "Casos de éxito públicos", weight: 3, scores: [5, 5, 4, 5, 5] },
  { id: "quantum", label: "Quantum / PQC readiness", weight: 3, scores: [5, 3, 4, 5, 4] },
  { id: "ai", label: "IA y seguridad de IA", weight: 4, scores: [5, 5, 5, 4, 5] },
  { id: "risk", label: "Riesgo de vulnerabilidades", weight: 4, scores: [4, 4, 3, 2, 3] },
  { id: "tco", label: "TCO (Coste Total de Propiedad)", weight: 4, scores: [3, 3, 2, 5, 4] }
];

const useCases = [
  { label: "ZTNA para apps privadas", fit: [5, 4, 4, 3, 3], required: false },
  { label: "Acceso terceros sin VPN", fit: [5, 4, 4, 3, 4], required: false },
  { label: "SWG usuarios remotos", fit: [5, 5, 4, 4, 4], required: false },
  { label: "DLP SaaS y web", fit: [4, 5, 4, 4, 3], required: false },
  { label: "CASB API para SaaS", fit: [4, 5, 4, 3, 3], required: false },
  { label: "Control GenAI", fit: [4, 4, 5, 3, 4], required: false },
  { label: "Inspección TLS", fit: [5, 5, 4, 4, 4], required: false },
  { label: "SD-WAN para sedes", fit: [2, 3, 4, 5, 4], required: false },
  { label: "FWaaS", fit: [4, 4, 5, 4, 4], required: false },
  { label: "DEM experiencia usuario", fit: [4, 4, 4, 3, 5], required: false },
  { label: "Integración XSIAM/SIEM/SOAR", fit: [3, 4, 5, 4, 4], required: false },
  { label: "Provisión rápida y rollout por fases", fit: [4, 4, 3, 4, 3], required: false },
  { label: "Opción on-premise / soberana", fit: [2, 2, 3, 5, 4], required: false },
  { label: "Preparación quantum / PQC", fit: [5, 3, 4, 5, 4], required: false },
  { label: "Control y seguridad de IA", fit: [5, 5, 5, 4, 5], required: false },
  { label: "Residencia datos UE", fit: [4, 4, 4, 4, 4], required: false },
  { label: "Coexistencia red actual", fit: [3, 4, 5, 5, 5], required: false }
];

const riskItems = [
  {
    vendor: "Zscaler",
    level: "Media",
    items: ["CVE-2026-22569 en Client Connector Windows", "CVE-2025-54983 con bypass potencial de forwarding"],
    action: "Exigir versión mínima, hardening de ZCC y prueba de forwarding."
  },
  {
    vendor: "Netskope",
    level: "Media",
    items: ["NSKPSA-2026-001 / CVE-2026-2809 Endpoint DLP", "Advisories 2025 en Netskope Client y DLP"],
    action: "Exigir R135+ o backports y plan de actualización de agente."
  },
  {
    vendor: "Palo Alto Networks",
    level: "Alta",
    items: ["CVE-2026-0227 PAN-OS / Prisma Access GlobalProtect DoS", "Sin workaround para PAN-OS afectado"],
    action: "Validar fixed release y exposición de GlobalProtect/PAN-OS."
  },
  {
    vendor: "Fortinet",
    level: "Alta",
    items: ["CVE-2025-59718/59719 FortiCloud SSO", "CVE-2026-24858 con explotación reportada por terceros"],
    action: "Condicionar a patch governance, revisión IoC y mínima exposición de gestión."
  },
  {
    vendor: "Cisco",
    level: "Alta",
    items: ["Catalyst SD-WAN Manager CVEs 2026 con CVSS 9.8", "Sin workaround en advisory SD-WAN crítico"],
    action: "Exigir fixed release, hardening admin y revisión PSIRT."
  }
];

const cveItems = [
  {
    vendor: "Zscaler",
    cves: [
      { id: "CVE-2026-22569", severity: "Media", product: "Client Connector Windows" },
      { id: "CVE-2025-54983", severity: "Media", product: "Client Connector Windows" }
    ],
    source: "NVD / Zscaler advisories",
    note: "Historial público menor que fabricantes con appliances expuestos; foco en agente y forwarding."
  },
  {
    vendor: "Netskope",
    cves: [
      { id: "CVE-2026-2809", severity: "Media", product: "Endpoint DLP" },
      { id: "CVE-2025-0309", severity: "Media", product: "Netskope Client" },
      { id: "CVE-2025-5942", severity: "Media", product: "Netskope Client / Endpoint DLP" }
    ],
    source: "Netskope Security Advisories",
    note: "Riesgo concentrado en cliente/endpoint; validar versión mínima y cadencia de actualización."
  },
  {
    vendor: "Palo Alto Networks",
    cves: [
      { id: "CVE-2026-0227", severity: "Alta", product: "PAN-OS / Prisma Access GlobalProtect" },
      { id: "CVE-2025-0108", severity: "Alta", product: "PAN-OS management" },
      { id: "CVE-2024-3400", severity: "Crítica", product: "PAN-OS GlobalProtect" },
      { id: "CVE-2024-0012", severity: "Crítica", product: "PAN-OS management" },
      { id: "CVE-2024-9474", severity: "Alta", product: "PAN-OS management" }
    ],
    source: "Palo Alto Networks Security Advisories",
    note: "Validar exposición de management/GlobalProtect, fixed releases y separación Prisma Access vs appliances."
  },
  {
    vendor: "Fortinet",
    cves: [
      { id: "CVE-2025-59718", severity: "Alta", product: "FortiCloud SSO" },
      { id: "CVE-2025-59719", severity: "Crítica", product: "FortiCloud SSO" },
      { id: "CVE-2024-55591", severity: "Crítica", product: "FortiOS / FortiProxy" },
      { id: "CVE-2023-27997", severity: "Crítica", product: "FortiOS / FortiProxy SSL-VPN" },
      { id: "CVE-2022-40684", severity: "Crítica", product: "FortiOS / FortiProxy / FortiSwitchManager" }
    ],
    source: "Fortinet PSIRT / NVD",
    note: "Mayor presión de patch governance si hay FortiGate/FortiManager/FortiSASE en arquitectura."
  },
  {
    vendor: "Cisco",
    cves: [
      { id: "CVE-2026-20122", severity: "Alta", product: "Catalyst SD-WAN Manager" },
      { id: "CVE-2026-20126", severity: "Alta", product: "Catalyst SD-WAN Manager" },
      { id: "CVE-2026-20128", severity: "Alta", product: "Catalyst SD-WAN Manager" },
      { id: "CVE-2026-20129", severity: "Crítica", product: "Catalyst SD-WAN Manager" },
      { id: "CVE-2026-20133", severity: "Alta", product: "Catalyst SD-WAN Manager" }
    ],
    source: "Cisco Security Advisory cisco-sa-sdwan-authbp-qwCX8D4v",
    note: "Riesgo ligado a SD-WAN Manager/vManage; exigir fixed release y hardening de administración."
  }
];

const advancedMetrics = [
  { id: "functional", label: "Functional Fit", weight: 25, scores: [4.3, 4.5, 4.6, 4.2, 4.2] },
  { id: "detection", label: "Detection Effectiveness", weight: 20, scores: [4.6, 4.4, 4.7, 4.2, 4.4] },
  { id: "telemetry", label: "Telemetry & Sources", weight: 15, scores: [4.2, 4.5, 4.7, 4.2, 4.5] },
  { id: "intel", label: "Intelligence Value", weight: 15, scores: [4.5, 4.3, 4.8, 4.2, 4.6] },
  { id: "data", label: "Data Quality", weight: 10, scores: [4.1, 4.6, 4.4, 4.0, 4.2] },
  { id: "operability", label: "Operability", weight: 10, scores: [4.0, 4.2, 4.1, 4.2, 4.1] },
  { id: "market", label: "Market Confidence", weight: 5, scores: [4.5, 4.4, 4.6, 4.3, 4.4] }
];

const threatHeatmap = [
  { type: "Phishing", scores: [5, 4, 5, 4, 4] },
  { type: "Malware", scores: [5, 4, 5, 4, 4] },
  { type: "SaaS Abuse", scores: [4, 5, 4, 3, 4] },
  { type: "Insider Risk", scores: [4, 5, 4, 4, 3] },
  { type: "Data Exfiltration", scores: [4, 5, 4, 4, 3] }
];

const techItems = [
  {
    vendor: "Zscaler",
    tunnel: "Z-Tunnel 2.0 con DTLS/TLS; ZPA usa TLS para TCP/UDP hacia apps privadas.",
    site: "GRE recomendado para sedes; IPSec alternativo; PAC y Branch Connector.",
    tls: "CA corporativa/Zscaler y excepciones para inspección TLS.",
    validate: "Modo Z-Tunnel, bypass, trusted networks, IP egress estable y apps no web."
  },
  {
    vendor: "Netskope",
    tunnel: "Netskope Client usa certificados de cliente para túneles hacia Netskope/NewEdge.",
    site: "GRE/IPsec, cloud explicit proxy, proxy chaining y DPOP/on-prem forward proxy.",
    tls: "CA Netskope/custom/BYOK y rotación de CA para SSL interception.",
    validate: "Versión NS Client, CA rotation, DPOP, NPA Publishers y endpoints sin admin."
  },
  {
    vendor: "Palo Alto Networks",
    tunnel: "Prisma Access cifra entre nodos MU/RN/SPN/SC-CAN y datacenter.",
    site: "Remote networks mediante IPSec; perfiles IKE/IPSec configurables.",
    tls: "SSL decryption integrado; logs en Strata Logging Service.",
    validate: "AES/SHA/DH/PFS, service infrastructure subnet, logging y gestión Panorama/Strata."
  },
  {
    vendor: "Fortinet",
    tunnel: "FortiClient agent-based; modos agentless/proxy según caso.",
    site: "Thin Edge, FortiGate Secure Edge, Branch On-Ramp, Private Proxy y Proxy.",
    tls: "Deep inspection requiere CA FortiSASE en endpoints en ciertos modos.",
    validate: "Licencias edge, límites, CA, FortiCloud, soberanía y PoPs."
  },
  {
    vendor: "Cisco",
    tunnel: "Cisco Secure Client con túnel seguro cifrado; ZTNA y VPNaaS.",
    site: "IPsec tunnels, PAC files, proxy chaining e integración SD-WAN.",
    tls: "Full/selective TLS decryption; FWaaS descifra antes de inspección.",
    validate: "ZTNA vs VPNaaS, split tunnel, SGT/ISE, mobile y Resource Connectors."
  }
];

const deploymentItems = [
  {
    vendor: "Zscaler",
    implementation: "Provisión cloud con Zscaler Client Connector, PAC/tunnel/forwarding, conectores ZPA y GRE/IPSec para sedes.",
    onprem: "No como SASE on-prem completo. Usa conectores/forwarders y componentes virtuales, pero el plano SASE principal es cloud.",
    success: [
      { label: "Customer Stories Zscaler", url: "https://www.zscaler.com/customers" },
      { label: "CSC / Protegrity en customer stories", url: "https://www.zscaler.com/customers" }
    ],
    poc: "Validar ZCC, bypass, apps privadas no web, PoP elegido y operación de conectores."
  },
  {
    vendor: "Netskope",
    implementation: "Provisión cloud con Netskope Client, NewEdge, NPA Publishers, GRE/IPSec, explicit proxy y despliegue por grupos.",
    onprem: "No como SASE on-prem completo. Puede usar publishers/DPOP/proxy chaining, pero el servicio SASE es cloud-delivered.",
    success: [
      { label: "Clientes Netskope", url: "https://www.netskope.com/customers" },
      { label: "Orbia", url: "https://www.netskope.com/customers" }
    ],
    poc: "Validar steering, DLP endpoint, CA, publishers y cobertura SaaS concreta."
  },
  {
    vendor: "Palo Alto Networks",
    implementation: "Provisión de Prisma Access con remote networks, service connections, mobile users, Strata/Panorama y logging.",
    onprem: "Híbrido, no SASE on-prem puro. Puede convivir con NGFW/PAN-OS on-prem, Cortex y conectividad Prisma Access.",
    success: [
      { label: "Prisma Access SASE ROI", url: "https://www.paloaltonetworks.com/customers/accelerating-return-on-sase-investment-with-palo-alto-networks-customer-success" },
      { label: "Customer Success", url: "https://www.paloaltonetworks.com/services/customer-success" }
    ],
    poc: "Validar tiempos de alta de región, service connections, logs hacia XSIAM/SIEM y operación Strata/Panorama."
  },
  {
    vendor: "Fortinet",
    implementation: "Provisión desde FortiSASE/FortiManager/FortiGate, integración SD-WAN y FortiClient; buena transición desde Fortinet instalado.",
    onprem: "Sí como opción fuerte: FortiSASE Sovereign se puede desplegar en datacenter del cliente para soberanía y control.",
    success: [
      { label: "Upper Grand District School Board", url: "https://www.fortinet.com/products/sase" },
      { label: "Carolina Panthers", url: "https://www.fortinet.com/products/sase" },
      { label: "AGU", url: "https://www.fortinet.com/products/sase" }
    ],
    poc: "Validar FortiSASE Sovereign si hay requisito on-prem/soberano, más parches, FortiClient y políticas unificadas."
  },
  {
    vendor: "Cisco",
    implementation: "Provisión con Cisco Secure Access, Secure Client, SD-WAN, Umbrella, Duo, ISE y ThousandEyes según alcance.",
    onprem: "Híbrido fuerte por componentes Cisco on-prem/edge, aunque Secure Access/SASE sigue siendo cloud-delivered.",
    success: [
      { label: "Cisco SASE deployment case", url: "https://www.cisco.com/c/en/us/solutions/collateral/executive-perspectives/sase-cx-deployment.html" },
      { label: "Cisco SASE customer stories", url: "https://www.cisco.com/site/us/en/solutions/secure-access-service-edge-sase/index.html" },
      { label: "Cisco SASE customer stories", url: "https://www.cisco.com/site/us/en/solutions/secure-access-service-edge-sase/index.html" }
    ],
    poc: "Validar consola, convergencia real, Secure Client, SD-WAN, ISE/SGT, ThousandEyes y excepciones SaaS."
  }
];

const quantumAiItems = [
  {
    vendor: "Zscaler",
    quantumScore: 5,
    aiScore: 5,
    quantum: "SSE quantum-ready con inspección inline de tráfico PQC, soporte de intercambio híbrido ML-KEM, visibilidad/reporting de cifrados quantum y gobierno de migración.",
    ai: "Zscaler AI Security Suite para visibilidad, control y gobierno de GenAI/agentic AI; protección de datos y control de uso de IA en la empresa.",
    validate: "Probar inspección de sesiones TLS/PQC, logs de algoritmos, control de prompts, DLP en GenAI y políticas para shadow AI.",
    sources: ["https://www.zscaler.com/innovations-launch/quantum-security", "https://ir.zscaler.com/news-releases/news-release-details/zscaler-unveils-new-innovations-secure-enterprise-ai-adoption"]
  },
  {
    vendor: "Netskope",
    quantumScore: 3,
    aiScore: 5,
    quantum: "Roadmap post-cuántico documentado: Netskope indica evaluación de usos de cifrado en Netskope One y foco en ML-KEM 768; quantum-resilient Netskope One aparece como desarrollo/sandbox.",
    ai: "Netskope One AI Security cubre AI apps, datos, herramientas, agentes, flujos agentic y control de MCP; muy alineado con CASB/DLP data-centric.",
    validate: "Solicitar disponibilidad real de PQC en tenant, roadmap contractual, AI gateway, control MCP, DLP en prompts y cobertura de modelos privados.",
    sources: ["https://www.netskope.com/blog/planning-for-a-post-quantum-world-now", "https://investors.netskope.com/news-releases/news-release-details/netskope-unveils-netskope-one-ai-security-delivering-high"]
  },
  {
    vendor: "Palo Alto Networks",
    quantumScore: 4,
    aiScore: 5,
    quantum: "PQC y decryption para NGFW y Prisma Access: detección, control, logging y políticas frente a TLS 1.3 con algoritmos PQC/híbridos según despliegue.",
    ai: "Prisma AIRS 3.0 orientado a agentic AI con discovery, evaluación de riesgo, runtime security y gobierno de agentes, apps, modelos y datos.",
    validate: "Probar PQC/decryption en Prisma Access/NGFW, logs en Strata/XSIAM, discovery de agentes AI, protección runtime y gobierno de acciones agentic.",
    sources: ["https://docs.paloaltonetworks.com/network-security/decryption/administration/post-quantum-cryptography-decryption", "https://investors.paloaltonetworks.com/news-releases/news-release-details/palo-alto-networks-secures-agentic-ai-prisma-airs-30"]
  },
  {
    vendor: "Fortinet",
    quantumScore: 5,
    aiScore: 4,
    quantum: "Fortinet publica quantum-safe en FortiOS/FortiSASE: PQC, modo híbrido, QKD/PQC, SSL deep inspection reforzada y opciones Sovereign SASE.",
    ai: "FortiOS 8.0 incorpora controles Secure AI, agentes basados en Fabric y Fortinet Secure AI Data Center para modelos, datos e infraestructura.",
    validate: "Validar versión FortiOS/FortiSASE, PQC/hybrid mode, impacto de deep inspection, FortiSASE Sovereign y controles de AI aplicables a SASE.",
    sources: ["https://www.fortinet.com/solutions/quantum-security", "https://www.fortinet.com/corporate/about-us/newsroom/press-releases/2026/fortinet-introduces-fortios-8-expand-secure-networking-with-secure-ai-controls-fabric-based-ai-agents-flexible-sase-and-simplified-sdwan"]
  },
  {
    vendor: "Cisco",
    quantumScore: 4,
    aiScore: 5,
    quantum: "Estrategia PQC de Cisco desde silicon a cloud, con integración de PQC en IPsec, TLS, MACsec y routers seguros; validar alcance concreto en Secure Access/SASE.",
    ai: "Cisco AI Access y AI Defense añaden control de GenAI, shadow AI, DLP, guardrails, runtime protections y SASE sensible a IA.",
    validate: "Validar AI Access en Secure Access, detección de tráfico AI, guardrails, AI Defense y hoja de ruta PQC aplicable a SASE/SD-WAN.",
    sources: ["https://www.cisco.com/c/en/us/about/trust-center/post-quantum-cryptography.html", "https://www.cisco.com/site/us/en/products/security/secure-access/ai-access/index.html"]
  }
];

const scenarios = {
  balanced: {},
  cloud: { ztna: 5, swg: 5, performance: 5, sdwan: 2, tco: 3 },
  data: { dlp: 5, casb: 5, ecosystem: 4, risk: 5, sdwan: 2 },
  branch: { sdwan: 5, apps: 5, performance: 4, tco: 5, ztna: 3 },
  platform: { ecosystem: 5, soc: 5, apps: 5, threat: 5, ops: 4, implementation: 4, ai: 5, quantum: 4, tco: 3 }
};

const state = {
  weights: Object.fromEntries(criteria.map(c => [c.id, c.weight])),
  required: Object.fromEntries(useCases.map(u => [u.label, u.required]))
};

function scoreVendors() {
  const result = vendors.map((vendor, vendorIndex) => {
    let score = 0;
    let totalWeight = 0;
    criteria.forEach(criterion => {
      const weight = Number(state.weights[criterion.id]);
      score += weight * criterion.scores[vendorIndex];
      totalWeight += weight;
    });
    const gates = useCases
      .filter(useCase => state.required[useCase.label] && useCase.fit[vendorIndex] < 4)
      .map(useCase => useCase.label);

    return {
      ...vendor,
      score: score / totalWeight,
      gates
    };
  });

  return result.sort((a, b) => b.score - a.score);
}

function renderRanking() {
  const ranked = scoreVendors();
  const max = Math.max(...ranked.map(item => item.score));
  document.getElementById("rankingBars").innerHTML = ranked.map((item, index) => `
    <div class="ranking-row">
      <div class="rank-pill">#${index + 1}</div>
      <div class="vendor-name with-logo"><img src="${item.logo}" alt="Logo ${item.name}" loading="lazy">${item.name}</div>
      <div class="bar-track" aria-hidden="true">
        <div class="bar-fill" style="width:${(item.score / max) * 100}%;background:${item.color}"></div>
      </div>
      <div class="score">${item.score.toFixed(2)}</div>
      ${item.gates.length ? `<div class="gate-note">Apto condicionado: ${item.gates.join(", ")}</div>` : ""}
    </div>
  `).join("");

  const firstWithoutGate = ranked.find(item => item.gates.length === 0) || ranked[0];
  document.getElementById("winnerName").textContent = firstWithoutGate.name;
  document.getElementById("winnerReason").textContent = `${firstWithoutGate.bestFor} ${firstWithoutGate.gates.length ? "Tiene gates que deben resolverse en PoC." : "No presenta bloqueos imprescindibles con la selección actual."}`;
  document.getElementById("gateCount").textContent = ranked.reduce((sum, item) => sum + item.gates.length, 0);
  document.getElementById("riskAverage").textContent = (vendors.reduce((sum, v) => sum + v.risk, 0) / vendors.length).toFixed(1);
}

function renderQuadrant() {
  const svg = document.getElementById("quadrantChart");
  const ranked = scoreVendors();
  const plot = (value, min, max, size, pad) => pad + ((value - min) / (max - min)) * (size - pad * 2);
  const yPlot = (value, min, max, size, pad) => size - pad - ((value - min) / (max - min)) * (size - pad * 2);

  svg.innerHTML = `
    <rect x="0" y="0" width="520" height="360" rx="8" fill="#fbfcfe"/>
    <line x1="70" y1="180" x2="490" y2="180" stroke="#d8dee8" stroke-width="2"/>
    <line x1="280" y1="28" x2="280" y2="318" stroke="#d8dee8" stroke-width="2"/>
    <line x1="70" y1="318" x2="490" y2="318" stroke="#17212f" stroke-width="2"/>
    <line x1="70" y1="318" x2="70" y2="28" stroke="#17212f" stroke-width="2"/>
    <text x="286" y="48" fill="#647084" font-size="12" font-weight="800">Priorizar</text>
    <text x="78" y="48" fill="#647084" font-size="12" font-weight="800">Potencial</text>
    <text x="350" y="342" fill="#647084" font-size="12" font-weight="800">Ajuste cliente</text>
    <text x="18" y="170" fill="#647084" font-size="12" font-weight="800" transform="rotate(-90 18 170)">Fortaleza</text>
    ${ranked.map(item => {
      const x = plot(item.fit, 3, 5, 520, 70);
      const y = yPlot(item.strength, 3, 5, 360, 42);
      const size = item.gates.length ? 12 : 15;
      return `
        <circle cx="${x}" cy="${y}" r="${size}" fill="${item.color}" opacity="0.92"/>
        <text x="${x + 18}" y="${y + 5}" fill="#17212f" font-size="13" font-weight="850">${item.name}</text>
      `;
    }).join("")}
  `;
}

function renderVendors() {
  document.getElementById("vendorStrip").innerHTML = vendors.map(vendor => `
    <article class="vendor-tile" style="--vendor-accent:${vendor.color}">
      <div class="vendor-card-head">
        <img src="${vendor.logo}" alt="Logo ${vendor.name}" loading="lazy">
        <strong>${vendor.name}</strong>
      </div>
      <div class="badge-row">
        <span class="badge">${vendor.gartner}</span>
        <span class="badge ens-badge">${vendor.ens}</span>
      </div>
      <div class="advantage-box"><strong>Ventajas</strong>${vendor.bestFor}</div>
      ${vendor.platform ? `
        <div class="platform-list">
          <span>Nuevos productos / efecto plataforma</span>
          <div class="badge-row">
            ${vendor.platform.map(product => `<span class="badge">${product}</span>`).join("")}
          </div>
        </div>
      ` : ""}
      <p><strong>ENS:</strong> ${vendor.ensDetail}</p>
      <div class="disadvantage-box"><strong>Desventajas / cautelas</strong>${vendor.caution}</div>
      <div class="vendor-links">
        <a href="${vendor.docsUrl}" target="_blank" rel="noreferrer">Documentación oficial</a>
        <a href="${vendor.productUrl}" target="_blank" rel="noreferrer">Página producto</a>
        <a href="${vendor.ensUrl}" target="_blank" rel="noreferrer">Evidencia ENS</a>
        ${vendor.platformUrl ? `<a href="${vendor.platformUrl}" target="_blank" rel="noreferrer">Cortex XSIAM</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderRiskVisual() {
  const maxCves = Math.max(...cveItems.map(item => item.cves.length));
  document.getElementById("riskVisual").innerHTML = `
    <svg viewBox="0 0 900 310" role="img" aria-label="Grafo visual de riesgo y volumen de CVEs">
      <rect x="0" y="0" width="900" height="310" fill="#fbfcfe"/>
      <text x="24" y="34" fill="#17212f" font-size="18" font-weight="850">Riesgo operativo vs CVEs recientes</text>
      <text x="24" y="56" fill="#647084" font-size="12">Tamaño = volumen de CVEs/advisories relevantes. Color = riesgo operativo estimado.</text>
      ${cveItems.map((item, index) => {
        const vendor = vendors.find(v => v.name === item.vendor);
        const x = 92 + index * 178;
        const risk = vendor.risk;
        const y = 240 - risk * 38;
        const radius = 18 + (item.cves.length / maxCves) * 22;
        const critical = item.cves.filter(cve => cve.severity === "Crítica").length;
        return `
          <line x1="${x}" y1="245" x2="${x}" y2="82" stroke="#e2e8f0" stroke-width="1"/>
          <circle cx="${x}" cy="${y}" r="${radius}" fill="${vendor.color}" opacity="0.90"/>
          <text x="${x}" y="${y + 5}" text-anchor="middle" fill="white" font-size="14" font-weight="900">${item.cves.length}</text>
          <text x="${x}" y="272" text-anchor="middle" fill="#17212f" font-size="12" font-weight="850">${item.vendor}</text>
          <text x="${x}" y="288" text-anchor="middle" fill="#647084" font-size="11">Críticas: ${critical}</text>
        `;
      }).join("")}
      <text x="24" y="250" fill="#647084" font-size="11">Bajo</text>
      <text x="24" y="92" fill="#647084" font-size="11">Alto</text>
    </svg>
  `;
}

function renderCveTable() {
  document.getElementById("cveTable").innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Fabricante</th>
          <th>CVEs/advisories últimos 5 años</th>
          <th>Fuente</th>
          <th>Lectura de riesgo</th>
        </tr>
      </thead>
      <tbody>
        ${cveItems.map(item => `
          <tr>
            <td><strong>${item.vendor}</strong></td>
            <td>${item.cves.map(cve => `<span class="cve-badge ${cve.severity.toLowerCase()}">${cve.id}</span><br><small>${cve.product} · ${cve.severity}</small>`).join("<br>")}</td>
            <td>${item.source}</td>
            <td>${item.note}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderCriteria() {
  document.getElementById("criteriaList").innerHTML = criteria.map(criterion => `
    <div class="criterion">
      <label for="weight-${criterion.id}">${criterion.label}</label>
      <input id="weight-${criterion.id}" data-criterion="${criterion.id}" type="range" min="1" max="5" step="1" value="${state.weights[criterion.id]}">
      <span class="weight-value" id="value-${criterion.id}">${state.weights[criterion.id]}</span>
    </div>
  `).join("");

  document.querySelectorAll("[data-criterion]").forEach(input => {
    input.addEventListener("input", event => {
      const id = event.target.dataset.criterion;
      state.weights[id] = Number(event.target.value);
      document.getElementById(`value-${id}`).textContent = event.target.value;
      refresh();
    });
  });
}

function renderUseCases() {
  document.getElementById("usecaseList").innerHTML = useCases.map(useCase => `
    <div class="usecase">
      <div class="usecase-title">${useCase.label}</div>
      <button class="toggle ${state.required[useCase.label] ? "active" : ""}" data-usecase="${useCase.label}" type="button">
        ${state.required[useCase.label] ? "Imprescindible" : "Deseable"}
      </button>
      <div class="fit-chips">
        ${vendors.map((vendor, index) => {
          const fit = useCase.fit[index];
          const cls = fit >= 4 ? "high" : "low";
          return `<span class="fit-chip ${cls}">${vendor.name}: ${fit}</span>`;
        }).join("")}
      </div>
    </div>
  `).join("");

  document.querySelectorAll("[data-usecase]").forEach(button => {
    button.addEventListener("click", event => {
      const label = event.currentTarget.dataset.usecase;
      state.required[label] = !state.required[label];
      renderUseCases();
      refresh();
    });
  });
}

function renderRisks() {
  renderRiskVisual();
  renderCveTable();
  document.getElementById("riskGrid").innerHTML = riskItems.map(item => `
    <article class="risk-item">
      <div class="risk-head">
        <strong>${item.vendor}</strong>
        <span class="risk-level ${item.level.toLowerCase()}">${item.level}</span>
      </div>
      <ul>
        ${item.items.map(risk => `<li>${risk}</li>`).join("")}
      </ul>
      <p><strong>Acción:</strong> ${item.action}</p>
    </article>
  `).join("");
}

function renderTechnical() {
  document.getElementById("techGrid").innerHTML = techItems.map(item => {
    const vendor = vendors.find(v => v.name === item.vendor);
    return `
      <article class="tech-item" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="Logo ${item.vendor}" loading="lazy">
          <strong>${item.vendor}</strong>
        </div>
        <dl>
          <div><dt>Túnel usuario</dt><dd>${item.tunnel}</dd></div>
          <div><dt>Sedes / forwarding</dt><dd>${item.site}</dd></div>
          <div><dt>TLS inspection</dt><dd>${item.tls}</dd></div>
          <div><dt>Validar en PoC</dt><dd>${item.validate}</dd></div>
        </dl>
      </article>
    `;
  }).join("");
}

function renderDeployment() {
  document.getElementById("deploymentGrid").innerHTML = deploymentItems.map(item => {
    const vendor = vendors.find(v => v.name === item.vendor);
    return `
      <article class="deployment-item" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="Logo ${item.vendor}" loading="lazy">
          <strong>${item.vendor}</strong>
        </div>
        <div class="deployment-meta">
          <div><span>Implementación / provisión</span><p>${item.implementation}</p></div>
          <div><span>Solución on-premise</span><p>${item.onprem}</p></div>
          <div><span>Validar en PoC</span><p>${item.poc}</p></div>
        </div>
        <ul>
          ${item.success.map(story => `<li><a href="${story.url}" target="_blank" rel="noreferrer">${story.label}</a></li>`).join("")}
        </ul>
      </article>
    `;
  }).join("");
}

function renderInnovation() {
  document.getElementById("innovationGrid").innerHTML = quantumAiItems.map(item => {
    const vendor = vendors.find(v => v.name === item.vendor);
    return `
      <article class="innovation-item" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="Logo ${item.vendor}" loading="lazy">
          <strong>${item.vendor}</strong>
        </div>
        <div class="score-pair">
          <div class="badge"><span>Quantum/PQC</span><strong>${item.quantumScore}/5</strong></div>
          <div class="badge"><span>IA</span><strong>${item.aiScore}/5</strong></div>
        </div>
        <div class="innovation-meta">
          <div><span>Quantum / PQC</span><p>${item.quantum}</p></div>
          <div><span>IA / Seguridad de IA</span><p>${item.ai}</p></div>
          <div><span>Validar en PoC</span><p>${item.validate}</p></div>
        </div>
        <div class="vendor-links">
          ${item.sources.map((source, index) => `<a href="${source}" target="_blank" rel="noreferrer">Fuente ${index + 1}</a>`).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function advancedScore(vendorIndex) {
  const total = advancedMetrics.reduce((sum, metric) => sum + metric.weight, 0);
  return advancedMetrics.reduce((sum, metric) => sum + metric.scores[vendorIndex] * metric.weight, 0) / total;
}

function renderFramework() {
  const advancedRanking = vendors
    .map((vendor, index) => ({ vendor, score: advancedScore(index) }))
    .sort((a, b) => b.score - a.score);
  const radarPoints = advancedMetrics.map((metric, index) => {
    const angle = (-90 + index * (360 / advancedMetrics.length)) * Math.PI / 180;
    const radius = 28 + (metric.scores[2] / 5) * 82;
    return `${160 + Math.cos(angle) * radius},${130 + Math.sin(angle) * radius}`;
  }).join(" ");

  document.getElementById("frameworkGrid").innerHTML = `
    <article class="framework-item">
      <strong>Modelo global</strong>
      <p>Functional Fit 25%, Detection Effectiveness 20%, Telemetry 15%, Intelligence 15%, Data Quality 10%, Operability 10%, Market Confidence 5%.</p>
      <div class="fit-chips">
        ${advancedRanking.map(item => `<span class="fit-chip high">${item.vendor.name}: ${item.score.toFixed(2)}</span>`).join("")}
      </div>
    </article>
    <article class="framework-item">
      <strong>Radar de referencia</strong>
      <svg viewBox="0 0 320 260" role="img" aria-label="Radar de capacidades avanzadas">
        <rect x="0" y="0" width="320" height="260" fill="#fbfcfe"/>
        <circle cx="160" cy="130" r="110" fill="none" stroke="#e2e8f0"/>
        <circle cx="160" cy="130" r="72" fill="none" stroke="#e2e8f0"/>
        <circle cx="160" cy="130" r="36" fill="none" stroke="#e2e8f0"/>
        <polygon points="${radarPoints}" fill="rgba(109,40,217,0.18)" stroke="#6d28d9" stroke-width="3"/>
        ${advancedMetrics.map((metric, index) => {
          const angle = (-90 + index * (360 / advancedMetrics.length)) * Math.PI / 180;
          return `<text x="${160 + Math.cos(angle) * 124}" y="${132 + Math.sin(angle) * 124}" text-anchor="middle" fill="#647084" font-size="10">${metric.label.split(" ")[0]}</text>`;
        }).join("")}
      </svg>
    </article>
    <article class="framework-item">
      <strong>Fórmula ejecutiva</strong>
      <p>Total Score = 0.25 Functional Fit + 0.20 Detection + 0.15 Telemetry + 0.15 Intelligence + 0.10 Data Quality + 0.10 Operability + 0.05 Market Confidence.</p>
    </article>
  `;

  document.getElementById("heatmapPanel").innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Tipo de amenaza</th>
          ${vendors.map(vendor => `<th>${vendor.name}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${threatHeatmap.map(row => `
          <tr>
            <td><strong>${row.type}</strong></td>
            ${row.scores.map(score => `<td><span class="fit-chip ${score >= 4 ? "high" : "low"}">${score}/5</span></td>`).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function applyScenario(name) {
  const selected = scenarios[name] || {};
  criteria.forEach(criterion => {
    state.weights[criterion.id] = selected[criterion.id] || criterion.weight;
  });
  renderCriteria();
  refresh();
}

function wireNavigation() {
  const showView = (viewId, targetId) => {
    document.querySelectorAll(".rail-item").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
    const activeRail = document.querySelector(`.rail-item[data-view="${viewId}"]`);
    if (activeRail) activeRail.classList.add("active");
    document.getElementById(viewId).classList.add("active");
    if (targetId) {
      window.setTimeout(() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  };

  document.querySelectorAll("[data-view]").forEach(button => {
    button.addEventListener("click", () => {
      showView(button.dataset.view, button.dataset.target);
    });
  });

  document.getElementById("scenario").addEventListener("change", event => applyScenario(event.target.value));
  document.getElementById("resetApp").addEventListener("click", () => {
    criteria.forEach(criterion => state.weights[criterion.id] = criterion.weight);
    useCases.forEach(useCase => state.required[useCase.label] = false);
    document.getElementById("scenario").value = "balanced";
    renderCriteria();
    renderUseCases();
    refresh();
  });
  document.getElementById("exportPdf").addEventListener("click", exportPdf);
}

function exportPdf() {
  const pdf = createEvaluationPdf();
  const anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(pdf);
  anchor.download = "sase-decision-studio-evaluacion.pdf";
  anchor.click();
  URL.revokeObjectURL(anchor.href);
}

function createEvaluationPdf() {
  const doc = createPdfWriter();
  const ranked = scoreVendors();
  const selectedScenario = document.getElementById("scenario");
  const scenarioName = selectedScenario.options[selectedScenario.selectedIndex].text;
  const winner = ranked.find(item => item.gates.length === 0) || ranked[0];
  const requiredUseCases = Object.entries(state.required)
    .filter(([, required]) => required)
    .map(([label]) => label);

  doc.cover("SASE Decision Studio", "Evaluacion visual de proveedores SASE/SSE", [
    `Fecha: ${new Date().toLocaleDateString("es-ES")}`,
    `Escenario: ${scenarioName}`,
    "Proveedores: Zscaler, Netskope, Palo Alto Networks, Fortinet y Cisco"
  ]);

  doc.section("1. Resumen ejecutivo");
  doc.kv("Recomendacion preliminar", winner.name);
  doc.paragraph(winner.bestFor);
  doc.kv("Bloqueos detectados", String(ranked.reduce((sum, item) => sum + item.gates.length, 0)));
  doc.kv("Riesgo medio", (vendors.reduce((sum, v) => sum + v.risk, 0) / vendors.length).toFixed(1));
  doc.kv("Casos marcados como imprescindibles", requiredUseCases.length ? requiredUseCases.join("; ") : "Ninguno seleccionado");

  doc.section("2. Ranking ponderado");
  doc.barChart("Ranking visual", ranked.map(item => ({ label: item.name, value: item.score, color: item.color })), 5);
  ranked.forEach((item, index) => {
    doc.kv(`#${index + 1} ${item.name}`, `Score ${item.score.toFixed(2)} / 5`);
    doc.paragraph(item.gates.length ? `Apto condicionado por: ${item.gates.join(", ")}` : "Sin bloqueos imprescindibles con la seleccion actual.");
  });

  doc.section("3. Lectura ejecutiva por fabricante");
  vendors.forEach(vendor => {
    doc.subsection(vendor.name);
    doc.kv("Gartner / mercado", vendor.gartner);
    doc.kv("ENS", `${vendor.ens}. ${vendor.ensDetail}`);
    doc.kv("Encaje", vendor.bestFor);
    doc.kv("Cautela", vendor.caution);
    if (vendor.platform) doc.kv("Plataforma", vendor.platform.join(", "));
    doc.kv("Documentacion", vendor.docsUrl);
    doc.kv("Producto", vendor.productUrl);
    doc.kv("Evidencia ENS", vendor.ensUrl);
  });

  doc.section("4. Criterios, pesos y notas base");
  criteria.forEach(criterion => {
    const scores = vendors.map((vendor, index) => `${vendor.name}: ${criterion.scores[index]}`).join(" | ");
    doc.kv(criterion.label, `Peso ${state.weights[criterion.id]} | ${scores}`);
  });

  doc.section("5. Casos de uso imprescindibles");
  useCases.forEach(useCase => {
    const priority = state.required[useCase.label] ? "Imprescindible" : "Deseable";
    const fit = vendors.map((vendor, index) => `${vendor.name}: ${useCase.fit[index]}`).join(" | ");
    doc.kv(useCase.label, `${priority} | ${fit}`);
  });

  doc.section("6. Matriz de riesgo y vulnerabilidades");
  doc.barChart("CVEs/advisories relevantes por fabricante", cveItems.map(item => {
    const vendor = vendors.find(v => v.name === item.vendor);
    return { label: item.vendor, value: item.cves.length, color: vendor.color };
  }), Math.max(...cveItems.map(item => item.cves.length)));
  riskItems.forEach(item => {
    doc.subsection(`${item.vendor} - Riesgo ${item.level}`);
    item.items.forEach(risk => doc.bullet(risk));
    doc.kv("Accion", item.action);
  });
  cveItems.forEach(item => {
    doc.kv(`${item.vendor} CVEs`, item.cves.map(cve => `${cve.id} (${cve.severity}, ${cve.product})`).join("; "));
  });

  doc.section("7. Cifrado y especificaciones tecnicas");
  techItems.forEach(item => {
    doc.subsection(item.vendor);
    doc.kv("Tunel usuario", item.tunnel);
    doc.kv("Sedes / forwarding", item.site);
    doc.kv("TLS inspection", item.tls);
    doc.kv("Validar en PoC", item.validate);
  });

  doc.section("8. Implementacion, provision y on-premise");
  deploymentItems.forEach(item => {
    doc.subsection(item.vendor);
    doc.kv("Implementacion / provision", item.implementation);
    doc.kv("Solucion on-premise", item.onprem);
    doc.kv("Validar en PoC", item.poc);
    doc.kv("Casos publicos", item.success.map(story => `${story.label}: ${story.url}`).join(" | "));
  });

  doc.section("9. Valoracion quantum e IA");
  quantumAiItems.forEach(item => {
    doc.subsection(item.vendor);
    doc.kv("Quantum / PQC", `${item.quantumScore}/5 - ${item.quantum}`);
    doc.kv("IA / Seguridad de IA", `${item.aiScore}/5 - ${item.ai}`);
    doc.kv("Validar en PoC", item.validate);
    doc.kv("Fuentes", item.sources.join(" | "));
  });

  doc.section("10. Detection, Intelligence & Data Quality");
  doc.barChart("Scoring SOC/GRC avanzado", vendors.map((vendor, index) => ({ label: vendor.name, value: advancedScore(index), color: vendor.color })), 5);
  advancedMetrics.forEach(metric => {
    doc.kv(metric.label, `Peso ${metric.weight}% | ${vendors.map((vendor, index) => `${vendor.name}: ${metric.scores[index]}`).join(" | ")}`);
  });
  threatHeatmap.forEach(row => {
    doc.kv(row.type, vendors.map((vendor, index) => `${vendor.name}: ${row.scores[index]}/5`).join(" | "));
  });

  doc.section("11. Notas de uso");
  doc.paragraph("La puntuacion agregada no debe sustituir los gates de descarte. Si un caso imprescindible no queda cubierto, el proveedor debe quedar como no apto, apto condicionado o apto solo con arquitectura complementaria.");
  doc.paragraph("La informacion de Gartner, casos publicos y fabricantes debe contrastarse con PoC, contrato, referencias privadas y matriz de versiones/advisories del entorno real.");

  return doc.toBlob();
}

function createPdfWriter() {
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 46;
  const contentWidth = pageWidth - margin * 2;
  const pages = [];
  let commands = [];
  let y = margin;
  let pageNumber = 0;

  const rgb = hex => {
    const value = hex.replace("#", "");
    return [
      parseInt(value.slice(0, 2), 16) / 255,
      parseInt(value.slice(2, 4), 16) / 255,
      parseInt(value.slice(4, 6), 16) / 255
    ].map(number => number.toFixed(3)).join(" ");
  };

  const clean = value => String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[·•]/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "");

  const literal = value => `(${clean(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")})`;
  const pdfY = value => pageHeight - value;
  const textWidth = (value, size) => clean(value).length * size * 0.48;
  const wrap = (value, size, width) => {
    const words = clean(value).split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";
    const maxChars = Math.max(12, Math.floor(width / (size * 0.48)));
    words.forEach(word => {
      if (textWidth(word, size) > width) {
        if (line) {
          lines.push(line);
          line = "";
        }
        for (let index = 0; index < word.length; index += maxChars) {
          lines.push(word.slice(index, index + maxChars));
        }
        return;
      }
      const candidate = line ? `${line} ${word}` : word;
      if (textWidth(candidate, size) <= width || !line) {
        line = candidate;
      } else {
        lines.push(line);
        line = word;
      }
    });
    if (line) lines.push(line);
    return lines.length ? lines : [""];
  };

  const color = hex => commands.push(`${rgb(hex)} rg`);
  const rect = (x, top, width, height, fill = "#ffffff") => {
    color(fill);
    commands.push(`${x.toFixed(2)} ${(pageHeight - top - height).toFixed(2)} ${width.toFixed(2)} ${height.toFixed(2)} re f`);
  };
  const line = (x1, y1, x2, y2, stroke = "#d8dee8", width = 1) => {
    commands.push(`${rgb(stroke)} RG ${width} w ${x1.toFixed(2)} ${pdfY(y1).toFixed(2)} m ${x2.toFixed(2)} ${pdfY(y2).toFixed(2)} l S`);
  };
  const text = (value, x, top, size = 10, bold = false, fill = "#17212f") => {
    color(fill);
    commands.push(`BT /${bold ? "F2" : "F1"} ${size} Tf ${x.toFixed(2)} ${pdfY(top).toFixed(2)} Td ${literal(value)} Tj ET`);
  };
  const footer = () => {
    line(margin, pageHeight - 36, pageWidth - margin, pageHeight - 36, "#d8dee8", 0.6);
    text("SASE Decision Studio", margin, pageHeight - 24, 8, true, "#647084");
    text(`Pagina ${pageNumber}`, pageWidth - margin - 42, pageHeight - 24, 8, false, "#647084");
  };
  const header = () => {
    rect(margin, 30, 24, 24, "#0f766e");
    rect(margin + 8, 38, 14, 3, "#ffffff");
    rect(margin + 8, 47, 14, 3, "#ffffff");
    text("SASE Decision Studio", margin + 34, 47, 11, true, "#17212f");
    line(margin, 66, pageWidth - margin, 66, "#d8dee8", 0.8);
    y = 86;
  };
  const newPage = (withHeader = true) => {
    if (commands.length) {
      footer();
      pages.push(commands.join("\n"));
    }
    commands = [];
    pageNumber += 1;
    rect(0, 0, pageWidth, pageHeight, "#ffffff");
    if (withHeader) header();
    else y = margin;
  };
  const ensure = height => {
    if (y + height > pageHeight - 58) newPage(true);
  };
  const addWrapped = (value, x, width, size = 10, bold = false, fill = "#17212f", leading = size + 4) => {
    const lines = wrap(value, size, width);
    ensure(lines.length * leading + 3);
    lines.forEach(row => {
      text(row, x, y, size, bold, fill);
      y += leading;
    });
  };

  newPage(false);

  return {
    cover(title, subtitle, lines) {
      rect(0, 0, pageWidth, 150, "#111827");
      rect(margin, 48, 42, 42, "#0f766e");
      rect(margin + 13, 62, 24, 4, "#ffffff");
      rect(margin + 13, 76, 24, 4, "#ffffff");
      text("SASE", margin + 56, 75, 13, true, "#6ee7d8");
      text(title, margin, 206, 28, true, "#17212f");
      text(subtitle, margin, 232, 13, false, "#647084");
      y = 276;
      lines.forEach(item => this.kv("Alcance", item));
      y += 16;
    },
    section(title) {
      ensure(54);
      y += 6;
      rect(margin, y, contentWidth, 28, "#eef4f8");
      text(title, margin + 12, y + 18, 14, true, "#17212f");
      y += 42;
    },
    subsection(title) {
      ensure(30);
      y += 4;
      text(title, margin, y, 12, true, "#0f766e");
      y += 18;
    },
    paragraph(value) {
      addWrapped(value, margin, contentWidth, 10, false, "#17212f", 14);
      y += 4;
    },
    bullet(value) {
      ensure(18);
      text("-", margin + 8, y, 10, true, "#0f766e");
      addWrapped(value, margin + 22, contentWidth - 22, 10, false, "#17212f", 14);
    },
    kv(label, value) {
      ensure(28);
      addWrapped(label, margin, 135, 9, true, "#647084", 12);
      const labelEnd = y;
      y -= 12;
      addWrapped(value, margin + 148, contentWidth - 148, 10, false, "#17212f", 14);
      y = Math.max(y, labelEnd) + 4;
    },
    barChart(title, rows, maxValue) {
      const rowHeight = 24;
      const chartHeight = 46 + rows.length * rowHeight;
      ensure(chartHeight + 10);
      rect(margin, y, contentWidth, chartHeight, "#fbfcfe");
      text(title, margin + 12, y + 18, 11, true, "#17212f");
      y += 34;
      rows.forEach(row => {
        const labelWidth = 128;
        const barWidth = Math.max(4, ((row.value / maxValue) * (contentWidth - labelWidth - 58)));
        text(row.label, margin + 12, y + 12, 9, true, "#17212f");
        rect(margin + labelWidth, y + 2, contentWidth - labelWidth - 48, 12, "#eef2f7");
        rect(margin + labelWidth, y + 2, barWidth, 12, row.color || "#0f766e");
        text(String(Number(row.value).toFixed(2)).replace(".00", ""), pageWidth - margin - 36, y + 12, 9, true, "#647084");
        y += rowHeight;
      });
      y += 12;
    },
    toBlob() {
      footer();
      pages.push(commands.join("\n"));
      const objects = [];
      const pageRefs = pages.map((_, index) => `${6 + index * 2} 0 R`).join(" ");
      objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
      objects[2] = `<< /Type /Pages /Kids [${pageRefs}] /Count ${pages.length} >>`;
      objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
      objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";
      pages.forEach((stream, index) => {
        const contentId = 5 + index * 2;
        const pageId = 6 + index * 2;
        objects[contentId] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
        objects[pageId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth.toFixed(2)} ${pageHeight.toFixed(2)}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`;
      });

      let output = "%PDF-1.4\n";
      const offsets = [0];
      for (let id = 1; id < objects.length; id += 1) {
        offsets[id] = output.length;
        output += `${id} 0 obj\n${objects[id]}\nendobj\n`;
      }
      const xrefOffset = output.length;
      output += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
      for (let id = 1; id < objects.length; id += 1) {
        output += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`;
      }
      output += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
      return new Blob([output], { type: "application/pdf" });
    }
  };
}

function refresh() {
  renderRanking();
  renderQuadrant();
}

function init() {
  renderCriteria();
  renderUseCases();
  renderRisks();
  renderTechnical();
  renderDeployment();
  renderInnovation();
  renderFramework();
  renderVendors();
  wireNavigation();
  refresh();
}

init();
