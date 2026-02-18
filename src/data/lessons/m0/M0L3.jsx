import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M0L3({ goTo }) {
  return (
    <>
      <h3>Mapping Software to Railways</h3>
      <p>
        If you come from a software engineering background, you already have powerful mental
        models. The trick is mapping them correctly. Here is a reference table you can return
        to throughout this course:
      </p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Software Concept</th><th>Railway Equivalent</th><th>Why</th></tr>
          </thead>
          <tbody>
            <tr><td>Infrastructure / IaC</td><td>Earthworks &amp; civil</td><td>The foundation everything runs on; hard to change</td></tr>
            <tr><td>Network / transport</td><td>Track</td><td>Physical medium for movement of data/trains</td></tr>
            <tr><td>Protocol / flow control</td><td>Signalling</td><td>Rules that prevent collisions and manage capacity</td></tr>
            <tr><td>Application logic</td><td>Operations &amp; timetabling</td><td>What actually gets done; the business value</td></tr>
            <tr><td>API contracts / schemas</td><td>Loading gauge</td><td>Interface specification that must match on both sides</td></tr>
            <tr><td>Monitoring / observability</td><td>Telecoms &amp; SCADA</td><td>Knowing what is happening in real-time</td></tr>
            <tr><td>Hardware / compute</td><td>Rolling stock</td><td>The physical assets that do the work</td></tr>
            <tr><td>Power supply / electricity</td><td>Electrification</td><td>The energy source that makes everything move</td></tr>
          </tbody>
        </table>
      </div>

      <h3>The OSI Model Analogy</h3>
      <p>
        The OSI networking model maps remarkably well to railway engineering layers. The
        physical layer (Layer 1) is the rail and track bed. The data link layer (Layer 2) is
        the train detection system — track circuits and axle counters that detect presence.
        The network layer (Layer 3) is the interlocking and route-setting logic. The transport
        layer (Layer 4) is the block system ensuring safe spacing. And the application layers
        (5–7) are the timetable, operational rules, and passenger information services.
      </p>

      <h3>Gauge as Interface Specification</h3>
      <p>
        Track gauge — the distance between the inner faces of the rails — is the railway
        world's most fundamental API contract. Standard gauge is <strong>1,435 mm</strong>,
        used by roughly 60% of the world's railways. But India uses 1,676 mm, Russia and
        Finland use 1,520 mm, and many countries have metre-gauge or cape-gauge (1,067 mm)
        networks. A train built for one gauge physically cannot run on another.
      </p>

      <Callout type="analogy">
        Gauge standardisation is <strong>dependency injection</strong>. When George Stephenson's
        4 ft 8½ in gauge won the 19th-century "gauge war" against Brunel's 7 ft broad gauge,
        it was like the industry agreeing on a single interface. Every component — wheels,
        track, points, maintenance equipment — could be built to one specification and swapped
        freely. Brunel's broad gauge was arguably technically superior, but the network effects
        of standardisation won. This is the same dynamic that plays out with USB, HTTP, or any
        dominant API standard.
      </Callout>

      <h3>Recommended Resources</h3>
      <ul>
        <li><strong>Books:</strong> "The Railway: British Track Since 1804" (Lewis), "Railway Engineering" (Mundrey), "Modern Railway Track" (Esveld)</li>
        <li><strong>YouTube:</strong> Geoff Marshall, Jago Hazzard, The Tim Traveller, Gareth Dennis</li>
        <li><strong>Games &amp; simulations:</strong> OpenTTD, Train Simulator, SimSig (free signalling simulator used in industry training)</li>
        <li><strong>Standards bodies:</strong> RSSB (UK), ERA (EU), UIC (international)</li>
      </ul>

      <Connections goTo={goTo} items={[
        { target: 'm0-l2', label: 'The Eight Subsystems', desc: 'The subsystem map this mental model organises.' },
        { target: 'm3-l3', label: 'Stations & Clearances', desc: 'Loading gauge as API schema in detail.' },
        { target: 'm1-l2', label: 'Track Geometry', desc: 'Gauge specification explored in depth.' },
      ]} />
    </>
  );
}
