import React from 'react';

// ─── Helper Components ───────────────────────────────────────────────

function Callout({ type = 'info', label, children }) {
  return (
    <div className={`callout${type === 'analogy' ? ' analogy' : ''}`}>
      <div className="callout-label">{label || (type === 'analogy' ? 'Developer Analogy' : 'Note')}</div>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  );
}

function Connections({ items, goTo }) {
  return (
    <div className="connections">
      <h4>Connections to Other Disciplines</h4>
      {items.map((item, i) => (
        <div key={i} className="connection-item">
          <span className="connection-arrow">→</span>
          <span className="connection-link" onClick={() => goTo(item.target)}>{item.label}</span>
          {' — '}{item.desc}
        </div>
      ))}
    </div>
  );
}

// ─── Module 2: Civil / Geotech ───────────────────────────────────────

function M2L1({ goTo }) {
  return (
    <>
      <h3>Why Investigate the Ground?</h3>
      <p>
        Before you can design anything — embankments, cuttings, foundations, drainage — you
        must know what the ground is made of, how it behaves, and what hazards lurk beneath
        the surface. Ground investigation (GI) is the geotechnical equivalent of requirements
        gathering: skip it, and every subsequent decision is built on assumptions.
      </p>
      <p>
        The consequences of inadequate GI are severe: unexpected soft ground can add months
        to a programme and millions to costs; undetected mine workings can cause sudden
        collapse; unknown contamination can trigger regulatory shutdowns. The UK's
        Institution of Civil Engineers has estimated that inadequate site investigation
        contributes to the majority of construction cost overruns on civil engineering
        projects.
      </p>

      <h3>Desk Study &amp; Walkover Survey</h3>
      <p>
        Every GI begins with a <strong>desk study</strong>: reviewing published geological maps,
        historical Ordnance Survey maps (which reveal old quarries, mines, landfills), aerial
        photographs, and existing borehole records from the British Geological Survey database.
        This is followed by a <strong>walkover survey</strong> — physically walking the site to
        observe ground conditions, drainage patterns, slope instability signs (tension cracks,
        hummocky ground), and vegetation indicators.
      </p>
      <p>
        The desk study also identifies:
      </p>
      <ul>
        <li><strong>Mining records:</strong> In coalfield areas (South Wales, Yorkshire, Midlands, Scotland), historical mine workings can exist at shallow depth. Coal Authority records and old mine plans are essential. Unrecorded workings remain a significant hazard.</li>
        <li><strong>Made ground:</strong> Areas of fill material from previous development — old railway embankments, demolished buildings, landfill sites. Made ground is highly variable and often poorly compacted.</li>
        <li><strong>Natural hazards:</strong> Dissolution features in chalk and limestone (sinkholes, swallow holes), shrink-swell clays that move seasonally with moisture changes, landslide-prone slopes, and alluvial floodplains with soft, compressible soils.</li>
        <li><strong>Environmental constraints:</strong> Sites of Special Scientific Interest (SSSIs), protected species habitats, and contaminated land registers that may affect access, methodology, and disposal requirements.</li>
      </ul>

      <h3>Intrusive Investigation</h3>
      <p>
        After the desk study, physical investigation begins. The investigation is designed
        in phases: a <strong>preliminary investigation</strong> to confirm the geological
        model, followed by a <strong>detailed investigation</strong> to obtain design
        parameters for specific structures.
      </p>
      <ul>
        <li>
          <strong>Boreholes:</strong> Drilled typically 10–30 m deep using cable percussion or
          rotary methods. Produce continuous samples and allow in-situ testing at depth.
          Cable percussion rigs are the UK workhorse — a heavy chisel tool is repeatedly
          dropped to break and remove the ground, with samples taken at regular intervals.
          Rotary drilling uses a rotating drill bit and can penetrate hard rock. Borehole
          logs record every material encountered, with samples sealed and sent to the
          laboratory.
        </li>
        <li>
          <strong>Trial pits:</strong> Excavated by machine to 3–5 m depth. Cheaper and
          quicker than boreholes, and allow direct visual inspection of soil layers, structure,
          and groundwater seepage. The geologist can physically examine the exposed face —
          something impossible in a borehole. Limited by depth and safety (they must be
          shored or battered if anyone enters).
        </li>
        <li>
          <strong>Window samples:</strong> Small-diameter (typically 50–100 mm) continuous
          samples taken using a percussive rig. Faster and cheaper than full boreholes,
          useful for obtaining soil profiles to moderate depth (5–15 m). Commonly used to
          fill gaps between deeper boreholes.
        </li>
        <li>
          <strong>Dynamic probing:</strong> A cone is driven into the ground by a standard
          hammer, and blow counts are recorded continuously. Quick and cheap, providing a
          relative stiffness profile without recovering samples. Useful for mapping lateral
          variation across a site.
        </li>
      </ul>

      <h3>In-Situ Testing</h3>
      <ul>
        <li>
          <strong>SPT (Standard Penetration Test):</strong> A 63.5 kg hammer is dropped 760 mm
          to drive a split-barrel sampler into the ground. The number of blows (N-value) for
          300 mm penetration correlates to soil strength. Quick, ubiquitous, and well-understood.
          The N-value is corrected for overburden pressure and energy ratio to give a standardised
          N₆₀ value. In sands, SPT N-values directly correlate to relative density and friction
          angle. In clays, SPT is less reliable and other methods are preferred.
        </li>
        <li>
          <strong>CPT (Cone Penetration Test):</strong> A cone is pushed into the ground at a
          steady rate (20 mm/s) while measuring tip resistance (q<sub>c</sub>) and sleeve
          friction (f<sub>s</sub>) continuously. Produces a detailed, continuous strength
          profile with data points every 20 mm. The friction ratio (f<sub>s</sub>/q<sub>c</sub>)
          classifies the soil type. A piezocone (CPTu) also measures pore water pressure,
          adding groundwater information. More expensive than SPT but far more informative —
          the gold standard for site characterisation.
        </li>
        <li>
          <strong>Pressuremeter test:</strong> An inflatable probe is expanded against the
          borehole wall while measuring pressure and displacement. Directly measures in-situ
          stiffness and strength, which is particularly useful for foundation design.
        </li>
        <li>
          <strong>Vane shear test:</strong> A four-bladed vane is pushed into soft clay and
          rotated. The torque required to shear the clay gives the undrained shear strength
          directly. Essential for soft ground assessment.
        </li>
      </ul>

      <h3>Laboratory Testing</h3>
      <p>
        Samples recovered from boreholes and trial pits are sent to a geotechnical
        laboratory for classification and strength testing:
      </p>
      <ul>
        <li><strong>Atterberg limits:</strong> Determine the moisture content at which a clay changes from solid to plastic to liquid state. The <em>liquid limit</em> (LL) and <em>plastic limit</em> (PL) define the <em>plasticity index</em> (PI = LL − PL), which classifies the clay's behaviour. High-PI clays are more prone to shrink-swell movement and are generally more problematic for construction.</li>
        <li><strong>Particle size distribution:</strong> Sieve analysis for coarse fractions (gravel, sand) and sedimentation (hydrometer) analysis for fine fractions (silt, clay). Classifies the soil and determines its suitability as fill material.</li>
        <li><strong>Triaxial testing:</strong> A cylindrical sample is confined in a pressurised cell and loaded to failure. Different drainage conditions (UU, CU, CD) give different strength parameters. <strong>Consolidated undrained (CU)</strong> tests are the standard for slope stability analysis, providing effective stress parameters c' and φ'.</li>
        <li><strong>Oedometer (consolidation) test:</strong> Measures how much a saturated clay will settle under load and how quickly. Essential for predicting embankment settlement on soft ground. Produces the coefficient of consolidation (c<sub>v</sub>) and compression index (C<sub>c</sub>).</li>
        <li><strong>Chemical testing:</strong> Sulphate content, pH, and organic content of the soil, which determine the aggressiveness of the ground toward concrete foundations. BRE Special Digest 1 classifies the design sulphate class.</li>
        <li><strong>Compaction testing (Proctor):</strong> Determines the optimum moisture content for maximum dry density — critical for specifying earthworks compaction requirements.</li>
      </ul>

      <h3>Groundwater &amp; Contamination</h3>
      <p>
        Groundwater level and flow direction profoundly affect everything from excavation
        methods to long-term slope stability. Monitoring standpipes or piezometers are
        installed in boreholes to track water levels over time — a single reading is
        insufficient, as groundwater varies seasonally. <strong>Response zones</strong> in
        piezometers target specific aquifers, allowing the groundwater regime at different
        depths to be understood.
      </p>
      <p>
        On brownfield sites (former industrial land), contaminated land assessment is
        mandatory. Testing covers:
      </p>
      <ul>
        <li><strong>Hydrocarbons:</strong> From fuel storage, garages, and industrial processes. Includes total petroleum hydrocarbons (TPH), BTEX compounds, and polycyclic aromatic hydrocarbons (PAHs).</li>
        <li><strong>Heavy metals:</strong> Lead, cadmium, mercury, chromium, arsenic — common on former industrial sites and gas works.</li>
        <li><strong>Asbestos:</strong> Found in demolition rubble and made ground. Requires specialist handling and disposal protocols.</li>
        <li><strong>Ground gas:</strong> Methane and carbon dioxide from landfill, former coal workings, or organic deposits. Gas monitoring wells track concentrations over time. Significant gas levels require protection measures in structures.</li>
      </ul>
      <p>
        Contamination triggers a <strong>risk assessment</strong> (source-pathway-receptor
        model) to determine whether remediation is required before construction can proceed.
        Remediation options range from excavation and disposal (expensive) to in-situ
        treatment (bioremediation, chemical stabilisation) to containment (capping layers,
        barrier walls).
      </p>

      <h3>Geophysical Surveys</h3>
      <p>
        Non-intrusive geophysical methods can rapidly survey large areas, identifying
        anomalies that guide where to place boreholes:
      </p>
      <ul>
        <li><strong>Ground Penetrating Radar (GPR):</strong> Transmits radar pulses into the ground and records reflections from interfaces (soil boundaries, buried structures, voids). Effective to about 5–10 m in dry soils, much less in clay. Used to map shallow utilities, buried foundations, and ballast thickness on existing railways.</li>
        <li><strong>Electrical resistivity:</strong> Measures the ground's electrical resistance, which varies with soil type, moisture, and saturation. Can map buried channels, contamination plumes, and the water table over large areas.</li>
        <li><strong>Seismic refraction/reflection:</strong> Measures the speed of seismic waves through the ground to map rock head depth and identify geological boundaries. Useful for tunnel alignment design.</li>
      </ul>

      <Callout type="analogy">
        Ground investigation is <strong>infrastructure benchmarking and requirements
        gathering</strong>. You would never deploy a production system without understanding
        the hardware it runs on — CPU specs, memory, disk I/O, network latency. A desk study
        is reading the vendor spec sheets. Boreholes and CPTs are running actual benchmarks.
        Lab testing is profiling under controlled conditions. Geophysics is a non-intrusive
        scan — like running <code>nmap</code> before detailed penetration testing. And
        skipping GI is deploying to production without ever testing — sometimes it works, but
        when it fails, it fails catastrophically.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm2-l2', label: 'Earthworks', desc: 'Using GI results to design cuttings and embankments.' },
        { target: 'm2-l3', label: 'Drainage & Slope Stability', desc: 'Groundwater findings drive drainage design.' },
        { target: 'm3-l1', label: 'Bridges', desc: 'Foundation design depends entirely on GI results.' },
        { target: 'm3-l2', label: 'Tunnels & Retaining Walls', desc: 'Tunnelling method selection depends on ground conditions.' },
      ]} />
    </>
  );
}

function M2L2({ goTo }) {
  return (
    <>
      <h3>Cuttings</h3>
      <p>
        A <strong>cutting</strong> is an excavation through higher ground to keep the railway
        at the required gradient. The design challenge is the slope angle: too steep and the
        slopes fail; too shallow and you excavate (and dispose of) far more material than
        necessary.
      </p>
      <ul>
        <li><strong>Soil cuttings:</strong> Slope angles typically 1V:2H to 1V:3H depending on soil type and groundwater. Require surface protection (grass, geotextile) and drainage. In over-consolidated clays (like London Clay), initial stability can be deceptive — the intact clay is strong, but over decades, progressive softening along fissures reduces strength to residual values, and delayed failures can occur 50–100 years after construction.</li>
        <li><strong>Rock cuttings:</strong> Can be steeper (up to vertical for competent rock) but require assessment of discontinuities (joints, faults, bedding planes) that could create wedge or toppling failures. A <strong>stereographic analysis</strong> (plotting joint orientations on a stereonet) identifies potential kinematic failure mechanisms. May need rock bolts, mesh, catch fences, or scaling (removing loose blocks).</li>
      </ul>

      <h3>Cutting Design Process</h3>
      <p>
        The design of a cutting involves several integrated analyses:
      </p>
      <ul>
        <li><strong>Slope stability analysis:</strong> Using methods such as Bishop's simplified method or Morgenstern-Price to calculate the Factor of Safety for the proposed slope angle. The analysis uses shear strength parameters from triaxial testing, groundwater conditions from piezometers, and considers both short-term (undrained) and long-term (drained) conditions.</li>
        <li><strong>Drainage design:</strong> Cutting slopes concentrate water runoff. Catch water drains at the crest intercept surface water before it erodes the slope face. Counterfort drains (herringbone patterns cut into the slope face, filled with drainage aggregate) lower the water table within the slope, improving stability.</li>
        <li><strong>Slope protection:</strong> Topsoil and grass seeding for erosion protection in soil cuttings. Geotextile erosion blankets for initial establishment. Rock armour or shotcrete for unstable rock faces. Rockfall netting and catch fences where detached blocks could reach the track.</li>
        <li><strong>Formation design:</strong> The flat base of the cutting (the formation) must provide adequate bearing capacity for the track structure. If the exposed ground is too weak, a <strong>blanket layer</strong> of imported granular material is placed to improve load distribution.</li>
      </ul>

      <h3>Embankments</h3>
      <p>
        An <strong>embankment</strong> raises the railway above surrounding ground level. They
        are built by placing fill material in layers (typically 200–300 mm) and compacting each
        layer to a specified density. Key concerns:
      </p>
      <ul>
        <li><strong>Settlement:</strong> Embankments on soft ground will settle. Predicting the magnitude and rate of settlement (using consolidation theory) is critical to ensuring the track remains at the correct level. Terzaghi's one-dimensional consolidation theory and the oedometer test parameters are the tools for this prediction.</li>
        <li><strong>Slope stability:</strong> Embankment side slopes must be stable under all conditions — including rapid drawdown after flooding and earthquake loading in seismic zones.</li>
        <li><strong>Material quality:</strong> Fill must be suitable — not too wet, not too dry, free of large boulders and organics. Material is classified into use categories (Class 1A general fill, Class 2 selected granular, Class 6 for capping, etc.) following the Specification for Highway Works (SHW), which is also adopted for railway earthworks.</li>
      </ul>

      <h3>Embankment Construction on Soft Ground</h3>
      <p>
        Building embankments on soft alluvial or peat ground is one of the most challenging
        geotechnical problems. Without treatment, settlement can be measured in metres and
        continue for decades. Techniques include:
      </p>
      <ul>
        <li><strong>Preloading (surcharging):</strong> Building the embankment higher than required and waiting for the soft ground to consolidate (settle) under the excess load. Once settlement is largely complete, the surcharge is removed. This can take months to years depending on permeability.</li>
        <li><strong>Vertical drains (wick drains):</strong> Prefabricated band-shaped drains installed vertically through soft clay to shorten the drainage path. Water can escape horizontally to the nearest drain rather than travelling the full depth. Combined with surcharging, this dramatically accelerates consolidation — reducing timescales from years to months.</li>
        <li><strong>Ground improvement — vibro-compaction:</strong> A vibrating probe densifies loose granular soils in-situ by rearranging the grains into a denser packing. Suitable for sands and gravels.</li>
        <li><strong>Ground improvement — stone columns (vibro-replacement):</strong> Columns of crushed stone installed through soft clay by a vibrating probe. The stone columns carry load and act as drainage paths. Widely used for embankments on soft alluvium.</li>
        <li><strong>Piling:</strong> For very soft or organic ground where settlement cannot be tolerated, the embankment loads may be transferred to a deeper bearing stratum via piles. <strong>Piled embankments</strong> use a grid of piles with a reinforced load-transfer platform (geotextile and granular layer) distributing the embankment load to the pile caps.</li>
        <li><strong>Lightweight fill:</strong> Replacing some or all of the conventional fill with lightweight materials — expanded polystyrene (EPS) blocks, foamed concrete, or pulverised fuel ash (PFA). EPS blocks weigh only 1% of equivalent soil, dramatically reducing the load on soft ground.</li>
      </ul>

      <h3>Mass Haul</h3>
      <p>
        A new railway produces enormous volumes of excavated material (from cuttings and
        tunnels) and requires enormous volumes of fill (for embankments). <strong>Mass haul
        optimisation</strong> matches cuts to fills, minimising the distance material must be
        transported. Mass haul diagrams plot cumulative cut/fill volumes along the route;
        the goal is to balance them and minimise costly import or disposal of material.
      </p>
      <p>
        The <strong>mass haul diagram</strong> is a graph with chainage on the x-axis and
        cumulative volume on the y-axis. The curve rises where there is net cut (material
        produced) and falls where there is net fill (material consumed). The difference
        between any two points gives the net volume to be transported between those locations.
        The gradient of the curve indicates the rate of production or consumption at that point.
      </p>
      <p>
        Key optimisation considerations:
      </p>
      <ul>
        <li><strong>Haul distance:</strong> Moving material by truck is expensive — cost increases with distance. Keeping material movements short (within the same site area) is critical.</li>
        <li><strong>Material suitability:</strong> Not all excavated material is suitable for fill. Wet clay from deep cuttings may need to be dried or treated with lime/cement before it can be used as structural fill. Rock from tunnel excavation may need crushing.</li>
        <li><strong>Bulking and shrinkage:</strong> Soil expands when excavated (bulking) and compresses when placed as fill (shrinkage). A 1,000 m³ bank volume of cutting might produce 1,200 m³ loose and need only 900 m³ to achieve the same compacted fill volume. These factors must be included in mass haul calculations.</li>
        <li><strong>Disposal costs:</strong> Surplus material that cannot be reused must be disposed of at licensed tips. Contaminated material requires specialist disposal at significantly higher cost. Minimising disposal is both economically and environmentally important.</li>
      </ul>

      <Callout type="analogy">
        Mass haul optimisation is <strong>resource allocation and scheduling</strong>. You have
        a set of producers (cuttings generating spoil) and consumers (embankments needing fill).
        Moving material is expensive (like network bandwidth), so you want to minimise
        transport distance. It is essentially a supply-chain optimisation problem — the same
        class of problem as optimising data centre placement or CDN cache distribution.
        Material suitability constraints are like data format compatibility — you cannot just
        move any data to any consumer without transformation.
      </Callout>

      <h3>The Proctor Test</h3>
      <p>
        Before placing fill, the <strong>Proctor compaction test</strong> determines the
        optimum moisture content (OMC) at which a soil achieves its maximum dry density.
        Compaction in the field is then specified as a percentage of this maximum (e.g.
        "achieve 95% of maximum dry density"). Too wet and the material cannot be compacted
        (it behaves like a slurry); too dry and it won't bind properly (it remains loose).
      </p>
      <p>
        The test exists in two variants: the <strong>standard Proctor</strong> (2.5 kg rammer,
        light compaction — representing hand-placed fill) and the <strong>modified Proctor</strong>
        (4.5 kg rammer, heavy compaction — representing modern machine compaction). The modified
        Proctor gives a higher maximum dry density at a lower OMC, reflecting the greater
        compactive effort of modern plant. Field compaction is verified using nuclear density
        gauges, sand replacement tests, or dynamic plate load tests.
      </p>

      <h3>Victorian Earthworks</h3>
      <p>
        The UK's railway earthworks were largely built in the 1830s–1870s by navvies using
        hand tools, horses, and simple machinery. These embankments were often constructed
        without compaction, using whatever material was locally available — sometimes including
        ash, clinker, domestic waste, and demolition rubble. After 150+ years, they continue
        to settle, slide, and deteriorate.
      </p>
      <p>
        Managing this aging infrastructure is one of Network Rail's biggest engineering
        challenges and costs. Key issues include:
      </p>
      <ul>
        <li><strong>Progressive failure:</strong> Over-consolidated clay embankments built in the Victorian era are experiencing delayed failures as softening along fissures gradually reduces the clay's strength toward residual values.</li>
        <li><strong>Seasonal shrink-swell:</strong> Clay embankments expand when wet (winter) and shrink when dry (summer), causing cyclic track geometry disturbance. Climate change is making dry summers more extreme, worsening the problem.</li>
        <li><strong>Vegetation:</strong> Trees planted on or near Victorian slopes extract moisture, causing differential drying and movement. But removing trees can also trigger instability by removing root reinforcement and allowing water levels to rise.</li>
        <li><strong>Unknown construction:</strong> Records of Victorian construction are sparse. The materials, geometry, and internal structure of many earthworks are unknown until they are investigated — often only after a failure has occurred.</li>
      </ul>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Tring_cutting_on_the_West_Coast_main_line_-_geograph.org.uk_-_3414657.jpg/1280px-Tring_cutting_on_the_West_Coast_main_line_-_geograph.org.uk_-_3414657.jpg"
          alt="Tring cutting on the West Coast Main Line, a deep chalk cutting built in the 1830s by Robert Stephenson, still carrying trains"
          loading="lazy"
        />
        <figcaption>
          Tring cutting on the West Coast Main Line — excavated through chalk in the 1830s by Robert Stephenson's navvies, still carrying 200 km/h trains nearly two centuries later.
          Photo: <a href="https://commons.wikimedia.org/wiki/File:Tring_cutting_on_the_West_Coast_main_line_-_geograph.org.uk_-_3414657.jpg" target="_blank" rel="noopener noreferrer">Geograph</a>, CC BY-SA 2.0
        </figcaption>
      </figure>

      <h3>Earthworks Monitoring</h3>
      <p>
        Modern earthworks management increasingly relies on remote monitoring:
      </p>
      <ul>
        <li><strong>Inclinometers:</strong> Instruments installed in boreholes that detect lateral ground movement at different depths. They reveal the depth and rate of any slip surface developing within a slope.</li>
        <li><strong>Piezometers:</strong> Monitor pore water pressure within the slope. Rising water pressures reduce effective stress and hence stability.</li>
        <li><strong>InSAR (satellite radar):</strong> Synthetic aperture radar from satellites can detect millimetre-scale surface movements across entire networks. Network Rail uses InSAR to prioritise earthworks inspections — slopes showing unexpected movement are investigated first.</li>
        <li><strong>Weather-triggered alerts:</strong> Many slope failures correlate with prolonged rainfall or rapid snowmelt. Early warning systems trigger enhanced monitoring or speed restrictions when rainfall thresholds are exceeded.</li>
      </ul>

      <Connections goTo={goTo} items={[
        { target: 'm2-l1', label: 'Ground Investigation', desc: 'The data that drives every earthworks design decision.' },
        { target: 'm2-l3', label: 'Drainage & Slope Stability', desc: 'Keeping earthworks stable long-term.' },
        { target: 'm1-l1', label: 'Track Structure', desc: 'The track layers that sit on top of the formation.' },
      ]} />
    </>
  );
}

function M2L3({ goTo }) {
  return (
    <>
      <h3>Why Drainage Matters</h3>
      <p>
        Water is the enemy of railway earthworks. It softens subgrades, triggers slope
        failures, erodes ballast shoulders, causes frost heave, and accelerates deterioration
        of every material it contacts. Effective drainage is not an afterthought — it is
        fundamental to the integrity of the entire track structure. More railway earthwork
        failures are caused by water than any other factor.
      </p>
      <p>
        The relationship between water and soil strength is governed by the principle of
        <strong> effective stress</strong>: σ' = σ − u, where σ' is the effective stress
        (the stress carried by the soil skeleton), σ is the total stress, and u is the pore
        water pressure. As water pressure (u) increases, effective stress decreases, and so
        does the soil's shear strength. Drainage reduces pore water pressure, maintaining
        effective stress and hence stability.
      </p>

      <h3>Surface Drainage</h3>
      <ul>
        <li><strong>Cess drains:</strong> Channels running alongside the track at the edge of the ballast shoulder (the "cess"). They collect surface water runoff from the track bed and direct it to outfalls. Typically V-shaped or trapezoidal open channels, sometimes concrete-lined. Their capacity must handle the design storm event (often 1-in-100 year return period for railways).</li>
        <li><strong>Catch water drains:</strong> Located at the top of cutting slopes to intercept surface water before it flows down the cut face and causes erosion. Critical on long or steep cutting slopes where uncontrolled surface flow would cause severe gully erosion.</li>
        <li><strong>Track drainage:</strong> The ballast itself acts as a drainage medium — water percolates through the voids between stones. When ballast becomes fouled (clogged with fines), drainage fails and the track softens. This is a leading cause of geometry deterioration. Cleaning or replacing fouled ballast is one of the most expensive routine maintenance operations.</li>
        <li><strong>Formation drains:</strong> Where the formation (the surface on which the ballast sits) is impermeable clay, water cannot drain downward through the ballast and pools at the ballast/formation interface. Formation drains — either trenches or geocomposite strips at formation level — collect this trapped water and convey it to outfalls.</li>
      </ul>

      <h3>Subsurface Drainage</h3>
      <ul>
        <li>
          <strong>French drains (trench drains):</strong> Trenches filled with free-draining
          aggregate and wrapped in geotextile filter fabric. The geotextile prevents fine soil
          particles from entering and clogging the drain while allowing water to pass freely.
          Intercept groundwater flow and lower the water table within slopes or beneath
          formations.
        </li>
        <li>
          <strong>Carrier drains:</strong> Perforated pipes (typically perforated plastic or
          porous concrete) laid in trenches with granular surround. Used for higher-capacity
          subsurface drainage or where water must be conveyed over longer distances to an
          outfall. The perforations face downward (to minimise sediment ingress) and the pipe
          gradient must be sufficient to maintain self-cleansing velocity.
        </li>
        <li>
          <strong>Counterfort drains:</strong> A pattern of deep trench drains cut into the
          face of a cutting or embankment slope, typically in a herringbone pattern. They
          intercept water flowing through the slope body and direct it to a main collector
          drain. One of the most effective remedial measures for slopes suffering water-related
          deterioration.
        </li>
        <li>
          <strong>Horizontal drains:</strong> Small-diameter perforated pipes drilled
          sub-horizontally into a slope face to intersect a water-bearing layer. The pipe
          drains under gravity, lowering the water table within the slope. Used where
          conventional trench drains cannot reach the water.
        </li>
      </ul>

      <h3>Culverts</h3>
      <p>
        Where a watercourse (stream, ditch, or river) must cross beneath the railway, a
        <strong>culvert</strong> is provided. Types range from small-diameter pipe culverts
        (300 mm–1,200 mm) to large box culverts capable of handling major flows. Design
        considerations include:
      </p>
      <ul>
        <li><strong>Hydraulic capacity:</strong> The culvert must pass the design flood (typically 1-in-100 year or 1-in-200 year return period) without the upstream water level rising high enough to threaten the track. Climate change allowances (typically +20–40% on peak flow) are now standard.</li>
        <li><strong>Scour protection:</strong> Water velocity through and downstream of culverts can erode the bed and banks. Headwalls, wingwalls, aprons, and riprap protect against scour.</li>
        <li><strong>Blockage risk:</strong> Culvert blockage is a serious risk — backed-up water can saturate the embankment and cause failure. Trash screens protect culvert inlets but must themselves be maintained. Regular inspection and clearance is essential, particularly before and during flood seasons.</li>
        <li><strong>Fish passage:</strong> Environmental regulations increasingly require culverts to maintain fish passage. This affects the invert level (must be buried below bed level), flow velocity (must not exceed swimming capacity), and internal conditions (natural bed material within the culvert).</li>
      </ul>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Small_stream_flowing_through_culvert_under_railway_and_footpath_bridge_-_geograph.org.uk_-_8127469.jpg/1280px-Small_stream_flowing_through_culvert_under_railway_and_footpath_bridge_-_geograph.org.uk_-_8127469.jpg"
          alt="A small stream flowing through a culvert under a railway embankment, showing how watercourses are carried beneath the track"
          loading="lazy"
        />
        <figcaption>
          A culvert carrying a stream beneath a railway embankment. Blockage of culverts like this can saturate the embankment and lead to failure.
          Photo: <a href="https://commons.wikimedia.org/wiki/File:Small_stream_flowing_through_culvert_under_railway_and_footpath_bridge_-_geograph.org.uk_-_8127469.jpg" target="_blank" rel="noopener noreferrer">Geograph</a>, CC BY-SA 2.0
        </figcaption>
      </figure>

      <h3>Slope Stability</h3>
      <p>
        A slope fails when the driving forces (gravity, water pressure) exceed the resisting
        forces (soil shear strength). The <strong>Factor of Safety (FoS)</strong> is the ratio
        of resisting to driving forces. FoS &gt; 1 means stable; FoS &lt; 1 means failure.
        Design typically targets FoS of 1.3–1.5 for permanent slopes.
      </p>
      <ul>
        <li><strong>Circular slip:</strong> The most common failure mode in clay soils. The failure surface approximates a circular arc. Analysed by <strong>Bishop's simplified method</strong>, which divides the soil mass into vertical slices and checks equilibrium. Modern analysis uses software (GeoSlope, Plaxis) that can search thousands of potential slip circles to find the most critical one.</li>
        <li><strong>Wedge failure:</strong> Occurs in rock or structured soils where a planar discontinuity (bedding plane, joint) creates a sliding surface. Analysed by comparing the weight component along the plane with the shear resistance of the discontinuity surface.</li>
        <li><strong>Rotational failure:</strong> Deep-seated circular or non-circular failures, often extending well below the toe of the slope. These can affect the track even when the visible slope face appears intact.</li>
        <li><strong>Flow failure:</strong> In very soft or sensitive clays, or in saturated loose sands (liquefaction), the soil can behave as a fluid. Flow slides can travel large distances and are extremely destructive.</li>
      </ul>

      <h3>Slope Remediation Techniques</h3>
      <p>
        When a slope is found to be unstable or has failed, remediation options include:
      </p>
      <ul>
        <li><strong>Regrading:</strong> Reducing the slope angle (cutting back the top or building up the toe) to improve the FoS. Effective but requires land and generates/consumes material.</li>
        <li><strong>Drainage:</strong> Lowering the water table is often the most cost-effective remediation. Counterfort drains, horizontal drains, and pumped wells all reduce pore water pressure.</li>
        <li><strong>Soil nailing:</strong> Steel bars (typically 20–30 mm diameter) are drilled and grouted into the slope at regular spacings. They reinforce the soil mass in tension, increasing the resisting forces along potential slip surfaces. The slope face is often protected with a sprayed concrete facing or steel mesh.</li>
        <li><strong>Retaining structures:</strong> Sheet piles, contiguous or secant bored pile walls, or reinforced earth can provide structural restraint. These are expensive but may be the only option where space for regrading is unavailable.</li>
        <li><strong>Geosynthetic reinforcement:</strong> Geogrids or woven geotextiles placed within the slope body during reconstruction provide additional tensile resistance. Used extensively in reinforced-earth embankments.</li>
      </ul>

      <h3>Frost Heave &amp; Vegetation</h3>
      <p>
        In cold climates, water in the subgrade can freeze, forming ice lenses that push the
        track upward — <strong>frost heave</strong>. Ice lenses grow by drawing water from the
        surrounding unfrozen soil through capillary action. The heave can be severe — several
        centimetres of uplift — and is uneven, creating dangerous track geometry faults. The
        frost thaw cycle causes further damage: as ice melts, the previously frozen soil
        becomes saturated and extremely weak.
      </p>
      <p>
        Prevention involves ensuring adequate drainage (dry soil doesn't heave), using
        non-frost-susceptible subgrade materials (granular, not silty), and providing
        sufficient frost-free depth above the water table. In Scandinavia and Canada,
        insulation layers (expanded polystyrene boards) are placed beneath the ballast to
        reduce frost penetration.
      </p>
      <p>
        <strong>Vegetation management</strong> is a balancing act: tree roots can stabilise
        slopes through mechanical reinforcement and moisture extraction, but can also block
        drains, grow into culverts, and destabilise structures by root intrusion into
        masonry joints. Leaf fall contaminates the rail head and devastates autumn adhesion
        (the infamous "leaves on the line" — not a joke but a genuine and serious operational
        problem caused by a thin, compacted layer of leaf mulch that reduces wheel-rail
        friction below braking thresholds).
      </p>

      <h3>Climate Change and Earthworks</h3>
      <p>
        Climate change is intensifying the challenges for railway earthworks:
      </p>
      <ul>
        <li><strong>More intense rainfall:</strong> Higher peak rainfall leads to more surface erosion, higher pore water pressures in slopes, and increased flood risk for culverts. Many existing drainage systems were designed for historical rainfall patterns that no longer apply.</li>
        <li><strong>Hotter, drier summers:</strong> Extended dry periods cause deeper desiccation cracking in clay slopes. When heavy rain follows drought, water infiltrates rapidly through cracks, causing sudden instability.</li>
        <li><strong>Sea level rise:</strong> Coastal railways face increased erosion and flood risk. Entire sections of some coastal lines (e.g., the Dawlish sea wall on the UK's Great Western Main Line) are under threat.</li>
      </ul>

      <Callout type="analogy">
        Drainage is <strong>garbage collection</strong>. In a runtime without GC, memory
        (water) accumulates in places you don't want it, eventually causing crashes (slope
        failures). A well-designed drainage system continuously removes water before it causes
        problems — just as a garbage collector reclaims memory before it causes out-of-memory
        errors. Neglect either system and degradation is gradual, then sudden. Climate change
        is like a traffic spike that exceeds the GC's designed throughput — the system was
        sized for a different workload.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm2-l2', label: 'Earthworks', desc: 'The slopes and formations that drainage protects.' },
        { target: 'm2-l1', label: 'Ground Investigation', desc: 'Understanding groundwater before designing drainage.' },
        { target: 'm1-l1', label: 'Track Structure', desc: 'Ballast as both structural layer and drainage medium.' },
        { target: 'm3-l1', label: 'Bridges', desc: 'Scour and flood loading — drainage at structural interfaces.' },
      ]} />
    </>
  );
}

// ─── Export ──────────────────────────────────────────────────────────

export default function getM2Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm2-l1': return <M2L1 goTo={goTo} />;
    case 'm2-l2': return <M2L2 goTo={goTo} />;
    case 'm2-l3': return <M2L3 goTo={goTo} />;
    default: return null;
  }
}
