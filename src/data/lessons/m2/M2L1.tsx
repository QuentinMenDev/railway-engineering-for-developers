import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import { BoreholeLog } from '../../../components/symbols';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M2L1({ goTo }: LessonProps) {
  return (
    <>
      <figure className="lesson-figure">
        <div className="cad-symbol">
          <BoreholeLog style={{ maxWidth: '260px' }} />
        </div>
        <figcaption>Schematic: Borehole log — soil/rock layers, groundwater level (GWL), and SPT blow counts.</figcaption>
      </figure>

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

      <figure className="lesson-figure">
        <div className="image-placeholder">
          <p>IMAGE NEEDED: Photo of a geotechnical borehole drilling rig in operation next to a railway, or a soil sample core being extracted. Shows the physical process of ground investigation.</p>
        </div>
        <figcaption>A borehole drilling rig investigating ground conditions — the geotechnical equivalent of requirements gathering.</figcaption>
      </figure>

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

export const quiz: QuizQuestion[] = [
  { text: 'What is the primary purpose of a ground investigation?', options: ['To find buried treasure', 'To determine soil properties, bearing capacity, and groundwater conditions', 'To plan the track alignment', 'To test signalling equipment'], correct: 1, explanation: 'Ground investigation determines soil composition, strength, water table position, and hazards. All foundation and earthwork design depends on this.' },
  { text: 'What does the Standard Penetration Test (SPT) measure?', options: ['Rail hardness', 'Soil resistance by counting blows to drive a sampler', 'Water permeability of rock', 'Concrete strength'], correct: 1, explanation: 'SPT counts blows to drive a sampler 300 mm. Higher N-values = denser soil. One of the most common in-situ tests worldwide.' },
  { text: 'Why is a desk study performed before physical investigation?', options: ['It is cheaper than fieldwork', 'It identifies geological risks, historical land use, and existing records before mobilising', 'It is required by law', 'All of the above'], correct: 1, explanation: 'A desk study reviews geological maps, historical records, mining data, and environmental databases to target fieldwork efficiently.' },
];
