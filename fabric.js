/**
 * @source https://github.com/OfficeDev/office-ui-fabric-react/wiki/Server-side-rendering-and-browserless-testing#server-side-rendering
 */
import { configureLoadStyles } from "@microsoft/load-themed-styles";

export default () => {
  // Store registered styles in a variable used later for injection.
  let _allStyles = "";

  // Push styles into variables for injecting later.
  configureLoadStyles(styles => {
    _allStyles += styles;
  });

  return _allStyles;
};
