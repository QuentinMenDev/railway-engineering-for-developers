import type { GoToFn } from '../types';
import {
  RailCrossSection, StandardGauge,
  TrackLayerStack, CantSuperelevation, Turnout, SchematicSymbolsTrack,
  BoreholeLog, CuttingEmbankment, TrackDrainage,
  BridgeTypes, TunnelCrossSections, PlatformLayouts,
  AbsoluteBlockSection, TrackCircuit, EtcsLevel2, PointMachine, LevelCrossing,
  OleCatenary, ThirdRail, CatenarySystem, TractionPowerChain,
  VehicleTypes, TractionPowerFlow, WheelProfile,
  GsmRNetwork, FibreRingTopology, PisDataFlow,
  TimeDistanceDiagram, FlatJunctionConflict, DisruptionResponseFlow,
  GripProjectStages, InterfaceMatrix, VModelLifecycle,
} from './symbols';

interface SymbolEntry {
  name: string;
  desc: string;
  lessonId: string;
  lessonLabel: string;
  svg: React.ReactNode;
}

interface SymbolGroup {
  module: string;
  moduleId: string;
  color: string;
  symbols: SymbolEntry[];
}

export default function SymbolLexicon({ goTo }: { goTo: GoToFn }) {
  const groups: SymbolGroup[] = [
    /* ── Module 0 · Foundations ────────────────────────────── */
    {
      module: 'Foundations',
      moduleId: 'm0',
      color: 'var(--text-dim)',
      symbols: [
        {
          name: 'Rail Cross-Section (I-beam)',
          desc: 'The fundamental rail profile — an I-beam with head (wheel contact), web (vertical), and foot (load distribution). Standard rail: 60 kg/m (CEN60E1).',
          lessonId: 'm0-l1',
          lessonLabel: '0.1 Why Railways Work',
          svg: <RailCrossSection style={{ maxWidth: '120px' }} />,
        },
        {
          name: 'Standard Gauge (1,435 mm)',
          desc: 'The distance between the inner faces of the two running rails, measured 14 mm below the rail surface. Used on ~60% of world railways.',
          lessonId: 'm0-l3',
          lessonLabel: "0.3 Developer's Mental Model",
          svg: <StandardGauge style={{ maxWidth: '160px' }} />,
        },
      ],
    },

    /* ── Module 1 · Permanent Way ─────────────────────────── */
    {
      module: 'Permanent Way',
      moduleId: 'm1',
      color: 'var(--accent)',
      symbols: [
        {
          name: 'Track Layer Stack',
          desc: 'The vertical structure supporting trains: rail → sleepers → ballast → sub-ballast → subgrade. Load distributes downward through each layer.',
          lessonId: 'm1-l1',
          lessonLabel: '1.1 Track Structure',
          svg: <TrackLayerStack style={{ maxWidth: '130px' }} />,
        },
        {
          name: 'Cant / Superelevation',
          desc: 'The outer rail is raised on curves to counteract centrifugal force. Cant deficiency (D) is the difference between applied cant and equilibrium cant.',
          lessonId: 'm1-l2',
          lessonLabel: '1.2 Track Geometry',
          svg: <CantSuperelevation style={{ maxWidth: '140px' }} />,
        },
        {
          name: 'Turnout (Switch & Crossing)',
          desc: 'A track component allowing trains to diverge. Key parts: switch toe (moveable point), closure rails, and crossing (frog) where rails intersect.',
          lessonId: 'm1-l3',
          lessonLabel: '1.3 Switches & Crossings',
          svg: <Turnout style={{ maxWidth: '140px' }} />,
        },
        {
          name: 'Schematic Symbols (Track)',
          desc: 'Standardised schematic drawing symbols used on signalling layouts: plain track, turnout, stop signal, distant signal, track section, buffer stop.',
          lessonId: 'm1-l4',
          lessonLabel: '1.4 Track Representations',
          svg: <SchematicSymbolsTrack style={{ maxWidth: '180px' }} />,
        },
      ],
    },

    /* ── Module 2 · Civil & Geotechnical ──────────────────── */
    {
      module: 'Civil & Geotechnical',
      moduleId: 'm2',
      color: 'var(--accent)',
      symbols: [
        {
          name: 'Borehole Log',
          desc: 'A geological section showing subsurface layers encountered during ground investigation, with depth scale, groundwater level (GWL), and test results.',
          lessonId: 'm2-l1',
          lessonLabel: '2.1 Ground Investigation',
          svg: <BoreholeLog style={{ maxWidth: '100px' }} />,
        },
        {
          name: 'Cutting & Embankment',
          desc: 'Cutting: excavated below original ground level (OGL). Embankment: fill placed above OGL. Both create the railway formation at required levels.',
          lessonId: 'm2-l2',
          lessonLabel: '2.2 Earthworks',
          svg: <CuttingEmbankment style={{ maxWidth: '180px' }} />,
        },
        {
          name: 'Track Drainage',
          desc: 'Water percolates through ballast and is collected by cess drains at trackbed edges. Essential for formation stability and preventing frost heave.',
          lessonId: 'm2-l3',
          lessonLabel: '2.3 Drainage & Stability',
          svg: <TrackDrainage style={{ maxWidth: '140px' }} />,
        },
      ],
    },

    /* ── Module 3 · Structures ────────────────────────────── */
    {
      module: 'Structures',
      moduleId: 'm3',
      color: 'var(--blue)',
      symbols: [
        {
          name: 'Bridge Types',
          desc: 'Three principal bridge forms: arch (compression), beam (bending), and box girder (torsion-resistant hollow section).',
          lessonId: 'm3-l1',
          lessonLabel: '3.1 Bridges',
          svg: <BridgeTypes style={{ maxWidth: '180px' }} />,
        },
        {
          name: 'Tunnel Cross-Sections',
          desc: 'Bored tunnel: circular profile from TBM. Cut-and-cover: rectangular profile, built in open trench then buried.',
          lessonId: 'm3-l2',
          lessonLabel: '3.2 Tunnels & Retaining Walls',
          svg: <TunnelCrossSections style={{ maxWidth: '150px' }} />,
        },
        {
          name: 'Platform Layouts',
          desc: 'Side platform: tracks between platforms. Island platform: platform between tracks. Bay platform: dead-end track within a through station.',
          lessonId: 'm3-l3',
          lessonLabel: '3.3 Stations & Clearances',
          svg: <PlatformLayouts style={{ maxWidth: '180px' }} />,
        },
      ],
    },

    /* ── Module 4 · Signalling & Control ──────────────────── */
    {
      module: 'Signalling & Control',
      moduleId: 'm4',
      color: 'var(--red)',
      symbols: [
        {
          name: 'Absolute Block Section',
          desc: 'Only one train allowed in a block section at a time. Two signals define the section boundary. The foundation of railway safety.',
          lessonId: 'm4-l1',
          lessonLabel: '4.1 Block System & Signals',
          svg: <AbsoluteBlockSection style={{ maxWidth: '160px' }} />,
        },
        {
          name: 'Track Circuit',
          desc: 'Train detection using an electrical circuit through the rails. A battery energises a relay; a train axle short-circuits the rails, de-energising the relay.',
          lessonId: 'm4-l2',
          lessonLabel: '4.2 Interlocking & Detection',
          svg: <TrackCircuit style={{ maxWidth: '160px' }} />,
        },
        {
          name: 'ETCS Level 2',
          desc: 'Digital train control: onboard EVC receives movement authority via GSM-R radio from the Radio Block Centre (RBC). Balises provide position references.',
          lessonId: 'm4-l3',
          lessonLabel: '4.3 ETCS, CBTC & Future',
          svg: <EtcsLevel2 style={{ maxWidth: '180px' }} />,
        },
        {
          name: 'Point Machine & Level Crossing',
          desc: 'Point machine: electro-mechanical device that moves and locks switch blades. Level crossing: where a road crosses the railway at grade, protected by barriers.',
          lessonId: 'm4-l4',
          lessonLabel: '4.4 Points, Routes & Crossings',
          svg: (
            <div style={{ display: 'flex', gap: '4px' }}>
              <PointMachine style={{ maxWidth: '90px' }} />
              <LevelCrossing style={{ maxWidth: '90px' }} />
            </div>
          ),
        },
      ],
    },

    /* ── Module 5 · Electrification & Power ───────────────── */
    {
      module: 'Electrification & Power',
      moduleId: 'm5',
      color: 'var(--accent)',
      symbols: [
        {
          name: 'OLE & Third Rail',
          desc: 'Two traction power delivery methods: overhead line (25 kV AC via pantograph) and third rail (660–750 V DC via collector shoe).',
          lessonId: 'm5-l1',
          lessonLabel: '5.1 Traction Power Systems',
          svg: (
            <div style={{ display: 'flex', gap: '4px' }}>
              <OleCatenary style={{ maxWidth: '90px' }} />
              <ThirdRail style={{ maxWidth: '90px' }} />
            </div>
          ),
        },
        {
          name: 'Catenary System',
          desc: 'Catenary wire suspended between masts supports the contact wire via droppers. Maintains consistent wire height for pantograph collection.',
          lessonId: 'm5-l2',
          lessonLabel: '5.2 Overhead Line Design',
          svg: <CatenarySystem style={{ maxWidth: '180px' }} />,
        },
        {
          name: 'Traction Power Chain',
          desc: 'Power flows: national grid → feeder station → track sectioning cabin (TSC) → 25 kV overhead line → train.',
          lessonId: 'm5-l3',
          lessonLabel: '5.3 Power Supply & Protection',
          svg: <TractionPowerChain style={{ maxWidth: '180px' }} />,
        },
      ],
    },

    /* ── Module 6 · Rolling Stock ─────────────────────────── */
    {
      module: 'Rolling Stock',
      moduleId: 'm6',
      color: 'var(--accent)',
      symbols: [
        {
          name: 'Vehicle Types',
          desc: 'Locomotive: power unit only. EMU: distributed traction, self-propelled. Freight wagon: unpowered, hauled by locomotive.',
          lessonId: 'm6-l1',
          lessonLabel: '6.1 Vehicle Types & Architecture',
          svg: <VehicleTypes style={{ maxWidth: '180px' }} />,
        },
        {
          name: 'Traction Power Flow',
          desc: '25 kV AC → main transformer → inverter (VVVF) → traction motor → wheel. Regenerative braking reverses the flow.',
          lessonId: 'm6-l2',
          lessonLabel: '6.2 Traction, Braking & Dynamics',
          svg: <TractionPowerFlow style={{ maxWidth: '180px' }} />,
        },
        {
          name: 'Wheel Profile',
          desc: 'Conical tread (1:20 taper) provides self-centring. The flange prevents derailment. Tread contact patch is ~1 cm².',
          lessonId: 'm6-l3',
          lessonLabel: '6.3 Wheel-Rail Interface',
          svg: <WheelProfile style={{ maxWidth: '120px' }} />,
        },
      ],
    },

    /* ── Module 7 · Telecommunications ────────────────────── */
    {
      module: 'Telecommunications',
      moduleId: 'm7',
      color: 'var(--blue)',
      symbols: [
        {
          name: 'GSM-R Network',
          desc: 'Dedicated railway radio: cab radio → base transceiver station (BTS) → base station controller (BSC) → mobile switching centre (MSC) → control centre.',
          lessonId: 'm7-l1',
          lessonLabel: '7.1 Radio & GSM-R',
          svg: <GsmRNetwork style={{ maxWidth: '180px' }} />,
        },
        {
          name: 'Fibre Ring Topology',
          desc: 'Resilient ring: traffic can route in either direction. If one link fails, traffic automatically reverses around the ring.',
          lessonId: 'm7-l2',
          lessonLabel: '7.2 Fibre Optic Networks',
          svg: <FibreRingTopology style={{ maxWidth: '100px' }} />,
        },
        {
          name: 'PIS Data Flow',
          desc: 'Darwin (real-time data) → CIS server → station displays, PA system, and passenger apps. The passenger information chain.',
          lessonId: 'm7-l3',
          lessonLabel: '7.3 Passenger Information',
          svg: <PisDataFlow style={{ maxWidth: '160px' }} />,
        },
      ],
    },

    /* ── Module 8 · Operations ────────────────────────────── */
    {
      module: 'Operations & Timetabling',
      moduleId: 'm8',
      color: 'var(--accent-secondary)',
      symbols: [
        {
          name: 'Time-Distance Diagram',
          desc: 'The fundamental timetable planning tool. Time on X-axis, distance (stations) on Y-axis. Line slope = speed; horizontal = dwell. Where lines cross, trains pass.',
          lessonId: 'm8-l1',
          lessonLabel: '8.1 Timetabling & Scheduling',
          svg: <TimeDistanceDiagram style={{ maxWidth: '140px' }} />,
        },
        {
          name: 'Flat Junction Conflict',
          desc: 'Where routes cross at grade, conflicting movements consume capacity. Each branch train blocks the main line for 2–4 minutes.',
          lessonId: 'm8-l2',
          lessonLabel: '8.2 Capacity & Possessions',
          svg: <FlatJunctionConflict style={{ maxWidth: '160px' }} />,
        },
        {
          name: 'Disruption Response Flow',
          desc: 'Incident triggers a decision: short-turn/cancel, divert/reroute, or bus replacement. All paths lead to recovery and normal service.',
          lessonId: 'm8-l3',
          lessonLabel: '8.3 Performance & Delay',
          svg: <DisruptionResponseFlow style={{ maxWidth: '180px' }} />,
        },
      ],
    },

    /* ── Module 9 · Capstone ──────────────────────────────── */
    {
      module: 'Capstone',
      moduleId: 'm9',
      color: 'var(--accent-secondary)',
      symbols: [
        {
          name: 'GRIP Project Stages',
          desc: '8-stage lifecycle: Output Definition → Feasibility → Option Selection → Single Option → Detail Design → Build → T&C → Close Out.',
          lessonId: 'm9-l1',
          lessonLabel: '9.1 Project Lifecycle',
          svg: <GripProjectStages style={{ maxWidth: '180px' }} />,
        },
        {
          name: 'Interface Matrix',
          desc: 'Disciplines are interconnected: Track ↔ Signalling ↔ E&P ↔ Telecoms ↔ Civils ↔ Structures ↔ Rolling Stock. Failures cluster at interfaces.',
          lessonId: 'm9-l2',
          lessonLabel: '9.2 Key Interfaces',
          svg: <InterfaceMatrix style={{ maxWidth: '120px' }} />,
        },
        {
          name: 'V-Model Lifecycle',
          desc: 'Left: requirements decompose. Bottom: implementation. Right: verification at each level. Horizontal dashed lines show traceability between left and right.',
          lessonId: 'm9-l3',
          lessonLabel: '9.3 Systems Engineering',
          svg: <VModelLifecycle style={{ maxWidth: '160px' }} />,
        },
      ],
    },
  ];

  return (
    <div className="page-inner page-enter">
      <div className="lexicon-header">
        <div className="module-number">Reference</div>
        <h2>Symbol Lexicon</h2>
        <p className="lexicon-intro">
          Every schematic symbol used across the curriculum, organised by discipline.
          Each symbol links back to the lesson where it is introduced and explained in full context.
        </p>
      </div>

      <div className="lexicon-toc">
        {groups.map(g => (
          <span
            key={g.moduleId}
            className="lexicon-toc-chip"
            onClick={() => {
              const el = document.getElementById(`lex-${g.moduleId}`);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            {g.module}
          </span>
        ))}
      </div>

      {groups.map(group => (
        <section key={group.moduleId} id={`lex-${group.moduleId}`} className="lexicon-group">
          <h3 className="lexicon-group-title">
            <span className="lexicon-group-num">{group.moduleId.slice(1)}</span>
            {group.module}
          </h3>

          <div className="lexicon-grid">
            {group.symbols.map((sym, i) => (
              <div key={i} className="lexicon-card">
                <div className="lexicon-card-symbol">
                  {sym.svg}
                </div>
                <div className="lexicon-card-body">
                  <div className="lexicon-card-name">{sym.name}</div>
                  <div className="lexicon-card-desc">{sym.desc}</div>
                  <div
                    className="lexicon-card-link"
                    onClick={() => goTo(sym.lessonId)}
                  >
                    {sym.lessonLabel} →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="lexicon-footer">
        <p>
          All symbols use simplified abstract geometry — rectangles, lines, and circles — designed for
          unambiguous correctness rather than physical detail. They follow the schematic conventions
          introduced in{' '}
          <span className="connection-link" onClick={() => goTo('m1-l4')}>
            Lesson 1.4: Track Representations
          </span>.
        </p>
      </div>
    </div>
  );
}
