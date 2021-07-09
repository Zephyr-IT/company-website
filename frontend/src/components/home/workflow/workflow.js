import "./workflow.css";
import code from "../../../images/computerGradient.png";
import design from "../../../images/webDesignGradient.png";
import price from "../../../images/lowPriceGradient.png";

const Workflow = () => {
  return (
    <div className="workflow-bg">
      <h1 className="our-workflow">This is our workflow</h1>
      <h4 className="workflow-sub">What do we offer?</h4>

      <table>
        <tr>
          <th className="table-header">
            <img src={code} alt="code" height="50px" />
            <br />
            We can code
          </th>
          <th className="table-header">
            <img src={design} alt="design" height="50px" />
            <br />
            We can design
          </th>
          <th className="table-header">
            <img src={price} alt="price" height="50px" />
            <br />
            Reasonable pricing
          </th>
        </tr>
        <tr>
          <td className="text-info">
            <p>test</p>
          </td>
          <td className="text-info">test</td>
          <td className="text-info">test</td>
        </tr>
      </table>
    </div>
  );
};

export default Workflow;
