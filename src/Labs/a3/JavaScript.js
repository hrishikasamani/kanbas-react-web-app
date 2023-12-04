import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Destructing from "./Destructing";
import ES5Functions from "./ES5Functions";
import FunctionDestructing from "./FunctionDestructing";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturns from "./ImpliedReturns";
import ImpliedReturn from "./ImpliedReturns";
import Spread from "./Spread";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithArrays from "./WorkingWithArrays";
function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables />
          <IfElse/>
          <TernaryOperator/>
          <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturns/>
          <FunctionParenthesisAndParameters/>
          <WorkingWithArrays/>
          <TemplateLiterals/>
          <House/>
          <Spread/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript