import "./workflow.css";
import code from "../../../images/computerGradient.png";
import design from "../../../images/webDesignGradient.png";
import price from "../../../images/lowPriceGradient.png";

const Workflow = () => {
  return (
    <div className="workflow-bg">
      <h1 className="our-workflow">This is our workflow</h1>
      <h4 className="workflow-sub">What do we offer?</h4>

      <table id="tableAlign">
        <div className="flexTable">
          <table className="tableCol">
            <tr className="table-header">
              <td>
                <img src={code} alt="code" height="50px" />
                <br />
                We can code
              </td>
            </tr>
            <tr>
              <td className="text-info">
                <p>
                  All of our custom products are built from scratch, giving the
                  customer full freedom in the structure and design of their
                  desired product. We achieve this by applying best practices in
                  software development like automated testing, short cycled
                  feedback loops with our customers, and fast, automated
                  deployment of our products.
                </p>
              </td>
            </tr>
          </table>
          <table className="tableCol">
            <tr className="table-header">
              <td>
                <img src={design} alt="design" height="50px" />
                <br />
                We can design
              </td>
            </tr>
            <tr>
              <td className="text-info">
                <p>
                  Our designers make use of collablorative workspaces to get
                  their creative juices flowing as a team. During the design
                  phase of the project we will emphasise involving the customer
                  as much as possible
                </p>
              </td>
            </tr>
          </table>
          <table className="tableCol">
            <tr className="table-header">
              <td>
                <img src={price} alt="price" height="50px" />
                <br />
                Reasonable pricing
              </td>
            </tr>
            <tr>
              <td className="text-info">
                <p>
                  We offer some of the best rates in the industry, get a quote
                  today!
                </p>
              </td>
            </tr>
          </table>
        </div>
      </table>
    </div>
  );
};

export default Workflow;
