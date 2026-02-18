import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M0L2({ goTo }) {
  return (
    <>
      <h3>A Railway as a System of Systems</h3>
      <p>
        A railway is not a single thing — it is eight interlocking subsystems, each a deep
        engineering discipline in its own right. No single team owns the whole railway;
        understanding the boundaries, interfaces, and responsibilities between subsystems is
        essential for anyone working in the industry.
      </p>

      <h3>The Eight Subsystems</h3>
      <ol>
        <li>
          <strong>Track (Permanent Way)</strong> — The rails, sleepers, ballast, and fastenings
          that trains run on. Owned and maintained by the infrastructure manager (e.g. Network
          Rail in the UK, DB Netz in Germany). Example: UIC 60 rail on concrete sleepers, the
          workhorse of European mainlines.
        </li>
        <li>
          <strong>Civil Engineering &amp; Geotechnics</strong> — The earthworks beneath the
          track: cuttings, embankments, drainage, and ground stabilisation. Often the oldest
          parts of the railway (Victorian-era in the UK). Example: the embankments of the
          London–Birmingham mainline, built in the 1830s and still in daily use.
        </li>
        <li>
          <strong>Structures</strong> — Bridges, tunnels, retaining walls, and stations. The UK
          alone has over 30,000 bridges and 650 tunnels. Example: the Forth Bridge, an iconic
          cantilever structure carrying rail traffic since 1890.
        </li>
        <li>
          <strong>Signalling</strong> — The systems that keep trains safely separated: signals,
          interlocking, train detection, and train protection. Safety-critical (SIL 4). Example:
          the Solid State Interlocking (SSI) controlling a major junction.
        </li>
        <li>
          <strong>Electrification</strong> — The power supply infrastructure: substations,
          overhead line equipment (OLE / catenary), third rail, or conductor rail. Example:
          25 kV AC overhead electrification on the West Coast Main Line.
        </li>
        <li>
          <strong>Rolling Stock</strong> — The trains themselves: locomotives, coaches, multiple
          units, freight wagons. Owned by train operating companies (TOCs) or leasing companies
          (ROSCOs). Example: a Class 800 bi-mode intercity train.
        </li>
        <li>
          <strong>Telecommunications</strong> — The communications backbone: fibre optic
          networks, GSM-R radio, SCADA, CCTV, and passenger information systems. Example:
          the Fixed Telecom Network (FTN) that carries all operational data.
        </li>
        <li>
          <strong>Operations &amp; Timetabling</strong> — How trains are scheduled, dispatched,
          and managed in real-time. Covers timetable planning, possession planning, performance
          analysis, and incident management. Example: the integrated timetable planning process
          for a major timetable change.
        </li>
      </ol>

      <h3>Infrastructure Manager vs Train Operating Company</h3>
      <p>
        Most modern railways separate the <strong>infrastructure manager</strong> (who owns and
        maintains track, signalling, structures, and electrification) from the <strong>train
        operating companies</strong> (who run trains and serve passengers or freight customers).
        This separation — mandated by EU directives in Europe — creates clear interfaces but
        also introduces coordination challenges, particularly around timetabling and access.
      </p>

      <Callout type="analogy">
        Think of the eight subsystems as <strong>microservices with bounded contexts</strong>.
        Each subsystem has its own domain, its own experts, and its own lifecycle. The most
        dangerous bugs are always at the <em>interfaces</em> between services — where one
        team's assumptions clash with another's. A signalling upgrade that doesn't account for
        a civil speed restriction, or an electrification project that doesn't consider bridge
        clearances, is the railway equivalent of an API contract violation.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm0-l3', label: "Developer's Mental Model", desc: 'Map these eight subsystems to software equivalents.' },
        { target: 'm1-l1', label: 'Track Structure', desc: 'Deep dive into Subsystem #1.' },
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'Deep dive into Subsystem #4.' },
      ]} />
    </>
  );
}

export const quiz = [
  { text: 'How many key subsystems make up a railway?', options: ['4', '6', '8', '12'], correct: 2, explanation: 'A railway has 8 key subsystems: Track, Civil/Geotechnical, Structures, Signalling, Electrification, Rolling Stock, Telecommunications, and Operations.' },
  { text: 'Which discipline is often described as the "operating system" of the railway?', options: ['Permanent Way', 'Operations & Timetabling', 'Signalling & Train Control', 'Telecommunications'], correct: 2, explanation: 'Signalling functions like the OS — managing resource allocation (track sections), enforcing safety rules, and controlling access (route setting).' },
  { text: 'In modern railways, who typically owns and maintains the infrastructure?', options: ['Train operating companies', 'The infrastructure manager (e.g. Network Rail)', 'Rolling stock leasing companies', 'Local government councils'], correct: 1, explanation: 'Most modern railways separate the infrastructure manager (track, signalling, stations) from train operating companies. In the UK this is Network Rail.' },
];
