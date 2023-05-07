
export default function Highlights() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h2>Arts and crafts in Sri Lanka</h2>
          <p>These traditional crafts are often closely tied to specific regions in Sri Lanka, 
            and visiting these areas can offer a fascinating insight into the country's cultural heritage.</p>
          <div style={{ margin: 30}}>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Traditional crafts</th>
                        <th>Brief description</th>
                        <th>Famous areas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Batik</td>
                        <td>A traditional method of printing designs onto fabric using wax and dye.</td>
                        <td>Ambalangoda</td>
                    </tr>
                    <tr>
                        <td>Pottery</td>
                        <td>Sri Lankan pottery is known for its intricate designs and unique shapes, with each region having its own distinct style.</td>
                        <td>Kandy</td>
                    </tr>
                    <tr>
                        <td>Wood carving</td>
                        <td>Skilled artisans create beautiful carvings from various types of wood, including ebony, teak, and sandalwood.</td>
                        <td>Galle</td>
                    </tr>
                    <tr>
                        <td>Jewelry making</td>
                        <td>Sri Lankan jewelry is often made from gold and silver, with intricate designs inspired by nature and traditional motifs.</td>
                        <td>Colombo</td>
                    </tr>
                    <tr>
                        <td>Weaving</td>
                        <td>Traditional handloom weaving is still practiced in many parts of Sri Lanka, producing beautiful textiles and tapestries.</td>
                        <td>Kandy, Matale, Gampaha</td>
                    </tr>
                    <tr>
                        <td>Mask making</td>
                        <td>Sri Lankan masks are an important part of the country's traditional culture and are used in various rituals and performances.</td>
                        <td>Ambalangoda </td>
                    </tr>
                    <tr>
                        <td>Brass and copper work</td>
                        <td>Skilled artisans create intricate designs on brass and copper vessels, which are used for cooking, drinking, and storing food.</td>
                        <td>Kurunegala, Kandy</td>
                    </tr>
                    <tr>
                        <td>Lace making</td>
                        <td>A delicate craft that involves weaving threads together to create intricate lace designs.</td>
                        <td>Galle</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }