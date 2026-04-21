window.SASE_DATA = {
vendors: [
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
],

criteria: [
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
],

useCases: [
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
],

productCapabilities: [
  {
    vendor: "Zscaler",
    primary: "Zscaler Zero Trust Exchange",
    implementationGrade: "Alto en SSE/ZTNA cloud-first; medio si el alcance exige SD-WAN nativo o edge físico.",
    maturity: 4.5,
    core: ["ZIA / SWG", "ZPA / ZTNA", "CASB", "Cloud DLP", "Zero Trust Firewall", "Browser Isolation", "Digital Experience", "AI Security", "PQC/Quantum Visibility"],
    adjacent: ["Zscaler Client Connector", "Zscaler Digital Experience", "Zscaler Deception", "Workload Communications", "Data Security Posture Management"],
    peerOverlap: ["Netskope One SSE", "Prisma Access", "Cisco Secure Access", "FortiSASE"],
    implementation: ["Cliente ZCC", "PAC / GRE / IPSec", "Conectores ZPA", "Integración IdP/SIEM/SOAR", "Políticas por usuario, app, riesgo y postura"],
    differentiators: ["Proxy cloud zero trust muy maduro", "Inspección TLS a escala", "ZTNA sin exponer aplicaciones", "Fuerte encaje para usuarios remotos y SaaS"],
    caution: "Requiere validar SD-WAN, aplicaciones no web, bypasses, PoPs, experiencia de agente y convivencia con firewalls/SD-WAN existentes.",
    sources: ["https://www.zscaler.com/products/zero-trust-exchange", "https://www.zscaler.com/products/zscaler-internet-access", "https://www.zscaler.com/products/zscaler-private-access"]
  },
  {
    vendor: "Netskope",
    primary: "Netskope One",
    implementationGrade: "Alto en data security, CASB/SSE y cloud; creciente en SD-WAN/SASE Branch.",
    maturity: 4.4,
    core: ["Netskope One SSE", "CASB", "Next Gen SWG", "Private Access / ZTNA", "Cloud Firewall", "Unified DLP", "AI Security", "Endpoint SD-WAN", "SASE Branch"],
    adjacent: ["Netskope One Client", "NewEdge Network", "Zero Trust Engine", "SkopeAI", "Advanced Analytics", "IoT Device Intelligence", "Enterprise Browser"],
    peerOverlap: ["Zscaler ZIA/ZPA", "Prisma Access", "Cisco Secure Access", "FortiSASE"],
    implementation: ["Netskope Client", "NPA Publishers", "GRE/IPSec", "Explicit proxy", "API CASB", "Endpoint DLP", "Orchestrator para sedes"],
    differentiators: ["Muy fuerte en datos, SaaS y CASB", "Contexto granular de aplicaciones", "Buen modelo de DLP y clasificación", "Plataforma convergente con foco AI/data"],
    caution: "Validar disponibilidad real de SD-WAN/branch por país, madurez operacional del endpoint DLP y dependencia de diseño NewEdge/Publishers.",
    sources: ["https://www.netskope.com/products", "https://www.netskope.com/netskope-one", "https://www.netskope.com/products/casb", "https://www.netskope.com/products/sd-wan"]
  },
  {
    vendor: "Palo Alto Networks",
    primary: "Prisma SASE / Prisma Access",
    implementationGrade: "Muy alto en plataforma enterprise; exige mayor gobierno, arquitectura y operación para capturar todo el valor.",
    maturity: 4.6,
    core: ["Prisma Access", "ZTNA", "SWG", "CASB", "FWaaS", "Prisma SD-WAN", "Prisma Access Browser", "ADEM", "AI Access Security", "Prisma AIRS"],
    adjacent: ["Cortex XSIAM", "Cortex XDR", "Cortex XSOAR", "Cortex Xpanse", "Strata Cloud Manager", "NGFW / PAN-OS", "Advanced WildFire"],
    peerOverlap: ["Zscaler Zero Trust Exchange", "Netskope One", "Cisco Secure Access", "FortiSASE"],
    implementation: ["Prisma Access Agent", "Remote Networks", "Service Connections", "Panorama/Strata", "Logging Service", "Integración Cortex XSIAM/SIEM"],
    differentiators: ["Mejor encaje si ya existe PAN-OS/Cortex", "Profundidad de prevención e inteligencia", "XSIAM/XDR diferencial para SOC", "Browser y AIRS para IA/terceros"],
    caution: "Coste, licenciamiento, complejidad de diseño, gobierno de políticas y separación entre capacidades cloud y appliances on-prem deben validarse en PoC.",
    sources: ["https://www.paloaltonetworks.com/sase/access", "https://www.paloaltonetworks.com/sase/prisma-access-browser", "https://www.paloaltonetworks.com/cortex/cortex-xsiam"]
  },
  {
    vendor: "Fortinet",
    primary: "FortiSASE / Fortinet Unified SASE",
    implementationGrade: "Alto en sedes, SD-WAN y entornos Fortinet; medio-alto en SSE puro frente a especialistas cloud.",
    maturity: 4.2,
    core: ["FortiSASE", "Secure SD-WAN", "SWG", "ZTNA", "CASB", "FWaaS", "RBI", "SSPM", "DEM", "FortiSASE Sovereign"],
    adjacent: ["FortiGate", "FortiManager", "FortiAnalyzer", "FortiClient", "FortiGuard Labs", "FortiAI-Assist", "FortiOS"],
    peerOverlap: ["Cisco Secure Access + SD-WAN", "Prisma SASE", "Netskope One SASE", "Zscaler SSE con SD-WAN tercero"],
    implementation: ["FortiClient", "FortiGate Secure Edge", "Thin Edge", "Branch On-Ramp", "FortiManager", "FortiSASE cloud o sovereign"],
    differentiators: ["Convergencia real de red y seguridad", "Fuerte SD-WAN y edge", "Modelo TCO competitivo", "Opción soberana/on-premise más clara"],
    caution: "Exigir patch governance, hardening de gestión, diseño de roles y validación de que FortiSASE cubre los casos cloud/SaaS con la misma profundidad requerida.",
    sources: ["https://www.fortinet.com/products/sase", "https://www.fortinet.com/products/sd-wan"]
  },
  {
    vendor: "Cisco",
    primary: "Cisco Secure Access",
    implementationGrade: "Alto en ecosistema Cisco, identidad, red y observabilidad; medio si se busca una consola SSE completamente independiente de legado.",
    maturity: 4.1,
    core: ["Cisco Secure Access", "ZTNA", "SWG", "CASB", "FWaaS", "DNS Security", "DLP", "RBI", "VPNaaS", "AI Access", "Hybrid Private Access"],
    adjacent: ["Cisco Secure Client", "Umbrella", "Duo", "ISE", "Catalyst SD-WAN", "ThousandEyes", "Cisco XDR", "Talos"],
    peerOverlap: ["Fortinet Unified SASE", "Prisma SASE", "Zscaler ZIA/ZPA", "Netskope One"],
    implementation: ["Secure Client", "Clientless ZTNA", "Resource Connectors", "SAML IdP", "SD-WAN/IPsec", "ThousandEyes Experience Insights", "XDR integration"],
    differentiators: ["Muy fuerte si ya existe Cisco", "DNS/SWG y Secure Client asentados", "Duo/ISE/SD-WAN/ThousandEyes aportan ecosistema", "AI Access y Hybrid Private Access recientes"],
    caution: "Validar convergencia real entre Secure Access, Umbrella, SD-WAN, Duo, ISE y XDR; revisar paquetes/licencias y operación multi-consola.",
    sources: ["https://www.cisco.com/site/us/en/products/security/secure-access/index.html", "https://www.cisco.com/c/en/us/products/collateral/security/secure-access/secure-access-ds.html", "https://www.cisco.com/c/en/us/solutions/collateral/security-service-edge-sse/security-service-edge-sse-package-og.html"]
  }
],

riskItems: [
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
],

cveItems: [
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
],

advancedMetrics: [
  { id: "functional", label: "Functional Fit", weight: 25, scores: [4.3, 4.5, 4.6, 4.2, 4.2] },
  { id: "detection", label: "Detection Effectiveness", weight: 20, scores: [4.6, 4.4, 4.7, 4.2, 4.4] },
  { id: "telemetry", label: "Telemetry & Sources", weight: 15, scores: [4.2, 4.5, 4.7, 4.2, 4.5] },
  { id: "intel", label: "Intelligence Value", weight: 15, scores: [4.5, 4.3, 4.8, 4.2, 4.6] },
  { id: "data", label: "Data Quality", weight: 10, scores: [4.1, 4.6, 4.4, 4.0, 4.2] },
  { id: "operability", label: "Operability", weight: 10, scores: [4.0, 4.2, 4.1, 4.2, 4.1] },
  { id: "market", label: "Market Confidence", weight: 5, scores: [4.5, 4.4, 4.6, 4.3, 4.4] }
],

threatHeatmap: [
  { type: "Phishing", scores: [5, 4, 5, 4, 4] },
  { type: "Malware", scores: [5, 4, 5, 4, 4] },
  { type: "SaaS Abuse", scores: [4, 5, 4, 3, 4] },
  { type: "Insider Risk", scores: [4, 5, 4, 4, 3] },
  { type: "Data Exfiltration", scores: [4, 5, 4, 4, 3] }
],

techItems: [
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
],

deploymentItems: [
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
      { label: "Cisco SASE customer stories", url: "https://www.cisco.com/site/us/en/solutions/secure-access-service-edge-sase/index.html" }
    ],
    poc: "Validar consola, convergencia real, Secure Client, SD-WAN, ISE/SGT, ThousandEyes y excepciones SaaS."
  }
],

quantumAiItems: [
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
],

evidenceItems: [
  {
    vendor: "Zscaler",
    confidence: 4.4,
    items: [
      { type: "Fabricante", title: "Documentación técnica y customer stories", url: "https://www.zscaler.com/customers", confidence: 4 },
      { type: "Mercado", title: "Liderazgo SSE y señal Gartner", url: "https://www.zscaler.com/blogs/company-news/zscaler-named-leader-2025-gartner-r-magic-quadrant-tm-security-service-edge-sse", confidence: 4 },
      { type: "PoC", title: "Pendiente de validar latencia, forwarding y apps no web", url: "", confidence: 3 }
    ]
  },
  {
    vendor: "Netskope",
    confidence: 4.3,
    items: [
      { type: "Fabricante", title: "Netskope One y documentación oficial", url: "https://docs.netskope.com/en/", confidence: 4 },
      { type: "Mercado", title: "Cliente y enfoque data-centric", url: "https://www.netskope.com/customers", confidence: 4 },
      { type: "PoC", title: "Pendiente de validar Endpoint DLP, NPA Publishers y PQC roadmap", url: "", confidence: 3 }
    ]
  },
  {
    vendor: "Palo Alto Networks",
    confidence: 4.5,
    items: [
      { type: "Fabricante", title: "Prisma Access y Cortex XSIAM", url: "https://www.paloaltonetworks.com/cortex/cortex-xsiam", confidence: 5 },
      { type: "Técnica", title: "PQC/decryption y Prisma AIRS", url: "https://docs.paloaltonetworks.com/network-security/decryption/administration/post-quantum-cryptography-decryption", confidence: 4 },
      { type: "PoC", title: "Pendiente de validar integración real SASE + XSIAM + Strata", url: "", confidence: 3 }
    ]
  },
  {
    vendor: "Fortinet",
    confidence: 4.2,
    items: [
      { type: "Fabricante", title: "Fortinet SASE y FortiSASE docs", url: "https://www.fortinet.com/products/sase", confidence: 4 },
      { type: "Cumplimiento", title: "ENS vía Flexwan by Fortinet", url: "https://www.telefonica.es/es/wp-content/uploads/sites/10/2021/11/esquema-nacional-seguridad-2019-0011-TDE.pdf", confidence: 4 },
      { type: "PoC", title: "Pendiente de validar patch governance y alcance Sovereign SASE", url: "", confidence: 3 }
    ]
  },
  {
    vendor: "Cisco",
    confidence: 4.2,
    items: [
      { type: "Fabricante", title: "Cisco Secure Access y SASE", url: "https://www.cisco.com/site/us/en/solutions/secure-access-service-edge-sase/index.html", confidence: 4 },
      { type: "Técnica", title: "AI Access y PQC Trust Center", url: "https://www.cisco.com/c/en/us/about/trust-center/post-quantum-cryptography.html", confidence: 4 },
      { type: "PoC", title: "Pendiente de validar convergencia Secure Access + SD-WAN + ISE", url: "", confidence: 3 }
    ]
  }
],

profilePresets: {
  balanced: {
    label: "Balanceado",
    weights: {},
    required: []
  },
  publicEns: {
    label: "Sector público / ENS",
    weights: { onprem: 4, risk: 5, ecosystem: 5, implementation: 4, tco: 4 },
    required: ["Residencia datos UE", "Opción on-premise / soberana"]
  },
  dataCentric: {
    label: "Data-centric / SaaS",
    weights: { dlp: 5, casb: 5, ai: 5, apps: 5, ecosystem: 4 },
    required: ["DLP SaaS y web", "CASB API para SaaS", "Control y seguridad de IA"]
  },
  socXsiam: {
    label: "SOC / XSIAM / SIEM",
    weights: { soc: 5, ecosystem: 5, threat: 5, ai: 5, risk: 5 },
    required: ["Integración XSIAM/SIEM/SOAR"]
  },
  branchHeavy: {
    label: "Sedes / SD-WAN",
    weights: { sdwan: 5, apps: 5, performance: 5, implementation: 5, tco: 5 },
    required: ["SD-WAN para sedes", "Coexistencia red actual"]
  },
  aiQuantum: {
    label: "IA / Quantum ready",
    weights: { ai: 5, quantum: 5, dlp: 5, risk: 5, ecosystem: 4 },
    required: ["Preparación quantum / PQC", "Control y seguridad de IA"]
  }
},

scenarios: {
  balanced: {},
  cloud: { ztna: 5, swg: 5, performance: 5, sdwan: 2, tco: 3 },
  data: { dlp: 5, casb: 5, ecosystem: 4, risk: 5, sdwan: 2 },
  branch: { sdwan: 5, apps: 5, performance: 4, tco: 5, ztna: 3 },
  platform: { ecosystem: 5, soc: 5, apps: 5, threat: 5, ops: 4, implementation: 4, ai: 5, quantum: 4, tco: 3 }
}
};
