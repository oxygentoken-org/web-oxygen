// Bilingual copy for the Whitepaper page.
// `es` is typed as `WhitepaperCopy` (derived from `en`) so both objects must
// share the exact same shape. Section ids stay stable in the component; only
// the visible labels come from `sectionLabels`.

const en = {
  meta: {
    title: "Whitepaper",
    description:
      "Oxygen's whitepaper: how tokenized forest square meters and carbon credits turn forest conservation into a transparent, profitable, and accessible investment.",
  },

  sectionLabels: [
    { id: "carbon-credit", label: "What is a Carbon Credit?" },
    { id: "executive-summary", label: "Executive Summary" },
    { id: "project-overview", label: "Project Overview and Example" },
    { id: "market-analysis", label: "Market Analysis" },
    { id: "token-model", label: "Token Model" },
    { id: "business-model", label: "Business Model" },
    { id: "legal-framework", label: "Legal & Regulatory Framework" },
    { id: "impact", label: "Social & Environmental Impact" },
    { id: "roadmap", label: "Roadmap & Milestones" },
    { id: "footnotes", label: "Foot Notes" },
  ],

  carbonCredit: {
    heading: "What is a Carbon Credit?",
    intro:
      "A carbon credit is a tradable certificate representing the reduction or removal of one metric ton of carbon dioxide (CO₂) or equivalent greenhouse gases from the atmosphere. These credits are created through projects that protect forests, invest in renewable energy, or engage in practices that reduce emissions.",
    marketParticipantsHeading: "Market Participants",
    issuersAlt: "Issuers icon",
    issuersLabel: "Issuers (Producers):",
    issuersText:
      "Entities (like Oxygen) that develop projects to generate carbon credits, usually through forest conservation, reforestation, renewable energy, or similar eco-friendly projects.",
    certifiersAlt: "Certifiers icon",
    certifiersLabel: "Certifiers/Validators:",
    certifiersText:
      "Organizations (e.g., Verra, Gold Standard) verifying and certifying that the emissions reductions are real, measurable, and permanent.",
    buyersAlt: "Buyers icon",
    buyersLabel: "Buyers (End Users):",
    buyersText:
      "Typically corporations seeking to offset their emissions to achieve regulatory compliance, meet sustainability goals, or enhance their brand image.",
    marketplacesAlt: "Marketplaces icon",
    marketplacesLabel: "Marketplaces/Brokers:",
    marketplacesText:
      "Platforms (like ClimateTrade, Pachama) where carbon credits are listed, bought, and sold.",
    howIssuersMakeMoneyHeading: "How Carbon Credit Issuers Make Money",
    issuersEarnBy: "Issuers earn revenue by:",
    earn1:
      "Creating and Certifying Credits: Developing projects that verifiably reduce emissions.",
    earn2:
      "Selling Credits: Once verified, credits are sold to buyers through marketplaces, generating revenue based on market demand and prices.",
    earn3:
      "Long-Term Management: Continued project management and sustainability practices ensure steady, recurring credit generation and revenue streams.",
    whyBuyHeading: "Why companies buy Credits?",
    complianceAlt: "Compliance icon",
    complianceLabel: "A. Regulatory Compliance and Avoiding Penalties:",
    complianceText:
      "In many regions globally, companies are required by law to limit or offset their greenhouse gas emissions. Buying credits is usually much cheaper than paying fines or facing operational shutdowns.",
    differentiationAlt: "Brand Differentiation icon",
    differentiationLabel: "B. Market Competitiveness and Brand Differentiation:",
    differentiationText:
      "Modern consumers prefer brands that demonstrate environmental responsibility. Carbon-neutral brands can charge more, retain loyalty, and grow market share.",
    capitalAlt: "Access to Capital icon",
    capitalLabel: "C. Access to Capital and Investor Preference:",
    capitalText:
      "ESG-focused investors and institutions favor companies aligned with sustainability. Carbon-neutral businesses enjoy better funding access and lower borrowing costs.",
    esgParagraph:
      "Financial institutions and investors increasingly favor companies aligned with sustainability (ESG criteria). Businesses demonstrating carbon neutrality through purchased credits have better access to funding, attract ESG-conscious investors, and enjoy lower borrowing costs compared to competitors who don't prioritize sustainability.",
    shortParagraph:
      "In short, companies buy carbon credits because doing so reduces compliance costs, enhances market positioning, and opens doors to cheaper capital and investment opportunities. It's economically strategic—not merely altruistic.",
  },

  executiveSummary: {
    heading: "Executive Summary",
    missionLabel: "Mission:",
    missionText:
      "Oxygen democratizes investment in the production of carbon credits through blockchain-based tokenization, transforming environmental efforts into profitable, transparent, and accessible investments.",
    problemLabel: "Problem:",
    problemText:
      "Forests around the world are (mostly illegally) burned to clear land for agriculture or cattle—not because it's profitable, but because there are few ways to monetize a healthy forest. The carbon credit market solves this, but it's inaccessible to most due to high entry barriers, benefiting only large investors. Greenwashing due to poor oversight further reduces trust. Meanwhile, traditional donations lack funds and transparency.",
    solutionLabel: "Solution:",
    solutionText:
      "Oxygen allows anyone to invest in tokenized forest square meters ($OM tokens), instantly protecting these areas permanently. Investors earn Oxygen Conservation ($OC) tokens representing carbon credits and other ecosystem services. Tokens can be sold for profit or burned to certify carbon neutrality. Blockchain technology ensures full transparency.",
  },

  projectOverview: {
    headingBefore: "Project Overview and Example:",
    headingHighlight: '"La Florencia"',
    para1Pre: "Oxygen's first project, ",
    para1Bold: "La Florencia",
    para1Post:
      ", encompasses 30,000 hectares of forest in Formosa, Argentina. Collaborating closely with the indigenous Wichí community of Mistolar, the project protects biodiversity—including endangered species like the jaguar—and fosters sustainable local economic development.",
    para2:
      "It is a triple-impact initiative: environmental (forest preservation and carbon capture), social (empowering the Wichí community with jobs, resources, and infrastructure), and economic (generating verified carbon credits that can be monetized globally).",
  },

  marketAnalysis: {
    heading: "Market Analysis",
    para1:
      "The global carbon credit market is rapidly expanding, driven by international climate goals, corporate sustainability commitments, and growing regulatory requirements.",
    growthImageAlt: "Carbon Credit Market Growth",
    para2Pre: "An industry where ",
    para2Bold: "72% of credits issued are sold",
    para2Post:
      ", while production is declining and retirements (demand) are increasing. In 2024, 264 million credits were issued and 196 million sold. Demand for high-quality, verified credits is outpacing supply, especially due to stricter environmental policies.",
    para3:
      "Latin America presents a unique opportunity: low-cost, high-impact carbon credit generation due to vast forest reserves. Many landowners prefer this path over destructive practices like deforestation or cattle ranching.",
    keyInsightsLabel: "Key Insights:",
    insight1:
      "High entry barriers (~$150,000 in certification costs) limit access for smaller players.",
    insight2:
      "Latin American forests offer cost-effective, high-return investments.",
    insight3:
      "The region is still early in adoption, offering first-mover advantages.",
    insight4:
      "Strong profitability potential as demand continues to grow.",
    demandImageAlt: "Verified Carbon Credits Demand Chart",
  },

  tokenModel: {
    heading: "Token Model",
    intro: "The Oxygen ecosystem is built on two core tokens:",
    omLabel: "$OM (Oxygen Meters):",
    omText:
      "Represents real square meters of protected forest. Investors purchase $OM to acquire and protect specific land areas.",
    ocLabel: "$OC (Oxygen Conservation):",
    ocText:
      "Earned over time by $OM holders. Each $OC represents 1 kg of CO₂ captured and can include other ecosystem services in the future.",
    holdersCanChoose: "Token holders can choose to:",
    choice1: "Trade $OC tokens on the market for profit.",
    choice2: "Burn $OC tokens to certify their own carbon neutrality.",
    verificationIntro:
      "Carbon neutrality verification is handled differently depending on the user:",
    individualsLabel: "Individuals:",
    individualsText:
      "Use a guided questionnaire to determine their footprint and burn $OC accordingly.",
    companiesLabel: "Companies:",
    companiesText:
      "Undergo a tailored audit by Oxygen and its collaborators to issue formal carbon certificates.",
  },

  businessModel: {
    heading: "Business Model",
    intro:
      "Oxygen's business model is structured around crowdfunding, carbon credit monetization, and long-term ecosystem service valuation.",
    initialFundingHeading: "Initial Funding",
    fundingItem1Pre: "Target: ",
    fundingItem1Bold: "$350,000 USD",
    fundingItem1Post:
      " to cover operational costs and certification fees for the first project.",
    fundingItem2Pre: "Raised through the sale of ",
    fundingItem2Bold: "$OM tokens",
    fundingItem2Post: ", representing forest land ownership.",
    revenueHeading: "Revenue Generation",
    revenueItem1Pre: "The first project alone (",
    revenueItem1Bold1: "La Florencia",
    revenueItem1Mid: ", 30,000 ha) is projected to generate a ",
    revenueItem1Bold2: "minimum of $2.8M USD over 10 years",
    revenueItem1Post: ".",
    revenueItem2Pre: "Investor ROI is projected at ",
    revenueItem2Bold: "~7% annually",
    revenueItem2Post:
      ", based on selling 63.79 million m² at $0.0055/m² to raise the initial funds.",
    revenueItem3:
      "Once certified by standards such as Verra, Gold Standard, or Pachama, the carbon credits are sold through established marketplaces.",
    closing:
      "Each new project will follow this model, requiring a new funding round and generating new tradable carbon credits.",
    verraAlt: "Verra",
    goldStandardAlt: "Gold Standard",
    pachamaAlt: "Pachama",
    climaAlt: "Clima",
  },

  legalFramework: {
    heading: "Legal & Regulatory Framework",
    item1:
      "The forest land is already secured by Oxygen Token shareholders, ensuring legal control and ownership transparency.",
    item2:
      "All certification will be conducted through Verra under the REDD+ standards (Reducing Emissions from Deforestation and Forest Degradation), a globally recognized framework.",
    item3:
      "Projects aim to receive additional labels such as CCB (Climate, Community & Biodiversity), which increase the market value of the credits due to their verified environmental and social impact.",
    closing:
      "This multi-certification approach enhances the credibility, tradability, and profitability of the carbon credits generated, while aligning with top-tier ESG investment principles.",
  },

  impact: {
    heading: "Social & Environmental Impact",
    intro:
      "Oxygen is committed to a triple-impact model that balances environmental preservation, community empowerment, and economic sustainability.",
    environmentalHeading: "Environmental Impact",
    env1: "Protects over 30,000 hectares of native forest in Formosa, Argentina.",
    env2: "Preserves biodiversity, including endangered species like the jaguar.",
    env3: "Implements satellite, radar, and vehicle-based forest monitoring systems.",
    env4: "Plans for reforestation and sustainable cattle management projects.",
    socialHeading: "Social Impact (Wichí Community)",
    social1:
      "Local employment through park ranger training and forest management roles.",
    social2: "Honey, mushroom, and brick production initiatives for local income.",
    social3: "Safe water systems using rain and air humidity capture technology.",
    social4: "Internet access via Starlink, and improved agricultural irrigation.",
    social5:
      "Comprehensive biodiversity and community welfare research and initiatives.",
    closing:
      "These actions position Oxygen not only as a carbon offset platform but as a long-term contributor to ecological and human development.",
    imageAlt: "Triple Impact Diagram",
  },

  roadmap: {
    heading: "Roadmap & Milestones",
    q1q2Label: "Q1–Q2 2025:",
    q1q2Text: "Token launch and preparation of existing forest assets.",
    q2Label: "Q2 2025:",
    q2Item1: "10% funding: Begin project documentation and submit to Verra.",
    q2Item2: "Launch park ranger and forest management program.",
    q3Label: "Q3 2025:",
    q3Item1: "20% funding: Deploy satellite monitoring and radar protection systems.",
    q3Item2: "Implement community water, internet, and irrigation systems.",
    q4Label: "Q4 2025:",
    q4Item1: "30% funding: Launch secondary income projects (honey, mushrooms, bricks).",
    q1_2026Label: "Q1 2026:",
    q1_2026Item1:
      "Project listed on Verra and partial carbon credits pre-sold (250k–1M).",
    q1_2026Item2: "First liquidity injection to OC holders and USDT trading opens.",
    q1_2026Item3: "Oxygen tokens listed on Argentinian stock exchange (BYMA).",
    q2_2026Label: "Q2 2026–Q1 2027:",
    q2_2026Item1: "50–100% funding: Finalize certification and integrate with Pachama.",
    q2_2026Item2: "First official emission and sale of Certified Carbon Credits (CCC).",
    annualLabel: "Annually after 2027:",
    annualItem1: "New CCC emissions and token liquidity cycles.",
    annualItem2: "Ongoing OC distribution and evaluation of ecosystem services.",
    annualItem3: "Expansion to new projects, targeting 1 million hectares saved.",
    closing:
      "This roadmap reflects a phased strategy combining funding, certification, community impact, and long-term sustainability.",
    imageAlt: "Roadmap and milestones diagram",
  },

  footnotes: {
    heading: "Footnotes",
    fn1Heading: "*1 Ecosystem Services",
    fn1Item1: "Carbon sequestration: Capturing and storing atmospheric CO₂.",
    fn1Item2: "Water regulation: Preventing floods and managing water flow.",
    fn1Item3: "Biodiversity conservation: Protecting habitats of endangered species.",
    fn1Item4:
      "Pollination: Supporting agriculture through natural pollinator habitats.",
    fn1Item5: "Soil formation and fertility: Maintaining healthy soils for agriculture.",
    fn1Para:
      "These services can be tracked through advanced monitoring technologies such as satellite imagery, IoT sensors, radar detection, biodiversity surveys, and blockchain-based tracking for transparency. Monetization occurs by assigning financial value based on the ecosystem's benefit or avoided costs. Markets for ecosystem services have been successfully implemented internationally, such as Costa Rica's Payment for Environmental Services (PSA), the United States' Mitigation Credits Market and are a key feature increasing the value of the credits emitted by the Verra Standard + CCB by this means generating significant revenue and incentivizing conservation efforts.",
    fn2Heading: "*2 Carbon Credit Demand",
    fn2Para:
      "Multiple reports confirm a rapidly growing demand for carbon credits driven by stricter environmental regulations and corporate climate pledges, significantly outpacing supply. According to McKinsey & Company's 2023 analysis, demand for voluntary carbon credits is projected to grow by a factor of 15 by 2030, creating significant shortages, especially in high-quality, verified credits like those from forest conservation projects (REDD+). This imbalance results from limited certified project availability, rigorous verification processes, and increasing scrutiny to avoid greenwashing.",
    fn2Source: "Source: McKinsey Sustainability, 2023",
    fn3Heading: "*3 Cost Estimates",
    fn3Para: "Google Sheet with Expected costs and years",
    fn4Heading: "*4 Projected Credit Revenue (La Florencia)",
    fn4ParaPre: "Projected total generation for the first project: ",
    fn4ParaBold: "$2.8M USD over 10 years",
    fn4ParaPost: " (for 30,000 hectares La Florencia) — how is this calculated:",
    fn4Item1:
      "Average Carbon Credits per hectare saved in the Gran Chaco region: 79 tons of CO₂/ha",
    fn4Item2:
      "Source: CONICET (we are conservatively estimating 25% less than the original study's 105 tons/ha figure for cautious calculation).",
    fn4Item3:
      "Expected percentage of certifiable saved hectares over total area: 20%",
    fn4Item4: "For 30,000 hectares → 474,000 carbon credits (VCU)",
    fn4VcuPre: "VCU Market Value: USD $5–30 per VCU → 30,000 hectares → between ",
    fn4VcuBold: "USD $2.37M–$14.22M",
    fn4VcuPost: "",
    fn4PricingSources: "Pricing Sources:",
    fn4Source1: "ClimateTrade Market",
    fn4Source2: "Gold Standard Pricing",
    fn4Source3: "Pachama.com",
    fn4Source4: "Benchmark",
    fn4Source5: "REDD+ Example Cases",
    fn4Source6: "Verra Project Example",
    fn4CaseStudy:
      "A notable case study to follow is Banco de Bosques, who acquired a forest available for sale in an area at high risk of deforestation. They actively implement measures to prevent its degradation and protect the ecosystem. Additionally, like our project, they pursue the CCB label (Climate, Community & Biodiversity Standard) by creating local employment opportunities and promoting the regional economy. Projects with the CCB label typically sell carbon credits at a higher price due to their verified enhanced environmental and social quality.",
    fn4RegistryPre: "For an overview of all Verra-certified VCU projects:",
    fn4RegistryLink: "Verra VCU Project Registry",
    fn5Heading: "*5 REDD+ & CCB Certifications",
    fn5Para1:
      "REDD+ (Reducing Emissions from Deforestation and Forest Degradation) is an international framework developed by the United Nations to financially incentivize developing countries to protect forests. Projects under REDD+ standards issue verified carbon credits representing avoided emissions from deforestation.",
    fn5Para2:
      "The CCB (Climate, Community & Biodiversity) Standard is an additional certification provided by Verra and other certifying bodies, confirming that a project not only reduces carbon emissions but also provides measurable social and biodiversity benefits. Projects with the CCB label typically command premium prices, as buyers value the enhanced transparency, environmental impact, and positive community involvement.",
    fn5Source1: "Source: Verra – REDD+ and CCB Standards",
    fn5Link: "Berkeley Carbon Trading Project (VCU Database)",
    fn5ImageAlt: "Verified Carbon Credits Demand Chart",
    fn5Caption:
      "195.500/482.500=60% of all credits emitted by REDD+ globally has been bought. Same situation for latam and verra projects (when filtered)",
    fn5Image2Alt: "Verified Carbon Credits Demand Chart",
  },
};

export type WhitepaperCopy = typeof en;

const es: WhitepaperCopy = {
  meta: {
    title: "Whitepaper",
    description:
      "El whitepaper de Oxygen: cómo los metros cuadrados de bosque tokenizados y los créditos de carbono convierten la conservación forestal en una inversión transparente, rentable y accesible.",
  },

  sectionLabels: [
    { id: "carbon-credit", label: "¿Qué es un crédito de carbono?" },
    { id: "executive-summary", label: "Resumen ejecutivo" },
    { id: "project-overview", label: "Descripción del proyecto y ejemplo" },
    { id: "market-analysis", label: "Análisis de mercado" },
    { id: "token-model", label: "Modelo de tokens" },
    { id: "business-model", label: "Modelo de negocio" },
    { id: "legal-framework", label: "Marco legal y regulatorio" },
    { id: "impact", label: "Impacto social y ambiental" },
    { id: "roadmap", label: "Hoja de ruta e hitos" },
    { id: "footnotes", label: "Notas al pie" },
  ],

  carbonCredit: {
    heading: "¿Qué es un crédito de carbono?",
    intro:
      "Un crédito de carbono es un certificado negociable que representa la reducción o remoción de una tonelada métrica de dióxido de carbono (CO₂) o gases de efecto invernadero equivalentes de la atmósfera. Estos créditos se generan mediante proyectos que protegen bosques, invierten en energías renovables o aplican prácticas que reducen las emisiones.",
    marketParticipantsHeading: "Participantes del mercado",
    issuersAlt: "Ícono de emisores",
    issuersLabel: "Emisores (Productores):",
    issuersText:
      "Entidades (como Oxygen) que desarrollan proyectos para generar créditos de carbono, normalmente mediante conservación forestal, reforestación, energías renovables o proyectos ecológicos similares.",
    certifiersAlt: "Ícono de certificadores",
    certifiersLabel: "Certificadores/Validadores:",
    certifiersText:
      "Organizaciones (por ejemplo, Verra, Gold Standard) que verifican y certifican que las reducciones de emisiones son reales, medibles y permanentes.",
    buyersAlt: "Ícono de compradores",
    buyersLabel: "Compradores (Usuarios finales):",
    buyersText:
      "Habitualmente empresas que buscan compensar sus emisiones para cumplir con la normativa, alcanzar objetivos de sostenibilidad o mejorar la imagen de su marca.",
    marketplacesAlt: "Ícono de mercados",
    marketplacesLabel: "Mercados/Intermediarios:",
    marketplacesText:
      "Plataformas (como ClimateTrade, Pachama) donde los créditos de carbono se listan, compran y venden.",
    howIssuersMakeMoneyHeading: "Cómo generan ingresos los emisores de créditos de carbono",
    issuersEarnBy: "Los emisores obtienen ingresos mediante:",
    earn1:
      "Creación y certificación de créditos: desarrollo de proyectos que reducen las emisiones de forma verificable.",
    earn2:
      "Venta de créditos: una vez verificados, los créditos se venden a los compradores a través de mercados, generando ingresos según la demanda y los precios del mercado.",
    earn3:
      "Gestión a largo plazo: la gestión continua del proyecto y las prácticas de sostenibilidad aseguran una generación de créditos y flujos de ingresos estables y recurrentes.",
    whyBuyHeading: "¿Por qué las empresas compran créditos?",
    complianceAlt: "Ícono de cumplimiento",
    complianceLabel: "A. Cumplimiento normativo y evitación de sanciones:",
    complianceText:
      "En muchas regiones del mundo, las empresas están obligadas por ley a limitar o compensar sus emisiones de gases de efecto invernadero. Comprar créditos suele ser mucho más económico que pagar multas o afrontar el cierre de operaciones.",
    differentiationAlt: "Ícono de diferenciación de marca",
    differentiationLabel: "B. Competitividad en el mercado y diferenciación de marca:",
    differentiationText:
      "Los consumidores actuales prefieren marcas que demuestran responsabilidad ambiental. Las marcas carbono neutrales pueden cobrar más, retener la fidelidad de sus clientes y aumentar su participación de mercado.",
    capitalAlt: "Ícono de acceso al capital",
    capitalLabel: "C. Acceso al capital y preferencia de los inversores:",
    capitalText:
      "Los inversores e instituciones enfocados en criterios ESG favorecen a las empresas alineadas con la sostenibilidad. Los negocios carbono neutrales disfrutan de un mejor acceso al financiamiento y de menores costos de endeudamiento.",
    esgParagraph:
      "Las instituciones financieras y los inversores favorecen cada vez más a las empresas alineadas con la sostenibilidad (criterios ESG). Los negocios que demuestran neutralidad de carbono mediante la compra de créditos tienen mejor acceso al financiamiento, atraen a inversores conscientes de los criterios ESG y disfrutan de menores costos de endeudamiento en comparación con competidores que no priorizan la sostenibilidad.",
    shortParagraph:
      "En resumen, las empresas compran créditos de carbono porque al hacerlo reducen los costos de cumplimiento, mejoran su posicionamiento en el mercado y abren la puerta a capital más barato y oportunidades de inversión. Es una decisión económicamente estratégica, no meramente altruista.",
  },

  executiveSummary: {
    heading: "Resumen ejecutivo",
    missionLabel: "Misión:",
    missionText:
      "Oxygen democratiza la inversión en la producción de créditos de carbono mediante la tokenización basada en blockchain, transformando los esfuerzos ambientales en inversiones rentables, transparentes y accesibles.",
    problemLabel: "Problema:",
    problemText:
      "Los bosques de todo el mundo se queman (en su mayoría de forma ilegal) para despejar tierras destinadas a la agricultura o la ganadería, no porque sea rentable, sino porque hay pocas maneras de monetizar un bosque sano. El mercado de créditos de carbono resuelve esto, pero es inaccesible para la mayoría debido a las altas barreras de entrada, beneficiando solo a los grandes inversores. El greenwashing, producto de una supervisión deficiente, reduce aún más la confianza. Mientras tanto, las donaciones tradicionales carecen de fondos y transparencia.",
    solutionLabel: "Solución:",
    solutionText:
      "Oxygen permite a cualquier persona invertir en metros cuadrados de bosque tokenizados (tokens $OM), protegiendo instantáneamente estas áreas de forma permanente. Los inversores obtienen tokens Oxygen Conservation ($OC) que representan créditos de carbono y otros servicios ecosistémicos. Los tokens pueden venderse para obtener ganancias o quemarse para certificar la neutralidad de carbono. La tecnología blockchain garantiza una transparencia total.",
  },

  projectOverview: {
    headingBefore: "Descripción del proyecto y ejemplo:",
    headingHighlight: '"La Florencia"',
    para1Pre: "El primer proyecto de Oxygen, ",
    para1Bold: "La Florencia",
    para1Post:
      ", abarca 30.000 hectáreas de bosque en Formosa, Argentina. En estrecha colaboración con la comunidad indígena Wichí de Mistolar, el proyecto protege la biodiversidad —incluidas especies en peligro de extinción como el yaguareté— y fomenta el desarrollo económico local sostenible.",
    para2:
      "Es una iniciativa de triple impacto: ambiental (preservación del bosque y captura de carbono), social (empoderamiento de la comunidad Wichí con empleo, recursos e infraestructura) y económico (generación de créditos de carbono verificados que pueden monetizarse a nivel global).",
  },

  marketAnalysis: {
    heading: "Análisis de mercado",
    para1:
      "El mercado global de créditos de carbono se está expandiendo rápidamente, impulsado por los objetivos climáticos internacionales, los compromisos de sostenibilidad corporativa y las crecientes exigencias regulatorias.",
    growthImageAlt: "Crecimiento del mercado de créditos de carbono",
    para2Pre: "Una industria en la que ",
    para2Bold: "el 72% de los créditos emitidos se venden",
    para2Post:
      ", mientras la producción disminuye y las retiraciones (demanda) aumentan. En 2024 se emitieron 264 millones de créditos y se vendieron 196 millones. La demanda de créditos de alta calidad y verificados supera a la oferta, especialmente debido a políticas ambientales más estrictas.",
    para3:
      "América Latina presenta una oportunidad única: generación de créditos de carbono de bajo costo y alto impacto gracias a sus vastas reservas forestales. Muchos propietarios de tierras prefieren este camino frente a prácticas destructivas como la deforestación o la ganadería.",
    keyInsightsLabel: "Conclusiones clave:",
    insight1:
      "Las altas barreras de entrada (~USD 150.000 en costos de certificación) limitan el acceso de los actores más pequeños.",
    insight2:
      "Los bosques latinoamericanos ofrecen inversiones rentables y de alto retorno.",
    insight3:
      "La región aún está en una etapa temprana de adopción, lo que ofrece ventajas de ser pionero.",
    insight4:
      "Fuerte potencial de rentabilidad a medida que la demanda sigue creciendo.",
    demandImageAlt: "Gráfico de demanda de créditos de carbono verificados",
  },

  tokenModel: {
    heading: "Modelo de tokens",
    intro: "El ecosistema de Oxygen se basa en dos tokens principales:",
    omLabel: "$OM (Oxygen Meters):",
    omText:
      "Representa metros cuadrados reales de bosque protegido. Los inversores compran $OM para adquirir y proteger áreas de tierra específicas.",
    ocLabel: "$OC (Oxygen Conservation):",
    ocText:
      "Se obtiene con el tiempo por parte de los poseedores de $OM. Cada $OC representa 1 kg de CO₂ capturado y en el futuro podrá incluir otros servicios ecosistémicos.",
    holdersCanChoose: "Los poseedores de tokens pueden optar por:",
    choice1: "Negociar tokens $OC en el mercado para obtener ganancias.",
    choice2: "Quemar tokens $OC para certificar su propia neutralidad de carbono.",
    verificationIntro:
      "La verificación de la neutralidad de carbono se gestiona de forma diferente según el usuario:",
    individualsLabel: "Personas físicas:",
    individualsText:
      "Utilizan un cuestionario guiado para determinar su huella y quemar $OC en consecuencia.",
    companiesLabel: "Empresas:",
    companiesText:
      "Se someten a una auditoría a medida por parte de Oxygen y sus colaboradores para emitir certificados de carbono formales.",
  },

  businessModel: {
    heading: "Modelo de negocio",
    intro:
      "El modelo de negocio de Oxygen se estructura en torno al financiamiento colectivo, la monetización de créditos de carbono y la valoración a largo plazo de los servicios ecosistémicos.",
    initialFundingHeading: "Financiamiento inicial",
    fundingItem1Pre: "Objetivo: ",
    fundingItem1Bold: "USD 350.000",
    fundingItem1Post:
      " para cubrir los costos operativos y las tarifas de certificación del primer proyecto.",
    fundingItem2Pre: "Recaudado mediante la venta de ",
    fundingItem2Bold: "tokens $OM",
    fundingItem2Post: ", que representan la propiedad de la tierra forestal.",
    revenueHeading: "Generación de ingresos",
    revenueItem1Pre: "El primer proyecto por sí solo (",
    revenueItem1Bold1: "La Florencia",
    revenueItem1Mid: ", 30.000 ha) se proyecta que genere un ",
    revenueItem1Bold2: "mínimo de USD 2,8M en 10 años",
    revenueItem1Post: ".",
    revenueItem2Pre: "Se proyecta un ROI para el inversor de ",
    revenueItem2Bold: "~7% anual",
    revenueItem2Post:
      ", basado en la venta de 63,79 millones de m² a USD 0,0055/m² para recaudar los fondos iniciales.",
    revenueItem3:
      "Una vez certificados por estándares como Verra, Gold Standard o Pachama, los créditos de carbono se venden a través de mercados establecidos.",
    closing:
      "Cada nuevo proyecto seguirá este modelo, requiriendo una nueva ronda de financiamiento y generando nuevos créditos de carbono negociables.",
    verraAlt: "Verra",
    goldStandardAlt: "Gold Standard",
    pachamaAlt: "Pachama",
    climaAlt: "Clima",
  },

  legalFramework: {
    heading: "Marco legal y regulatorio",
    item1:
      "La tierra forestal ya está asegurada por los accionistas de Oxygen Token, lo que garantiza el control legal y la transparencia de la propiedad.",
    item2:
      "Toda la certificación se realizará a través de Verra bajo los estándares REDD+ (Reducción de Emisiones por Deforestación y Degradación de los Bosques), un marco reconocido a nivel mundial.",
    item3:
      "Los proyectos buscan obtener etiquetas adicionales como la CCB (Clima, Comunidad y Biodiversidad), que aumentan el valor de mercado de los créditos gracias a su impacto ambiental y social verificado.",
    closing:
      "Este enfoque de certificación múltiple potencia la credibilidad, la negociabilidad y la rentabilidad de los créditos de carbono generados, alineándose con los principios de inversión ESG de primer nivel.",
  },

  impact: {
    heading: "Impacto social y ambiental",
    intro:
      "Oxygen está comprometido con un modelo de triple impacto que equilibra la preservación ambiental, el empoderamiento de la comunidad y la sostenibilidad económica.",
    environmentalHeading: "Impacto ambiental",
    env1: "Protege más de 30.000 hectáreas de bosque nativo en Formosa, Argentina.",
    env2: "Preserva la biodiversidad, incluidas especies en peligro de extinción como el yaguareté.",
    env3: "Implementa sistemas de monitoreo forestal por satélite, radar y vehículos.",
    env4: "Planea proyectos de reforestación y manejo ganadero sostenible.",
    socialHeading: "Impacto social (Comunidad Wichí)",
    social1:
      "Empleo local mediante la capacitación de guardaparques y funciones de manejo forestal.",
    social2: "Iniciativas de producción de miel, hongos y ladrillos para el ingreso local.",
    social3:
      "Sistemas de agua segura mediante tecnología de captación de lluvia y humedad del aire.",
    social4: "Acceso a internet a través de Starlink y mejora del riego agrícola.",
    social5:
      "Investigación e iniciativas integrales sobre biodiversidad y bienestar de la comunidad.",
    closing:
      "Estas acciones posicionan a Oxygen no solo como una plataforma de compensación de carbono, sino como un contribuyente a largo plazo al desarrollo ecológico y humano.",
    imageAlt: "Diagrama de triple impacto",
  },

  roadmap: {
    heading: "Hoja de ruta e hitos",
    q1q2Label: "Q1–Q2 2025:",
    q1q2Text: "Lanzamiento del token y preparación de los activos forestales existentes.",
    q2Label: "Q2 2025:",
    q2Item1: "10% del financiamiento: inicio de la documentación del proyecto y presentación a Verra.",
    q2Item2: "Lanzamiento del programa de guardaparques y manejo forestal.",
    q3Label: "Q3 2025:",
    q3Item1: "20% del financiamiento: despliegue de sistemas de monitoreo satelital y protección por radar.",
    q3Item2: "Implementación de sistemas comunitarios de agua, internet y riego.",
    q4Label: "Q4 2025:",
    q4Item1: "30% del financiamiento: lanzamiento de proyectos de ingresos secundarios (miel, hongos, ladrillos).",
    q1_2026Label: "Q1 2026:",
    q1_2026Item1:
      "Proyecto listado en Verra y preventa parcial de créditos de carbono (250k–1M).",
    q1_2026Item2: "Primera inyección de liquidez a los poseedores de OC y apertura del trading en USDT.",
    q1_2026Item3: "Tokens de Oxygen listados en la bolsa argentina (BYMA).",
    q2_2026Label: "Q2 2026–Q1 2027:",
    q2_2026Item1: "50–100% del financiamiento: finalización de la certificación e integración con Pachama.",
    q2_2026Item2: "Primera emisión y venta oficial de Créditos de Carbono Certificados (CCC).",
    annualLabel: "Anualmente después de 2027:",
    annualItem1: "Nuevas emisiones de CCC y ciclos de liquidez del token.",
    annualItem2: "Distribución continua de OC y evaluación de servicios ecosistémicos.",
    annualItem3: "Expansión a nuevos proyectos, con el objetivo de salvar 1 millón de hectáreas.",
    closing:
      "Esta hoja de ruta refleja una estrategia por fases que combina financiamiento, certificación, impacto en la comunidad y sostenibilidad a largo plazo.",
    imageAlt: "Diagrama de hoja de ruta e hitos",
  },

  footnotes: {
    heading: "Notas al pie",
    fn1Heading: "*1 Servicios ecosistémicos",
    fn1Item1: "Secuestro de carbono: captura y almacenamiento de CO₂ atmosférico.",
    fn1Item2: "Regulación del agua: prevención de inundaciones y gestión del flujo de agua.",
    fn1Item3: "Conservación de la biodiversidad: protección de hábitats de especies en peligro de extinción.",
    fn1Item4:
      "Polinización: apoyo a la agricultura mediante hábitats naturales de polinizadores.",
    fn1Item5: "Formación y fertilidad del suelo: mantenimiento de suelos sanos para la agricultura.",
    fn1Para:
      "Estos servicios pueden monitorearse mediante tecnologías avanzadas como imágenes satelitales, sensores IoT, detección por radar, relevamientos de biodiversidad y seguimiento basado en blockchain para lograr transparencia. La monetización se produce asignando un valor financiero según el beneficio del ecosistema o los costos evitados. Los mercados de servicios ecosistémicos se han implementado con éxito a nivel internacional, como el Pago por Servicios Ambientales (PSA) de Costa Rica y el Mercado de Créditos de Mitigación de los Estados Unidos, y son una característica clave que aumenta el valor de los créditos emitidos por el estándar Verra + CCB, generando así ingresos significativos e incentivando los esfuerzos de conservación.",
    fn2Heading: "*2 Demanda de créditos de carbono",
    fn2Para:
      "Múltiples informes confirman una demanda de créditos de carbono en rápido crecimiento, impulsada por regulaciones ambientales más estrictas y compromisos climáticos corporativos, que supera significativamente a la oferta. Según el análisis de 2023 de McKinsey & Company, se proyecta que la demanda de créditos de carbono del mercado voluntario crezca 15 veces para 2030, generando escaseces significativas, especialmente de créditos de alta calidad y verificados como los de proyectos de conservación forestal (REDD+). Este desequilibrio se debe a la disponibilidad limitada de proyectos certificados, a los rigurosos procesos de verificación y al creciente escrutinio para evitar el greenwashing.",
    fn2Source: "Fuente: McKinsey Sustainability, 2023",
    fn3Heading: "*3 Estimaciones de costos",
    fn3Para: "Hoja de cálculo de Google con los costos y años esperados",
    fn4Heading: "*4 Ingresos proyectados por créditos (La Florencia)",
    fn4ParaPre: "Generación total proyectada para el primer proyecto: ",
    fn4ParaBold: "USD 2,8M en 10 años",
    fn4ParaPost: " (para 30.000 hectáreas de La Florencia) — cómo se calcula:",
    fn4Item1:
      "Promedio de créditos de carbono por hectárea salvada en la región del Gran Chaco: 79 toneladas de CO₂/ha",
    fn4Item2:
      "Fuente: CONICET (estimamos de forma conservadora un 25% menos que la cifra original del estudio de 105 toneladas/ha para un cálculo prudente).",
    fn4Item3:
      "Porcentaje esperado de hectáreas salvadas certificables sobre el área total: 20%",
    fn4Item4: "Para 30.000 hectáreas → 474.000 créditos de carbono (VCU)",
    fn4VcuPre: "Valor de mercado del VCU: USD 5–30 por VCU → 30.000 hectáreas → entre ",
    fn4VcuBold: "USD 2,37M–14,22M",
    fn4VcuPost: "",
    fn4PricingSources: "Fuentes de precios:",
    fn4Source1: "ClimateTrade Market",
    fn4Source2: "Gold Standard Pricing",
    fn4Source3: "Pachama.com",
    fn4Source4: "Benchmark",
    fn4Source5: "Casos de ejemplo REDD+",
    fn4Source6: "Proyecto de ejemplo de Verra",
    fn4CaseStudy:
      "Un caso de estudio destacable a seguir es Banco de Bosques, que adquirió un bosque a la venta en un área con alto riesgo de deforestación. Implementan activamente medidas para prevenir su degradación y proteger el ecosistema. Además, al igual que nuestro proyecto, buscan la etiqueta CCB (Estándar de Clima, Comunidad y Biodiversidad) creando oportunidades de empleo local y promoviendo la economía regional. Los proyectos con la etiqueta CCB suelen vender los créditos de carbono a un precio más alto debido a su calidad ambiental y social mejorada y verificada.",
    fn4RegistryPre: "Para una visión general de todos los proyectos VCU certificados por Verra:",
    fn4RegistryLink: "Registro de proyectos VCU de Verra",
    fn5Heading: "*5 Certificaciones REDD+ y CCB",
    fn5Para1:
      "REDD+ (Reducción de Emisiones por Deforestación y Degradación de los Bosques) es un marco internacional desarrollado por las Naciones Unidas para incentivar financieramente a los países en desarrollo a proteger los bosques. Los proyectos bajo los estándares REDD+ emiten créditos de carbono verificados que representan emisiones evitadas por deforestación.",
    fn5Para2:
      "El Estándar CCB (Clima, Comunidad y Biodiversidad) es una certificación adicional otorgada por Verra y otros organismos certificadores, que confirma que un proyecto no solo reduce las emisiones de carbono, sino que también aporta beneficios sociales y de biodiversidad medibles. Los proyectos con la etiqueta CCB suelen alcanzar precios superiores, ya que los compradores valoran la mayor transparencia, el impacto ambiental y la participación positiva de la comunidad.",
    fn5Source1: "Fuente: Verra – Estándares REDD+ y CCB",
    fn5Link: "Berkeley Carbon Trading Project (Base de datos de VCU)",
    fn5ImageAlt: "Gráfico de demanda de créditos de carbono verificados",
    fn5Caption:
      "195.500/482.500 = 60% de todos los créditos emitidos por REDD+ a nivel mundial han sido comprados. La misma situación ocurre con los proyectos de Latinoamérica y de Verra (al filtrarlos).",
    fn5Image2Alt: "Gráfico de demanda de créditos de carbono verificados",
  },
};

export const whitepaperContent = { en, es };
