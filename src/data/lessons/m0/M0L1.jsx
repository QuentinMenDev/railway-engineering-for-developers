import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M0L1({ goTo }) {
  return (
    <>
      <h3>The Physics of Steel on Steel</h3>
      <p>
        Railways work because of a single, elegant physical fact: a steel wheel rolling on a
        steel rail produces extraordinarily low friction. The rolling resistance coefficient is
        just <strong>0.001 to 0.003</strong> (0.1–0.3%), compared with 0.01–0.02 (1–2%) for
        rubber tyres on asphalt. This order-of-magnitude advantage means a single locomotive
        can haul a hundred wagons — something no road vehicle could dream of.
      </p>
      <p>
        This efficiency translates directly into energy consumption. Rail freight uses roughly
        <strong>5–10 times less energy per tonne-kilometre</strong> than road haulage. For
        passenger transport, rail is 3–5 times more efficient than private cars and dramatically
        better than domestic aviation for comparable distances.
      </p>

      <h3>The Adhesion Trade-Off</h3>
      <p>
        Low rolling resistance comes at a cost: the coefficient of friction between steel wheel
        and steel rail is only <strong>0.15–0.35</strong>, depending on conditions. On a wet,
        leaf-contaminated autumn rail, it can plummet to 0.05. This places hard limits on
        what trains can do:
      </p>
      <ul>
        <li><strong>Gradient limits:</strong> Mainline railways are typically limited to 1–2.5% gradients. High-speed lines seldom exceed 3.5%. Anything steeper requires rack railways or cable haulage.</li>
        <li><strong>Braking distance:</strong> A train travelling at 200 km/h needs approximately <strong>3 km to stop</strong> — versus around 150 m for a car at the same speed. This single fact drives the entire signalling discipline.</li>
        <li><strong>Traction limits:</strong> Locomotives can only apply as much tractive effort as adhesion allows before wheels spin. Modern traction control systems manage this continuously.</li>
      </ul>

      <Callout type="analogy">
        Think of adhesion as an <strong>API rate limit</strong>. You can push data through the
        connection very efficiently (low rolling resistance), but there is a hard ceiling on how
        much force you can apply at any instant (the adhesion limit). Exceed the rate limit and
        everything degrades — wheels spin, braking fails, and the system enters an unstable state.
        The entire railway system is engineered around this constraint, just as a well-designed
        application is architected around its rate limits.
      </Callout>

      <h3>Continuously Welded Rail (CWR)</h3>
      <p>
        Steel expands and contracts with temperature. A rail that is 1 km long will change
        length by roughly 11.5 mm for every 1°C change in temperature. In jointed track (with
        gaps every 18–20 m), this is accommodated by expansion joints. But joints are noisy,
        cause wear, and limit speed.
      </p>
      <p>
        <strong>CWR</strong> eliminates joints by welding rails into continuous strings hundreds
        of metres (or kilometres) long. The rail is laid at a <em>stress-free temperature</em>
        (typically 21–27°C in temperate climates). Below this temperature, the rail is in
        tension — risking fracture. Above it, the rail is in compression — risking buckling.
        Managing this thermal stress is one of the key maintenance challenges on any railway.
      </p>

      <h3>Why This Matters for Every Other Discipline</h3>
      <p>
        Every subsystem in railway engineering exists because of these fundamental physics.
        Signalling exists because trains cannot stop quickly. Track geometry is constrained
        because adhesion limits the forces you can apply. Electrification voltage choices are
        influenced by the energy efficiency advantage that makes rail worthwhile. Understanding
        these foundations will make every subsequent lesson click into place.
      </p>

      <Connections goTo={goTo} items={[
        { target: 'm1-l1', label: 'Track Structure', desc: 'How the physical layers are built to exploit low rolling resistance.' },
        { target: 'm1-l2', label: 'Track Geometry', desc: 'How gradient and curvature limits flow from adhesion constraints.' },
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'Why signalling exists — braking distance demands advance warning.' },
      ]} />
    </>
  );
}
