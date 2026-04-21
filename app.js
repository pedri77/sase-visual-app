const {
  vendors,
  criteria,
  useCases,
  productCapabilities = [],
  riskItems,
  cveItems,
  patchResponseItems = [],
  mediaIncidentItems = [],
  advancedMetrics,
  threatHeatmap,
  techItems,
  encryptionLayerItems = [],
  encryptionSpecItems = [],
  deploymentItems,
  quantumAiItems,
  scenarios,
  evidenceItems,
  profilePresets
} = window.SASE_DATA;

const state = {
  weights: Object.fromEntries(criteria.map(c => [c.id, c.weight])),
  required: Object.fromEntries(useCases.map(u => [u.label, u.required])),
  profile: {
    preset: "balanced",
    sector: "No definido",
    size: "No definido",
    soc: "No definido",
    notes: ""
  },
  frameworkVendors: {}
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
    <div class="risk-subpanel">
      <h3>Respuesta a CVEs y parches</h3>
      <table>
        <thead>
          <tr>
            <th>Fabricante</th>
            <th>CVE / producto</th>
            <th>Parche</th>
            <th>Tiempo de respuesta</th>
            <th>Estado / fuente</th>
          </tr>
        </thead>
        <tbody>
          ${patchResponseItems.map(item => `
            <tr>
              <td><strong>${item.vendor}</strong><br><small>${item.disclosed}</small></td>
              <td>${item.cve}<br><small>${item.product}</small></td>
              <td>${item.patch}</td>
              <td>${item.responseTime}</td>
              <td><span class="status-pill">${item.status}</span><br><small>${item.evidence}</small><br><a href="${item.source}" target="_blank" rel="noreferrer">Fuente</a></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <div class="risk-subpanel">
      <h3>Fugas e incidentes documentados en medios</h3>
      <table>
        <thead>
          <tr>
            <th>Fabricante</th>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Impacto reportado</th>
            <th>Noticia</th>
          </tr>
        </thead>
        <tbody>
          ${mediaIncidentItems.map(item => `
            <tr>
              <td><strong>${item.vendor}</strong></td>
              <td>${item.date}</td>
              <td><span class="status-pill">${item.type}</span></td>
              <td>${item.impact}</td>
              <td><a href="${item.url}" target="_blank" rel="noreferrer">${item.source}</a></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <div class="risk-subpanel">
      <h3>Relación de CVEs/advisories</h3>
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
    </div>
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

function applyProfilePreset(presetId) {
  const preset = profilePresets[presetId] || profilePresets.balanced;
  criteria.forEach(criterion => {
    state.weights[criterion.id] = preset.weights[criterion.id] || criterion.weight;
  });
  useCases.forEach(useCase => {
    state.required[useCase.label] = preset.required.includes(useCase.label);
  });
  state.profile.preset = presetId;
  renderCriteria();
  renderUseCases();
  renderProfile();
  refresh();
}

function renderProfile() {
  const preset = profilePresets[state.profile.preset] || profilePresets.balanced;
  document.getElementById("profileGrid").innerHTML = `
    <article class="profile-panel">
      <label for="profilePreset">Tipo de cliente</label>
      <select id="profilePreset">
        ${Object.entries(profilePresets).map(([id, item]) => `<option value="${id}" ${id === state.profile.preset ? "selected" : ""}>${item.label}</option>`).join("")}
      </select>
      <label for="profileSector">Sector</label>
      <select id="profileSector">
        ${["No definido", "Sector público", "Banca/seguros", "Industria", "Retail", "Salud", "Educación", "Tecnología"].map(item => `<option ${item === state.profile.sector ? "selected" : ""}>${item}</option>`).join("")}
      </select>
      <label for="profileSize">Tamaño</label>
      <select id="profileSize">
        ${["No definido", "< 1.000 usuarios", "1.000-5.000 usuarios", "5.000-25.000 usuarios", "> 25.000 usuarios"].map(item => `<option ${item === state.profile.size ? "selected" : ""}>${item}</option>`).join("")}
      </select>
      <label for="profileSoc">SOC / SIEM / XSIAM</label>
      <select id="profileSoc">
        ${["No definido", "Sin SOC maduro", "SIEM corporativo", "SOAR/SOC avanzado", "Cortex XSIAM estratégico"].map(item => `<option ${item === state.profile.soc ? "selected" : ""}>${item}</option>`).join("")}
      </select>
      <label for="profileNotes">Notas de contexto</label>
      <textarea id="profileNotes" rows="4" placeholder="Ej: ENS Alto, datos sensibles, GenAI en producción, muchas sedes...">${state.profile.notes}</textarea>
      <div class="profile-actions">
        <button class="inline-link" id="applyProfile" type="button">Aplicar perfil</button>
      </div>
    </article>
    <article class="profile-panel">
      <strong>Impacto del perfil activo</strong>
      <p>${preset.label}</p>
      <div class="fit-chips">
        ${Object.entries(preset.weights).map(([key, value]) => `<span class="fit-chip high">${criteria.find(c => c.id === key)?.label || key}: ${value}</span>`).join("") || `<span class="fit-chip">Pesos base</span>`}
      </div>
      <p><strong>Casos imprescindibles sugeridos:</strong> ${preset.required.length ? preset.required.join(", ") : "Ninguno"}</p>
    </article>
  `;

  document.getElementById("applyProfile").addEventListener("click", () => {
    state.profile.sector = document.getElementById("profileSector").value;
    state.profile.size = document.getElementById("profileSize").value;
    state.profile.soc = document.getElementById("profileSoc").value;
    state.profile.notes = document.getElementById("profileNotes").value;
    applyProfilePreset(document.getElementById("profilePreset").value);
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
  const cards = techItems.map(item => {
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

  const encryptionMatrix = encryptionLayerItems.map(item => {
    const vendor = vendors.find(v => v.name === item.vendor);
    return `
      <article class="encryption-item" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="Logo ${item.vendor}" loading="lazy">
          <strong>${item.vendor}</strong>
        </div>
        <p class="executive-mode">${item.executive}</p>
        <div class="encryption-layers">
          ${item.layers.map(layer => `
            <div class="encryption-layer">
              <span>${layer.layer}</span>
              <p><strong>Cifrado:</strong> ${layer.encryption}</p>
              <p><strong>Modo ejecutivo:</strong> ${layer.mode}</p>
              <p><strong>PoC:</strong> ${layer.poc}</p>
            </div>
          `).join("")}
        </div>
        <div class="vendor-links">
          ${item.sources.map((source, index) => `<a href="${source}" target="_blank" rel="noreferrer">Fuente ${index + 1}</a>`).join("")}
        </div>
      </article>
    `;
  }).join("");

  const specMatrix = `
    <article class="framework-item encryption-summary">
      <strong>Especificaciones técnicas verificables</strong>
      <p>Esta tabla está pensada para RFP/PoC: identifica el protocolo, algoritmos documentados, modelo de claves/certificados y el enlace oficial donde contrastarlo.</p>
      <div class="spec-table">
        <table>
          <thead>
            <tr>
              <th>Fabricante</th>
              <th>Túnel usuario</th>
              <th>Sede / edge</th>
              <th>Algoritmos y suites</th>
              <th>TLS inspection</th>
              <th>Claves / CA</th>
              <th>Docs oficiales</th>
            </tr>
          </thead>
          <tbody>
            ${encryptionSpecItems.map(item => `
              <tr>
                <td><strong>${item.vendor}</strong></td>
                <td>${item.userTunnel}</td>
                <td>${item.siteTunnel}</td>
                <td>${item.algorithms}<br><small>PQC: ${item.pqc}</small></td>
                <td>${item.tlsInspection}</td>
                <td>${item.keyModel}</td>
                <td>${item.officialDocs.map(doc => `<a href="${doc.url}" target="_blank" rel="noreferrer">${doc.label}</a>`).join("<br>")}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `;

  document.getElementById("techGrid").innerHTML = `
    ${cards}
    ${specMatrix}
    <article class="framework-item encryption-summary">
      <strong>Lectura ejecutiva de cifrado por capas</strong>
      <p>El punto crítico no es solo si el túnel cifra, sino dónde se termina TLS, quién custodia las CA, cómo se inspecciona, qué algoritmos se permiten y qué evidencias quedan para SOC/GRC.</p>
      <div class="fit-chips">
        <span class="fit-chip high">Endpoint</span>
        <span class="fit-chip high">Túnel usuario-cloud</span>
        <span class="fit-chip high">Sede/edge</span>
        <span class="fit-chip high">Inspección TLS</span>
        <span class="fit-chip high">Logs/datos</span>
      </div>
    </article>
    ${encryptionMatrix}
  `;
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

function renderCapabilities() {
  if (!productCapabilities.length) {
    document.getElementById("capabilitiesGrid").innerHTML = `
      <article class="capability-item">
        <strong>Catálogo de funcionalidades no disponible</strong>
        <p>Recarga la página para obtener la última versión publicada de los datos.</p>
      </article>
    `;
    return;
  }

  document.getElementById("capabilitiesGrid").innerHTML = productCapabilities.map(item => {
    const vendor = vendors.find(v => v.name === item.vendor);
    if (!vendor) return "";
    return `
      <article class="capability-item" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="Logo ${item.vendor}" loading="lazy">
          <div>
            <strong>${item.vendor}</strong>
            <p>${item.primary}</p>
          </div>
        </div>
        <div class="capability-score">
          <span>Grado de implementación</span>
          <strong>${item.maturity.toFixed(1)}/5</strong>
          <div class="bar-track"><div class="bar-fill" style="width:${(item.maturity / 5) * 100}%;background:${vendor.color}"></div></div>
          <p>${item.implementationGrade}</p>
        </div>
        <div class="capability-block">
          <span>Funcionalidades principales</span>
          <div class="fit-chips">${item.core.map(value => `<span class="fit-chip high">${value}</span>`).join("")}</div>
        </div>
        <div class="capability-block">
          <span>Otras soluciones de la marca</span>
          <div class="fit-chips">${item.adjacent.map(value => `<span class="fit-chip">${value}</span>`).join("")}</div>
        </div>
        <div class="capability-block">
          <span>Soluciones equivalentes en otros fabricantes</span>
          <p>${item.peerOverlap.join(" · ")}</p>
        </div>
        <div class="capability-block">
          <span>Modelo de implantación</span>
          <ul>${item.implementation.map(value => `<li>${value}</li>`).join("")}</ul>
        </div>
        <div class="advantage-box">
          <strong>Diferenciadores</strong>
          <p>${item.differentiators.join(" · ")}</p>
        </div>
        <div class="disadvantage-box">
          <strong>Precaución</strong>
          <p>${item.caution}</p>
        </div>
        <div class="vendor-links">
          ${item.sources.map((source, index) => `<a href="${source}" target="_blank" rel="noreferrer">Fuente ${index + 1}</a>`).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function renderEvidence() {
  document.getElementById("evidenceGrid").innerHTML = evidenceItems.map(item => {
    const vendor = vendors.find(v => v.name === item.vendor);
    if (!vendor) return "";
    return `
      <article class="evidence-item" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="Logo ${item.vendor}" loading="lazy">
          <strong>${item.vendor}</strong>
        </div>
        <div class="confidence-meter">
          <span>Confianza global</span>
          <strong>${item.confidence.toFixed(1)}/5</strong>
          <div class="bar-track"><div class="bar-fill" style="width:${(item.confidence / 5) * 100}%;background:${vendor.color}"></div></div>
        </div>
        ${item.items.map(evidence => `
          <div class="evidence-row">
            <span class="badge">${evidence.type}</span>
            <p><strong>${evidence.title}</strong></p>
            <p>Confianza: ${evidence.confidence}/5</p>
            ${evidence.url ? `<a href="${evidence.url}" target="_blank" rel="noreferrer">Ver fuente</a>` : `<small>Validación pendiente en PoC/RFP</small>`}
          </div>
        `).join("")}
      </article>
    `;
  }).join("");
}

function advancedScore(vendorIndex) {
  const total = advancedMetrics.reduce((sum, metric) => sum + metric.weight, 0);
  return advancedMetrics.reduce((sum, metric) => sum + metric.scores[vendorIndex] * metric.weight, 0) / total;
}

function radarSvgForVendor(vendorIndex, color, title) {
  const radarPoints = advancedMetrics.map((metric, index) => {
    const angle = (-90 + index * (360 / advancedMetrics.length)) * Math.PI / 180;
    const radius = 28 + (metric.scores[vendorIndex] / 5) * 82;
    return `${160 + Math.cos(angle) * radius},${130 + Math.sin(angle) * radius}`;
  }).join(" ");

  return `
    <svg viewBox="0 0 320 260" role="img" aria-label="Radar de ${title}">
      <rect x="0" y="0" width="320" height="260" fill="#fbfcfe"/>
      <circle cx="160" cy="130" r="110" fill="none" stroke="#e2e8f0"/>
      <circle cx="160" cy="130" r="72" fill="none" stroke="#e2e8f0"/>
      <circle cx="160" cy="130" r="36" fill="none" stroke="#e2e8f0"/>
      <polygon points="${radarPoints}" fill="${color}2e" stroke="${color}" stroke-width="3"/>
      ${advancedMetrics.map((metric, index) => {
        const angle = (-90 + index * (360 / advancedMetrics.length)) * Math.PI / 180;
        return `<text x="${160 + Math.cos(angle) * 124}" y="${132 + Math.sin(angle) * 124}" text-anchor="middle" fill="#647084" font-size="10">${metric.label.split(" ")[0]}</text>`;
      }).join("")}
    </svg>
  `;
}

function selectedFrameworkIndexes() {
  return vendors
    .map((vendor, index) => ({ vendor, index }))
    .filter(item => state.frameworkVendors[item.vendor.name]);
}

function renderFrameworkVendorDetails() {
  const selected = selectedFrameworkIndexes();
  if (!selected.length) {
    document.getElementById("frameworkVendorDetail").innerHTML = `
      <article class="vendor-framework-panel">
        <strong>Selecciona al menos un fabricante</strong>
        <p>Marca un checkbox para generar el modelo global, radar, Data Quality y heatmap específico del fabricante.</p>
      </article>
    `;
    return;
  }

  document.getElementById("frameworkVendorDetail").innerHTML = selected.map(({ vendor, index }) => {
    const score = advancedScore(index);
    const dataQuality = advancedMetrics.find(metric => metric.id === "data");
    const rankedMetrics = advancedMetrics
      .map(metric => ({ ...metric, score: metric.scores[index], contribution: metric.scores[index] * metric.weight / 100 }))
      .sort((a, b) => b.score - a.score);

    return `
      <article class="vendor-framework-panel" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="Logo ${vendor.name}" loading="lazy">
          <div>
            <strong>${vendor.name}</strong>
            <p>Modelo específico Detection, Intelligence & Data Quality</p>
          </div>
        </div>
        <div class="vendor-framework-grid">
          <div class="framework-item">
            <strong>Modelo global del fabricante</strong>
            <p>Score ponderado SOC/GRC: <strong>${score.toFixed(2)}/5</strong>. Fórmula: Functional Fit 25%, Detection 20%, Telemetry 15%, Intelligence 15%, Data Quality 10%, Operability 10%, Market Confidence 5%.</p>
            <div class="fit-chips">
              ${rankedMetrics.map(metric => `<span class="fit-chip ${metric.score >= 4 ? "high" : "low"}">${metric.label}: ${metric.score}/5</span>`).join("")}
            </div>
          </div>
          <div class="framework-item">
            <strong>Radar de referencia</strong>
            ${radarSvgForVendor(index, vendor.color, vendor.name)}
          </div>
          <div class="framework-item">
            <strong>Data Quality</strong>
            <p>${dataQuality.label}: <strong>${dataQuality.scores[index]}/5</strong>. Revisa fidelidad, ruido, robustez, cobertura, contexto, normalización y trazabilidad antes de integrarlo en SIEM/XSIAM/GRC.</p>
            <div class="bar-track"><div class="bar-fill" style="width:${(dataQuality.scores[index] / 5) * 100}%;background:${vendor.color}"></div></div>
          </div>
        </div>
        <div class="heatmap-panel vendor-heatmap">
          <table>
            <thead>
              <tr>
                <th>Tipo de amenaza</th>
                <th>${vendor.name}</th>
                <th>Lectura ejecutiva</th>
              </tr>
            </thead>
            <tbody>
              ${threatHeatmap.map(row => {
                const score = row.scores[index];
                return `
                  <tr>
                    <td><strong>${row.type}</strong></td>
                    <td><span class="fit-chip ${score >= 4 ? "high" : "low"}">${score}/5</span></td>
                    <td>${score >= 4 ? "Cobertura fuerte para priorizar en PoC." : "Validar cobertura, tuning y falsos positivos."}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `;
  }).join("");
}

function renderFramework() {
  if (!Object.keys(state.frameworkVendors).length) {
    vendors.forEach((vendor, index) => state.frameworkVendors[vendor.name] = index === 2);
  }

  const advancedRanking = vendors
    .map((vendor, index) => ({ vendor, score: advancedScore(index) }))
    .sort((a, b) => b.score - a.score);

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
      ${radarSvgForVendor(2, vendors[2].color, "Palo Alto Networks")}
    </article>
    <article class="framework-item">
      <strong>Fórmula ejecutiva</strong>
      <p>Total Score = 0.25 Functional Fit + 0.20 Detection + 0.15 Telemetry + 0.15 Intelligence + 0.10 Data Quality + 0.10 Operability + 0.05 Market Confidence.</p>
    </article>
  `;

  document.getElementById("frameworkVendorControls").innerHTML = `
    <article class="framework-selector">
      <strong>Análisis específico por fabricante</strong>
      <p>Marca uno o varios fabricantes para pintar debajo el modelo global, radar, Data Quality y heatmap específico.</p>
      <div class="vendor-checks">
        ${vendors.map(vendor => `
          <label class="vendor-check" style="--vendor-accent:${vendor.color}">
            <input type="checkbox" data-framework-vendor="${vendor.name}" ${state.frameworkVendors[vendor.name] ? "checked" : ""}>
            <span>${vendor.name}</span>
          </label>
        `).join("")}
      </div>
    </article>
  `;

  document.querySelectorAll("[data-framework-vendor]").forEach(input => {
    input.addEventListener("change", event => {
      state.frameworkVendors[event.target.dataset.frameworkVendor] = event.target.checked;
      renderFrameworkVendorDetails();
    });
  });

  renderFrameworkVendorDetails();

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
  doc.kv("Perfil cliente", `${profilePresets[state.profile.preset]?.label || "Balanceado"} | ${state.profile.sector} | ${state.profile.size} | ${state.profile.soc}`);
  if (state.profile.notes) doc.kv("Notas cliente", state.profile.notes);
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
  patchResponseItems.forEach(item => {
    doc.kv(`${item.vendor} respuesta`, `${item.cve} | ${item.patch} | ${item.responseTime} | ${item.status}`);
  });
  mediaIncidentItems.forEach(item => {
    doc.kv(`${item.vendor} incidente medio`, `${item.date} | ${item.type} | ${item.impact} | ${item.url}`);
  });

  doc.section("7. Funcionalidades por producto y marca");
  productCapabilities.forEach(item => {
    doc.subsection(`${item.vendor} - ${item.primary}`);
    doc.kv("Grado de implementación", `${item.maturity}/5 - ${item.implementationGrade}`);
    doc.kv("Funcionalidades", item.core.join(", "));
    doc.kv("Otras soluciones", item.adjacent.join(", "));
    doc.kv("Soluciones equivalentes", item.peerOverlap.join(" | "));
    doc.kv("Modelo implantación", item.implementation.join(", "));
    doc.kv("Diferenciadores", item.differentiators.join(" | "));
    doc.kv("Precaución", item.caution);
    doc.kv("Fuentes", item.sources.join(" | "));
  });

  doc.section("8. Cifrado y especificaciones tecnicas");
  techItems.forEach(item => {
    doc.subsection(item.vendor);
    doc.kv("Tunel usuario", item.tunnel);
    doc.kv("Sedes / forwarding", item.site);
    doc.kv("TLS inspection", item.tls);
    doc.kv("Validar en PoC", item.validate);
  });
  encryptionLayerItems.forEach(item => {
    doc.subsection(`${item.vendor} - cifrado por capas`);
    doc.paragraph(item.executive);
    item.layers.forEach(layer => {
      doc.kv(layer.layer, `Cifrado: ${layer.encryption} | Modo: ${layer.mode} | PoC: ${layer.poc}`);
    });
    doc.kv("Fuentes", item.sources.join(" | "));
  });
  encryptionSpecItems.forEach(item => {
    doc.subsection(`${item.vendor} - especificaciones técnicas`);
    doc.kv("Túnel usuario", item.userTunnel);
    doc.kv("Sede / edge", item.siteTunnel);
    doc.kv("Algoritmos", item.algorithms);
    doc.kv("TLS inspection", item.tlsInspection);
    doc.kv("Claves / CA", item.keyModel);
    doc.kv("PQC", item.pqc);
    doc.kv("Docs oficiales", item.officialDocs.map(doc => `${doc.label}: ${doc.url}`).join(" | "));
  });

  doc.section("9. Implementacion, provision y on-premise");
  deploymentItems.forEach(item => {
    doc.subsection(item.vendor);
    doc.kv("Implementacion / provision", item.implementation);
    doc.kv("Solucion on-premise", item.onprem);
    doc.kv("Validar en PoC", item.poc);
    doc.kv("Casos publicos", item.success.map(story => `${story.label}: ${story.url}`).join(" | "));
  });

  doc.section("10. Valoracion quantum e IA");
  quantumAiItems.forEach(item => {
    doc.subsection(item.vendor);
    doc.kv("Quantum / PQC", `${item.quantumScore}/5 - ${item.quantum}`);
    doc.kv("IA / Seguridad de IA", `${item.aiScore}/5 - ${item.ai}`);
    doc.kv("Validar en PoC", item.validate);
    doc.kv("Fuentes", item.sources.join(" | "));
  });

  doc.section("11. Detection, Intelligence & Data Quality");
  doc.barChart("Scoring SOC/GRC avanzado", vendors.map((vendor, index) => ({ label: vendor.name, value: advancedScore(index), color: vendor.color })), 5);
  advancedMetrics.forEach(metric => {
    doc.kv(metric.label, `Peso ${metric.weight}% | ${vendors.map((vendor, index) => `${vendor.name}: ${metric.scores[index]}`).join(" | ")}`);
  });
  selectedFrameworkIndexes().forEach(({ vendor, index }) => {
    doc.subsection(`${vendor.name} - modelo específico SOC/GRC`);
    doc.kv("Score global", `${advancedScore(index).toFixed(2)}/5`);
    advancedMetrics.forEach(metric => {
      doc.kv(metric.label, `${metric.scores[index]}/5 | Peso ${metric.weight}%`);
    });
    threatHeatmap.forEach(row => {
      doc.kv(row.type, `${row.scores[index]}/5`);
    });
  });
  threatHeatmap.forEach(row => {
    doc.kv(row.type, vendors.map((vendor, index) => `${vendor.name}: ${row.scores[index]}/5`).join(" | "));
  });

  doc.section("12. Evidencia y confianza");
  evidenceItems.forEach(item => {
    doc.subsection(`${item.vendor} - confianza ${item.confidence}/5`);
    item.items.forEach(evidence => {
      doc.kv(evidence.type, `${evidence.title} | Confianza ${evidence.confidence}/5${evidence.url ? ` | ${evidence.url}` : " | Pendiente PoC/RFP"}`);
    });
  });

  doc.section("13. Notas de uso");
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
  renderProfile();
  renderUseCases();
  renderRisks();
  renderTechnical();
  renderDeployment();
  renderInnovation();
  renderCapabilities();
  renderFramework();
  renderEvidence();
  renderVendors();
  wireNavigation();
  refresh();
}

init();
