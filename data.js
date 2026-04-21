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

patchResponseItems: [
  {
    vendor: "Zscaler",
    cve: "CVE-2026-22569 / CVE-2025-54983",
    product: "Zscaler Client Connector Windows",
    disclosed: "2026-03-31 / 2025-11-12",
    patch: "Versiones corregidas 4.7.0.141, 4.8.0.63 y 4.6.0.216/4.7.0.47 según CVE.",
    responseTime: "Disponible al publicar CVE; fecha exacta de release no separada en NVD.",
    status: "Parche disponible",
    evidence: "NVD referencia release summary del fabricante.",
    source: "https://nvd.nist.gov/vuln/detail/CVE-2026-22569"
  },
  {
    vendor: "Netskope",
    cve: "CVE-2026-2809 / NSKPSA-2026-001",
    product: "Netskope Client + Endpoint DLP",
    disclosed: "2026-03-12",
    patch: "R135 o superior; backport R132.0.20.",
    responseTime: "0 días desde publicación pública; parche indicado en advisory inicial.",
    status: "Parche disponible",
    evidence: "Netskope indica que no conoce explotación activa.",
    source: "https://www.netskope.com/resources/netskope-resources/netskope-security-advisory-nskpsa-2026-001"
  },
  {
    vendor: "Palo Alto Networks",
    cve: "CVE-2026-0227",
    product: "PAN-OS / Prisma Access GlobalProtect",
    disclosed: "2026-01-14",
    patch: "Múltiples hotfixes PAN-OS; Prisma Access 11.2 >= 11.2.7-h8 y 10.2 >= 10.2.10-h29.",
    responseTime: "0 días para fixes publicados; Prisma Access aparece completado para todos los clientes el 2026-02-07 (~24 días).",
    status: "Parche disponible / upgrade gestionado completado",
    evidence: "Sin explotación maliciosa conocida para este CVE según advisory.",
    source: "https://security.paloaltonetworks.com/CVE-2026-0227"
  },
  {
    vendor: "Fortinet",
    cve: "CVE-2025-59718 / CVE-2025-59719 / CVE-2026-24858",
    product: "FortiCloud SSO en FortiOS, FortiProxy, FortiWeb y otros",
    disclosed: "2025-12-09 / 2026-01-27",
    patch: "CVE-2025-59718/59719: versiones FortiOS 7.6.4+, FortiProxy 7.6.4+, FortiSwitchManager 7.2.7+, FortiWeb 8.0.1+. CVE-2026-24858: FortiOS 7.6.6 y ramas corregidas según FG-IR-26-060.",
    responseTime: "59718/59719: parche en disclosure pero explotación reportada días después. 24858: Fortinet bloqueó cuentas el 2026-01-22, deshabilitó SSO cloud el 2026-01-26 y empezó parches 2026-01-28/29 (~1-7 días según hito).",
    status: "Parche disponible; explotación activa documentada",
    evidence: "CISA KEV y medios reportan explotación y robo de configuración en algunos casos.",
    source: "https://www.helpnetsecurity.com/2026/01/28/fortinet-forticloud-sso-zero-day-vulnerability-cve-2026-24858/"
  },
  {
    vendor: "Cisco",
    cve: "CVE-2026-20122 / 20126 / 20128 / 20129 / 20133",
    product: "Cisco Catalyst SD-WAN Manager",
    disclosed: "2026-02-25",
    patch: "Primeras versiones corregidas: 20.9.8.2, 20.12.6.1, 20.12.5.3, 20.15.4.2 y ramas indicadas por Cisco.",
    responseTime: "0 días para fixes publicados; advisory actualizado el 2026-03-05 por explotación y el 2026-03-18 con IoC/fixed releases.",
    status: "Parche disponible; explotación activa para parte de los CVEs",
    evidence: "Cisco confirmó explotación de CVE-2026-20122 y CVE-2026-20128; CISA añadió CVE-2026-20133 a KEV el 2026-04-21.",
    source: "https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-sdwan-authbp-qwCX8D4v.html"
  }
],

mediaIncidentItems: [
  {
    vendor: "Zscaler",
    date: "2025-09-02",
    type: "Fuga por tercero / CRM",
    impact: "Salesloft Drift/Salesforce expuso datos de clientes, licencias y ciertos casos de soporte. Zscaler indicó que productos e infraestructura no fueron comprometidos.",
    source: "TechRadar",
    url: "https://www.techradar.com/pro/security/zscaler-says-it-suffered-data-breach-following-salesloft-drift-compromise"
  },
  {
    vendor: "Netskope",
    date: "2026-04-21",
    type: "Sin fuga pública localizada",
    impact: "No se ha localizado una fuga pública comparable de producto/SASE en las fuentes revisadas; mantener vigilancia en RFP y solicitar declaración formal.",
    source: "Evaluación documental",
    url: "https://www.netskope.com/resources/netskope-resources/netskope-security-advisory-nskpsa-2026-001"
  },
  {
    vendor: "Palo Alto Networks",
    date: "2025-09-02",
    type: "Fuga por tercero / CRM y soporte",
    impact: "BleepingComputer reportó exposición de datos de clientes y casos de soporte por el incidente Salesloft Drift/Salesforce; Palo Alto indicó que no afectó productos, sistemas ni servicios.",
    source: "BleepingComputer",
    url: "https://www.bleepingcomputer.com/news/security/palo-alto-networks-data-breach-exposes-customer-info-support-cases/"
  },
  {
    vendor: "Palo Alto Networks",
    date: "2025-02-19",
    type: "Explotación de producto",
    impact: "Medios reportaron explotación activa de vulnerabilidades PAN-OS encadenadas contra interfaces de gestión expuestas; no equivale por sí sola a fuga confirmada, pero sí a riesgo de compromiso.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2025/02/19/palo-alto-networks-warns-of-another-firewall-vulnerability-under-attack-by-hackers/"
  },
  {
    vendor: "Fortinet",
    date: "2026-01-28",
    type: "Explotación con exfiltración de configuración",
    impact: "Medios y firmas de seguridad reportaron creación de cuentas rogue y robo de datos/configuración de firewalls FortiGate relacionados con FortiCloud SSO.",
    source: "TechRadar",
    url: "https://www.techradar.com/pro/security/fortinet-fortigate-devices-hit-in-automated-attacks-which-create-rogue-accounts-and-steal-firewall-data"
  },
  {
    vendor: "Cisco",
    date: "2026-03-05 / 2026-04-21",
    type: "Explotación de SD-WAN Manager",
    impact: "Cisco confirmó explotación de CVE-2026-20122 y CVE-2026-20128; CISA/medios señalaron explotación adicional de SD-WAN Manager. Riesgo de credenciales/privilegios y control del plano de gestión.",
    source: "Help Net Security",
    url: "https://www.helpnetsecurity.com/2026/04/21/cisa-flags-another-cisco-catalyst-sd-wan-manager-bug-as-exploited-cve-2026-20133/"
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

integrationProtocolItems: [
  {
    vendor: "Zscaler",
    protocols: ["REST API", "Nanolog Streaming Service", "Syslog", "SAML 2.0", "SCIM", "Cloud NSS", "Webhooks vía integraciones"],
    sources: ["ZIA/ZPA logs", "Zscaler Client Connector", "Cloud Sandbox", "DLP/CASB", "Audit/admin logs", "Threat intelligence ThreatLabz"],
    tools: ["Splunk", "Microsoft Sentinel", "QRadar", "Cortex XSIAM", "ServiceNow", "Okta", "Microsoft Entra ID", "CrowdStrike/EDR vía integraciones"],
    dataQuality: "Alta para web/proxy/ZTNA; validar normalización de campos NSS, latencia de streaming, campos DLP y correlación usuario-dispositivo.",
    notes: "Muy integrable con SIEM/SOAR, pero conviene fijar formato, campos obligatorios, retención y API rate limits en RFP.",
    docs: [
      { label: "Zscaler APIs", url: "https://help.zscaler.com/zidentity/about-zscaler-apis" },
      { label: "Nanolog Streaming Service", url: "https://help.zscaler.com/zia/about-nanolog-streaming-service" },
      { label: "SAML/SCIM", url: "https://help.zscaler.com/zia/configuring-saml" }
    ]
  },
  {
    vendor: "Netskope",
    protocols: ["REST API", "Cloud Log Shipper", "Syslog", "SAML 2.0", "SCIM", "IPSec/GRE telemetry", "Publisher logs"],
    sources: ["Netskope Client", "NPA Publishers", "CASB API", "DLP events", "SkopeAI/analytics", "Cloud confidence/app discovery"],
    tools: ["Splunk", "Microsoft Sentinel", "QRadar", "ServiceNow", "Okta", "Microsoft Entra ID", "CrowdStrike/EDR via ecosystem"],
    dataQuality: "Muy fuerte en SaaS/DLP/data context; validar exportación de eventos DLP, taxonomía de apps y consistencia API vs syslog.",
    notes: "Buen candidato si el SOC/GRC necesita contexto de datos; pedir en PoC ejemplos reales de eventos y esquema de campos.",
    docs: [
      { label: "Netskope API", url: "https://docs.netskope.com/en/rest-api-v2-overview/" },
      { label: "Cloud Log Shipper", url: "https://docs.netskope.com/en/cloud-log-shipper/" },
      { label: "SCIM integration", url: "https://docs.netskope.com/en/scim-integration/" }
    ]
  },
  {
    vendor: "Palo Alto Networks",
    protocols: ["REST API", "Syslog Collector", "HTTP Collector", "Strata Logging Service", "XDR Collector", "SAML 2.0", "SCIM", "Broker/ingest integrations"],
    sources: ["Prisma Access", "Prisma Access Browser", "NGFW/PAN-OS", "Cortex XDR", "Cortex XSIAM", "WildFire", "IoT Security", "External logs"],
    tools: ["Cortex XSIAM", "Cortex XDR", "Cortex XSOAR", "Splunk", "Microsoft Sentinel", "QRadar", "ServiceNow", "Okta/Entra ID"],
    dataQuality: "Muy alta si se usa Cortex/Strata como plano de datos; validar coste por TB, normalización XDM, retención y deduplicación.",
    notes: "La integración más potente aparece cuando SASE y SOC se consolidan en Cortex XSIAM/XDR; exigir arquitectura de ingesta y licenciamiento.",
    docs: [
      { label: "XSIAM data sources", url: "https://docs-cortex.paloaltonetworks.com/r/Cortex-XSIAM/Cortex-XSIAM-NG-SIEM-Documentation/Data-Sources" },
      { label: "Ingest data from Prisma Access", url: "https://docs-cortex.paloaltonetworks.com/r/Cortex-XSIAM/Cortex-XSIAM-Enterprise-Documentation/Ingest-data-from-Prisma-Access" },
      { label: "External logs Prisma Access", url: "https://docs.paloaltonetworks.com/prisma-access/administration/monitor/external-logs-and-other-data" }
    ]
  },
  {
    vendor: "Fortinet",
    protocols: ["Syslog", "FortiAnalyzer/FortiManager", "REST API", "SAML 2.0", "LDAP/RADIUS", "Fabric Connectors", "SNMP"],
    sources: ["FortiSASE", "FortiGate", "FortiClient", "FortiAnalyzer", "FortiGuard", "ZTNA/FWaaS/SWG events", "SD-WAN telemetry"],
    tools: ["FortiAnalyzer", "FortiSIEM", "Splunk", "Microsoft Sentinel", "QRadar", "ServiceNow", "Okta/Entra ID", "Fortinet Security Fabric"],
    dataQuality: "Alta en entornos Fortinet/Fabric; validar formato entre FortiSASE, FortiGate y FortiAnalyzer para evitar duplicidades.",
    notes: "Muy natural si ya existe Fortinet; pedir evidencia de logs FortiSASE específicos, APIs disponibles y mapeo a SIEM externo.",
    docs: [
      { label: "FortiSASE docs", url: "https://docs.fortinet.com/product/fortisase" },
      { label: "FortiAnalyzer syslog/log forwarding", url: "https://docs.fortinet.com/product/fortianalyzer" },
      { label: "Fortinet Developer Network", url: "https://fndn.fortinet.net/" }
    ]
  },
  {
    vendor: "Cisco",
    protocols: ["Reporting API", "S3 log export", "Webhook Push Security Events", "Third-Party Integrations API", "SAML 2.0", "SCIM", "XDR API/integration"],
    sources: ["Cisco Secure Access", "Secure Client", "DLP events", "Network tunnel logs", "DNS/SWG/FWaaS/CASB", "Cisco XDR", "Talos", "ThousandEyes"],
    tools: ["Cisco XDR", "Splunk", "Microsoft Sentinel", "QRadar", "ServiceNow", "Okta", "Microsoft Entra ID", "Duo", "ISE"],
    dataQuality: "Buena para reporting, S3 y XDR; validar frecuencia CSV gzip cada 10 min, límites de Reporting API y eventos push en tiempo real.",
    notes: "Muy interesante por API reciente y webhooks; pedir en PoC export S3, llamadas Reporting API y eventos push a SOAR.",
    docs: [
      { label: "Reporting API", url: "https://developer.cisco.com/docs/cloud-security/secure-access-api-reference-reporting-overview/" },
      { label: "Manage Logging", url: "https://docs.sse.cisco.com/sse-user-guide/docs/manage-your-logs" },
      { label: "Push Security Events", url: "https://developer.cisco.com/docs/cloud-security/secure-access-api-reference-admin-push-security-events-overview" },
      { label: "SAML IdP", url: "https://docs.sse.cisco.com/sse-user-guide/docs/configure-integrations-with-saml-identity-providers" },
      { label: "SCIM IdP", url: "https://docs.sse.cisco.com/sse-user-guide/docs/add-idp-integration" }
    ]
  }
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

encryptionLayerItems: [
  {
    vendor: "Zscaler",
    executive: "El tráfico del usuario se encapsula hacia la nube Zscaler; allí se descifra solo si la política lo permite, se inspecciona y se vuelve a cifrar hacia Internet o aplicaciones privadas.",
    layers: [
      { layer: "Endpoint / agente", encryption: "Z-Tunnel 2.0 con DTLS/TLS; cifrados modernos como AES-GCM y DHE/PFS según documentación de Zscaler.", mode: "Cliente ZCC crea el túnel y aplica steering por app/red.", poc: "Validar versión ZCC, TLS 1.3, bypass y comportamiento con redes confiables." },
      { layer: "Usuario a cloud", encryption: "TLS/DTLS; ZPA usa TLS para tráfico TCP/UDP hacia apps privadas.", mode: "El usuario no accede directo a la app; se brokeriza desde Zero Trust Exchange.", poc: "Probar latencia, reconexión y estabilidad en roaming." },
      { layer: "Sede / forwarding", encryption: "GRE sin cifrado extremo a extremo o IPSec si se requiere confidencialidad del túnel.", mode: "Sedes pueden enviar tráfico por GRE/IPSec/PAC/Branch Connector.", poc: "Exigir IPSec si el carrier no es confiable; validar HA y rutas." },
      { layer: "Inspección TLS", encryption: "SSL inspection con CA corporativa/Zscaler; soporte de visibilidad de cifrados quantum/PQC en ofertas recientes.", mode: "La plataforma actúa como punto de inspección controlado por política.", poc: "Medir impacto, excepciones, pinning, banca, salud y apps críticas." },
      { layer: "Datos/logs", encryption: "Cifrado en tránsito hacia logs/API e integración SIEM; revisar retención, región y claves contractualmente.", mode: "Los eventos se exportan para SOC/GRC.", poc: "Validar residencia UE, campos sensibles y anonimización." }
    ],
    sources: ["https://help.zscaler.com/client-connector/understanding-traffic-forwarding-z-tunnel-20", "https://www.zscaler.com/innovations-launch/quantum-security"]
  },
  {
    vendor: "Netskope",
    executive: "Netskope dirige el tráfico al NewEdge mediante cliente, proxy o túneles de sede; inspecciona SaaS/web/API con fuerte foco en datos y vuelve a cifrar según destino.",
    layers: [
      { layer: "Endpoint / agente", encryption: "Netskope Client con TLS 1.3 nativo y certificados de cliente.", mode: "El cliente decide steering hacia Netskope según usuario, app y política.", poc: "Validar certificados, actualización de agente y coexistencia EDR/VPN." },
      { layer: "Usuario a cloud", encryption: "TLS hacia NewEdge; NPA usa publishers para acceso privado sin exponer apps.", mode: "Acceso cloud-delivered con contexto de usuario/dispositivo/datos.", poc: "Probar NPA Publishers, failover y rendimiento de aplicaciones privadas." },
      { layer: "Sede / forwarding", encryption: "IPSec para túneles cifrados; GRE disponible para encaminamiento según diseño.", mode: "Sedes o proxies envían tráfico a NewEdge.", poc: "Definir cuándo GRE basta y cuándo IPSec es obligatorio." },
      { layer: "Inspección TLS", encryption: "SSL/TLS inspection con CA Netskope/custom y políticas de excepción.", mode: "Descifra, clasifica datos, aplica DLP/CASB y recifra.", poc: "Validar rotación de CA, apps con pinning y DLP en GenAI/SaaS." },
      { layer: "Datos/logs", encryption: "APIs y exportación SIEM cifradas; revisar tokenización, retención y región.", mode: "La telemetría alimenta SOC, GRC y reporting de riesgo.", poc: "Validar campos DLP, privacidad y residencia." }
    ],
    sources: ["https://docs.netskope.com/en/netskope-client/", "https://docs.netskope.com/en/ipsec-and-gre/"]
  },
  {
    vendor: "Palo Alto Networks",
    executive: "Prisma Access usa túneles gestionados y perfiles criptográficos para usuarios, sedes y service connections; la seguridad se apoya en PAN-OS, Strata y Cortex.",
    layers: [
      { layer: "Endpoint / agente", encryption: "Prisma Access Agent/GlobalProtect con TLS/IPSec según modo y versión.", mode: "El agente conecta al punto Prisma Access y aplica política por usuario/postura.", poc: "Validar versión, certificados, HIP/postura y experiencia en roaming." },
      { layer: "Usuario a cloud", encryption: "TLS y cifrado de plano de servicio entre nodos Prisma Access según diseño.", mode: "El tráfico llega a cloud security processing nodes antes del destino.", poc: "Medir latencia, región y logging a Strata/XSIAM." },
      { layer: "Sede / forwarding", encryption: "IPSec/IKE con AES-GCM o AES-CBC, SHA, DH groups y PFS configurables.", mode: "Remote networks y service connections cifran tráfico sede/DC hacia Prisma Access.", poc: "Alinear suites con política corporativa y exigir PFS/DH fuertes." },
      { layer: "Inspección TLS", encryption: "SSL decryption PAN-OS; soporte documentado para análisis/control de TLS 1.3 y PQC en decryption.", mode: "Descifra por política, inspecciona con seguridad PAN-OS y recifra.", poc: "Validar exclusiones, certificados, legal, privacidad y logs." },
      { layer: "Datos/logs", encryption: "Strata Logging Service/Cortex con transporte cifrado; revisar tenant, región y controles de acceso.", mode: "Telemetría centralizada para XDR/XSIAM y respuesta.", poc: "Validar segregación, RBAC, retención y exportación SIEM." }
    ],
    sources: ["https://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-overview", "https://docs.paloaltonetworks.com/network-security/decryption/administration/post-quantum-cryptography-decryption"]
  },
  {
    vendor: "Fortinet",
    executive: "FortiSASE combina FortiClient, FortiGate/edge y FortiOS; permite modelos cloud, edge y soberanos, con cifrado de túneles y de inspección alineado con Fortinet Security Fabric.",
    layers: [
      { layer: "Endpoint / agente", encryption: "FortiClient/FortiSASE con túneles seguros y certificados gestionados.", mode: "El cliente aplica acceso SSE/ZTNA y políticas de seguridad.", poc: "Validar FortiClient EMS, versiones y coexistencia con FortiGate." },
      { layer: "Usuario a cloud", encryption: "TLS/IPSec según modo de acceso y servicio.", mode: "Usuarios remotos pasan por FortiSASE para SWG/ZTNA/CASB/FWaaS.", poc: "Medir experiencia, PoP, split tunnel y certificados." },
      { layer: "Sede / forwarding", encryption: "IKEv2/IPSec con suites como AES-GCM/ChaCha20 según documentación FortiSASE; BGP para edge.", mode: "Thin Edge, Secure Edge y Branch On-Ramp conectan sedes.", poc: "Exigir algoritmos aprobados, HA, BGP y FortiSASE Sovereign si aplica." },
      { layer: "Inspección TLS", encryption: "Deep inspection con CA FortiSASE/FortiGate y políticas de exención.", mode: "Descifra e inspecciona con FortiGuard/FortiOS antes de recifrar.", poc: "Validar impacto, excepciones y gestión de CA en endpoints." },
      { layer: "Datos/logs", encryption: "Logs hacia FortiAnalyzer/FortiManager/cloud cifrados; revisar soberanía y tenencia.", mode: "Operación centralizada en Fabric.", poc: "Validar retención, RBAC, exportación SOC y ubicación." }
    ],
    sources: ["https://docs.fortinet.com/document/fortisase/latest/administration-guide/116757/ipsec-tunnels", "https://www.fortinet.com/products/sase"]
  },
  {
    vendor: "Cisco",
    executive: "Cisco Secure Access cifra accesos con Secure Client, Resource Connectors e IPsec para sedes; el valor ejecutivo está en combinar identidad, red, observabilidad y XDR.",
    layers: [
      { layer: "Endpoint / agente", encryption: "Cisco Secure Client con túneles seguros para ZTNA/VPNaaS y módulos de seguridad.", mode: "El cliente dirige tráfico a Secure Access y aplica identidad/postura.", poc: "Validar Secure Client, posture, Duo/ISE y experiencia móvil." },
      { layer: "Usuario a cloud", encryption: "TLS para acceso web/ZTNA y túneles cifrados según modo.", mode: "Acceso cloud-delivered a Internet, SaaS y apps privadas.", poc: "Probar clientless ZTNA, Resource Connectors y apps legacy." },
      { layer: "Sede / forwarding", encryption: "IPsec/IKEv2 para túneles site-to-cloud; integración SD-WAN según arquitectura.", mode: "Sedes conectan a Cisco Secure Access o SD-WAN fabric.", poc: "Validar cifrados, rutas, HA y segmentación SGT/ISE." },
      { layer: "Inspección TLS", encryption: "Full/selective TLS decryption con certificados corporativos y políticas de excepción.", mode: "FWaaS/SWG descifra antes de inspección y recifra hacia destino.", poc: "Validar excepciones, certificados, rendimiento y apps con pinning." },
      { layer: "Datos/logs", encryption: "Telemetría hacia Cisco XDR/ThousandEyes/SIEM por canales cifrados; revisar región y RBAC.", mode: "Observabilidad y respuesta centralizadas.", poc: "Validar integración XDR, privacidad, exportaciones y retención." }
    ],
    sources: ["https://docs.sse.cisco.com/sse-user-guide/docs/welcome-cisco-secure-access", "https://docs.sse.cisco.com/sse-user-guide/docs/configure-ipsec-tunnels"]
  }
],

encryptionSpecItems: [
  {
    vendor: "Zscaler",
    userTunnel: "Z-Tunnel 2.0 sobre DTLS/TLS por 443; DTLS usa UDP/443 y TLS usa TCP/443.",
    siteTunnel: "GRE o IPSec; para IPSec Zscaler recomienda IKEv2 y AES-GCM frente a NULL/AES-CBC.",
    algorithms: "IPSec: NULL, AES-CBC y AES-GCM soportados; preferencia recomendada: IKEv2 + AES-GCM.",
    tlsInspection: "ZIA inspecciona TLS/SSL mediante CA raíz corporativa/Zscaler y certificados de corta vida emitidos por la plataforma.",
    keyModel: "PSK para IPSec; CA corporativa/Zscaler para inspección TLS; exigir gestión de CA, rotación y exclusiones.",
    pqc: "Zscaler publica capacidades de visibilidad/inspección de tráfico con cifrado post-cuántico en su oferta quantum security.",
    officialDocs: [
      { label: "Z-Tunnel 2.0 DTLS/TLS", url: "https://zscaler.az-ap.com/article/72/tunnel-20-dtls-and-tls-mode" },
      { label: "IPSec guidance", url: "https://www.zscaler.com/blogs/product-insights/new-ipsec-traffic-forwarding-guidance-zscaler-customers" },
      { label: "TLS/SSL inspection", url: "https://help.zscaler.com/downloads/zia/reference-architecture/tlsssl-inspection-zscaler-internet-access/TLS-SSL-Inspection-with-Zscaler-Internet-Access.pdf" }
    ]
  },
  {
    vendor: "Netskope",
    userTunnel: "Netskope Client y acceso a NewEdge con TLS; documentación comercial destaca inspección TLS 1.3 nativa.",
    siteTunnel: "GRE/IPSec hacia NewEdge según diseño de forwarding.",
    algorithms: "La documentación pública consultada no lista suites completas por tenant; exigir matriz de cifrados TLS/IPSec en RFP.",
    tlsInspection: "SSL/TLS inspection cloud-native con soporte TLS 1.3 nativo para usuarios, ubicaciones y dispositivos.",
    keyModel: "Certificados de cliente/tenant y CA de inspección Netskope/custom; revisar rotación de CA y BYOK si aplica.",
    pqc: "Roadmap/planificación post-cuántica publicada; exigir disponibilidad contractual si es requisito.",
    officialDocs: [
      { label: "SSL/TLS Inspection", url: "https://www.netskope.com/netskope-one/ssl-tls-inspection" },
      { label: "Netskope Client docs", url: "https://docs.netskope.com/en/netskope-client/" },
      { label: "IPSec and GRE", url: "https://docs.netskope.com/en/ipsec-and-gre/" }
    ]
  },
  {
    vendor: "Palo Alto Networks",
    userTunnel: "Prisma Access Agent/GlobalProtect con TLS/IPSec según despliegue; SSL decryption soporta TLS 1.3 en Prisma Access.",
    siteTunnel: "Remote Networks con IPSec/IKE configurable.",
    algorithms: "IPSec ESP: aes-256-gcm, aes-256-cbc, aes-192-cbc, aes-128-gcm, aes-128-cbc, 3des, des o null; autenticación sha1/256/384/512/md5; DH grupos 1,2,5,14,19,20 y PFS/no-PFS.",
    tlsInspection: "TLS 1.3 decryption para SSL Forward Proxy, Inbound Inspection, Network Packet Broker y port mirroring.",
    keyModel: "Perfiles IKE/IPSec, certificados de decryption y Strata Logging Service; exigir DH 19/20, PFS y deshabilitar DES/3DES/MD5 si política lo permite.",
    pqc: "Documentación específica de decryption post-cuántica para NGFW/Prisma Access.",
    officialDocs: [
      { label: "Prisma Access IPSec", url: "https://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-remote-networks/connect-a-remote-network-site-to-prisma-access" },
      { label: "TLS 1.3 Decryption", url: "https://docs.paloaltonetworks.com/network-security/decryption/administration/decryption-overview/tls-1-3-ssl-decryption" },
      { label: "PQC decryption", url: "https://docs.paloaltonetworks.com/network-security/decryption/administration/post-quantum-cryptography-decryption" }
    ]
  },
  {
    vendor: "Fortinet",
    userTunnel: "FortiClient/FortiSASE con IKEv2/IPSec para SIA en perfiles soportados.",
    siteTunnel: "FortiSASE security PoPs con IKEv2, mode config, DPD, NAT traversal y PFS.",
    algorithms: "Phase 1 FortiSASE: AES128/SHA256, AES256/SHA256, AES128-GCM/PRFSHA256, AES256-GCM/PRFSHA384, ChaCha20-Poly1305/PRFSHA2. Phase 2: AES128/AES256 con SHA1/SHA256, AES-GCM o ChaCha20-Poly1305.",
    tlsInspection: "Deep inspection con CA FortiSASE/FortiGate; revisar excepciones y compatibilidad de endpoints.",
    keyModel: "IKEv2, DH 5/15 en perfiles FortiSASE, key life 86400s Phase 1 y 43200s Phase 2 según doc.",
    pqc: "Fortinet publica línea quantum-safe/PQC para FortiOS/FortiSASE; exigir versión y alcance exacto.",
    officialDocs: [
      { label: "FortiSASE tunnel settings", url: "https://docs.fortinet.com/document/fortisase/26.1.26/feature-administration-guide/357569/tunnel-settings" },
      { label: "FortiOS encryption algorithms", url: "https://docs.fortinet.com/document/fortigate/7.6.2/administration-guide/238852/encryption-algorithms" },
      { label: "FortiSASE", url: "https://www.fortinet.com/products/sase" }
    ]
  },
  {
    vendor: "Cisco",
    userTunnel: "Cisco Secure Client/Secure Access con TLS para acceso web/ZTNA y túneles cifrados según modo.",
    siteTunnel: "Network tunnels IPsec IKEv2 hacia Cisco Secure Access; 1 Gbps por túnel según documentación.",
    algorithms: "Ejemplos ASA/IOS XE: IKEv2 aes-gcm-256, PRF SHA256, DH group 19/20; IPsec ESP aes-gcm-256. Integración SD-Routing permite suites AES 256 CBC SHA1/SHA2, AES 128 CBC SHA1/SHA2 y AES 256 GCM para IPsec.",
    tlsInspection: "Full/selective TLS decryption en Secure Access/FWaaS/SWG; exigir guía de CA, exclusiones y pinning.",
    keyModel: "Passphrase/PSK de túnel, IKE ID, VTI, UDP 500/4500, BGP/ECMP si se usan múltiples túneles.",
    pqc: "Cisco Trust Center publica estrategia PQC; validar aplicabilidad concreta a Secure Access/SD-WAN.",
    officialDocs: [
      { label: "Secure Access network tunnels", url: "https://docs.sse.cisco.com/sse-user-guide/docs/secure-access-network-tunnels" },
      { label: "ASA tunnel guide", url: "https://docs.sse.cisco.com/sse-dns-guide/docs/configure-tunnels-cisco-asa" },
      { label: "Cisco Secure Access SD-Routing PDF", url: "https://www.cisco.com/c/en/us/td/docs/routers/sd-routing/b-security-configuration-sd-routing/m-cisco-secure-access-integration.pdf" }
    ]
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
