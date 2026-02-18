import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M2L2({ goTo }) {
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

export const quiz = [
  { text: 'What is "mass haul balance" in earthworks design?', options: ['Weighing all trains on the line', 'Balancing excavation volume from cuttings with fill needed for embankments', 'Distributing weight across a bridge', 'Calibrating track scales'], correct: 1, explanation: 'Mass haul balance minimises waste by matching cutting material to embankment needs. A mass haul diagram optimises material movement.' },
  { text: 'What is the biggest long-term risk with railway embankments?', options: ['They block the view', 'Settlement and slope instability under repeated train loading', 'They are expensive to build', 'They attract wildlife'], correct: 1, explanation: 'Embankments can settle and slopes can become unstable due to water, vegetation loss, or climate effects, causing track geometry faults.' },
  { text: 'What is the Proctor test used for?', options: ['Testing rail steel quality', 'Determining optimum moisture content for soil compaction', 'Measuring bridge deflection', 'Checking signal cable resistance'], correct: 1, explanation: 'The Proctor test finds the moisture content at which maximum compaction density is achieved — critical for durable embankments.' },
];
