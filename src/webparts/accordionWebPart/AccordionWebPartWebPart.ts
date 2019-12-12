import {
  PropertyFieldSwatchColorPicker,
} from "@pnp/spfx-property-controls/lib/PropertyFieldSwatchColorPicker";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";
import "jqueryui";
import styles from "./AccordionWebPartWebPart.module.scss";
import * as strings from "accordionWebPartWebPartStrings";

export interface IAccordionWebPartProps {
  description: string;
  section1: string;
  section2: string;
  section3: string;
  section4: string;
  section5: string;
  heading1: string;
  body1: string;
  body2: string;
  body3: string;
  body4: string;
  body5: string;
  site: string;
  test: string;
  // below is for the color picker Pg 1
  color: string;
  rowBackgroundColor: string;
  rowFontColor: string;
  bodyBackgroundColor: string;
  bodyFontColor: string;
  // below is for the color picker Pg 2
  rowBackgroundColor2: string;
  rowFontColor2: string;
  bodyBackgroundColor2: string;
  bodyFontColor2: string;
  // below is for the color picker Pg3
  rowBackgroundColor3: string;
  rowFontColor3: string;
  bodyBackgroundColor3: string;
  bodyFontColor3: string;
  // below is for the color picker Pg4
  rowBackgroundColor4: string;
  rowFontColor4: string;
  bodyBackgroundColor4: string;
  bodyFontColor4: string;
  // below is for the color picker Pg5
  rowBackgroundColor5: string;
  rowFontColor5: string;
  bodyBackgroundColor5: string;
  bodyFontColor5: string;
}

export interface IPropertyPaneDropdownProps {
  label: string;
  options: string;
}
export default class accordionWebPartWebPart extends BaseClientSideWebPart<
  IAccordionWebPartProps
> {
  // public addRowPP: (value: any) => any;
  public clicked;

  public constructor() {
    super();
  }
  public render(): void {
    //far fa-minus-square <--ref for later. delete when done.
    this.domElement.innerHTML = `<div class="${styles.container} ms-Fabric">
<span><h1>${escape(this.properties.heading1)}</h1><button class="${
      styles.openAll
    }" id="${styles.openAll}"></button></span>

<button id="btn1" class="${styles.accordion}" style="background-color:${
      this.properties.rowBackgroundColor
    };" ><span style="color:${this.properties.rowFontColor}">${escape(
      this.properties.section1
    )}</span><span id="icon" class="${styles.plus}" style="color:${
      this.properties.rowFontColor
    };"></span></button>
<div id="panel1" class="${styles.panel}"style="background-color:${
      this.properties.bodyBackgroundColor
    };">
  <p><div style="color:${this.properties.bodyFontColor}">${escape(
      this.properties.body1
    )}</div></p>
  </div>
<hr class="${styles.linebreak}">
   <button id="btn2" class="${styles.accordion}" style="background-color:${
      this.properties.rowBackgroundColor2
    };" ><span style="color:${this.properties.rowFontColor2}">${escape(
      this.properties.section2
    )}</span><span id="icon2" class="${styles.plus}" style="color:${
      this.properties.rowFontColor2
    };"></span></button>
 <div id="panel2" class="${styles.panel}"style="background-color:${
      this.properties.bodyBackgroundColor2
    };">
  <p><div style="color:${this.properties.bodyFontColor2}">${escape(
      this.properties.body2
    )}</div></p>
   </div>
   <hr class="${styles.linebreak}">
   <button id="btn3" class="${styles.accordion}" style="background-color:${
      this.properties.rowBackgroundColor3
    };" ><span style="color:${this.properties.rowFontColor3}">${escape(
      this.properties.section3
    )}</span><span id="icon3" class="${styles.plus}" style="color:${
      this.properties.rowFontColor3
    };"></span></button>
 <div id="panel3" class="${styles.panel}"style="background-color:${
      this.properties.bodyBackgroundColor3
    };">
  <p><div style="color:${this.properties.bodyFontColor3}">${escape(
      this.properties.body3
    )}</div></p>
   </div>
   <hr class="${styles.linebreak}">
   <button id="btn4" class="${styles.accordion}" style="background-color:${
      this.properties.rowBackgroundColor4
    };" ><span style="color:${this.properties.rowFontColor4}">${escape(
      this.properties.section4
    )}</span><span id="icon4" class="${styles.plus}" style="color:${
      this.properties.rowFontColor4
    };"></span></button>
 <div id="panel4" class="${styles.panel}"style="background-color:${
      this.properties.bodyBackgroundColor4
    };">
  <p><div style="color:${this.properties.bodyFontColor4}">${escape(
      this.properties.body4
    )}</div></p>
   </div>
   <hr class="${styles.linebreak}">
   <button id="btn5" class="${styles.accordion}" style="background-color:${
      this.properties.rowBackgroundColor5
    };" ><span style="color:${this.properties.rowFontColor5}">${escape(
      this.properties.section5
    )}</span><span id="icon5" class="${styles.plus}" style="color:${
      this.properties.rowFontColor5
    };"></span></button>
 <div id="panel5" class="${styles.panel}"style="background-color:${
      this.properties.bodyBackgroundColor5
    };">
  <p><div style="color:${this.properties.bodyFontColor5}">${escape(
      this.properties.body5
    )}</div></p>
   </div>
  </div>
`;

    // This is the logic that makes the accordion expand and contract
    // var acc = document.getElementById("btn1");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var i;
    var panel = document.getElementsByClassName(styles.panel);
    var panel1 = document.getElementById("panel1");
    var panel2 = document.getElementById("panel2");
    var panel3 = document.getElementById("panel3");
    var panel4 = document.getElementById("panel4");
    var panel5 = document.getElementById("panel5");
    var plus = document.getElementById("icon");
    var plus2 = document.getElementById("icon2");
    var plus3 = document.getElementById("icon3");
    var plus4 = document.getElementById("icon4");
    var plus5 = document.getElementById("icon5");
    var openAll = document.getElementById(styles.openAll);
    plus.textContent = "+";
    plus2.textContent = "+";
    plus3.textContent = "+";
    plus4.textContent = "+";
    plus5.textContent = "+";
    openAll.textContent = "Open/Close All";


    btn1.addEventListener("click", function() {
      this.classList.toggle("active");

      if (panel1.style.display === "block") {
        panel1.style.display = "none";
        // panel1.style.maxHeight = panel1.scrollHeight + "px";
        plus.textContent = "+";
        plus.style.transform = "rotate(-180deg)";
      } else {
        panel1.style.display = "block";
        // panel1.style.maxHeight = panel1.scrollHeight + "px";
        panel2.style.display = "none";
        panel3.style.display = "none";
        panel4.style.display = "none";
        panel5.style.display = "none";
        plus.textContent = "-";
        plus.style.transform = "rotate(180deg)";
        plus2.textContent = "+";
        plus3.textContent = "+";
        plus4.textContent = "+";
        plus5.textContent = "+";
        plus2.style.transform = "rotate(-180deg)";
        plus3.style.transform = "rotate(-180deg)";
        plus4.style.transform = "rotate(-180deg)";
        plus5.style.transform = "rotate(-180deg)";
      }
    });

    btn2.addEventListener("click", function() {
      this.classList.toggle("active");

      if (panel2.style.display === "block") {
        panel2.style.display = "none";
        plus2.textContent = "+";
        plus2.style.transform = "rotate(-180deg)";
      } else {
        panel2.style.display = "block";
        panel1.style.display = "none";
        panel3.style.display = "none";
        panel4.style.display = "none";
        panel5.style.display = "none";
        plus.textContent = "+";
        plus3.textContent = "+";
        plus4.textContent = "+";
        plus5.textContent = "+";
        plus.style.transform = "rotate(-180deg)";
        plus3.style.transform = "rotate(-180deg)";
        plus4.style.transform = "rotate(-180deg)";
        plus5.style.transform = "rotate(-180deg)";
        plus2.textContent = "-";
        plus2.style.transform = "rotate(180deg)";
      }
    });

    btn3.addEventListener("click", function() {
      this.classList.toggle("active");

      if (panel3.style.display === "block") {
        panel3.style.display = "none";
        plus3.textContent = "+";
        plus3.style.transform = "rotate(-180deg)";
      } else {
        panel3.style.display = "block";
        panel1.style.display = "none";
        panel2.style.display = "none";
        panel4.style.display = "none";
        panel5.style.display = "none";
        plus.textContent = "+";
        plus2.textContent = "+";
        plus4.textContent = "+";
        plus5.textContent = "+";
        plus.style.transform = "rotate(-180deg)";
        plus2.style.transform = "rotate(-180deg)";
        plus4.style.transform = "rotate(-180deg)";
        plus5.style.transform = "rotate(-180deg)";
        plus3.textContent = "-";
        plus3.style.transform = "rotate(180deg)";
      }
    });

    btn4.addEventListener("click", function() {
      this.classList.toggle("active");

      if (panel4.style.display === "block") {
        panel4.style.display = "none";
        plus4.textContent = "+";
        plus4.style.transform = "rotate(-180deg)";
      } else {
        panel4.style.display = "block";
        panel1.style.display = "none";
        panel2.style.display = "none";
        panel3.style.display = "none";
        panel5.style.display = "none";
        plus.textContent = "+";
        plus2.textContent = "+";
        plus3.textContent = "+";
        plus5.textContent = "+";
        plus.style.transform = "rotate(-180deg)";
        plus2.style.transform = "rotate(-180deg)";
        plus3.style.transform = "rotate(-180deg)";
        plus5.style.transform = "rotate(-180deg)";
        plus4.textContent = "-";
        plus4.style.transform = "rotate(180deg)";
      }
    });

    btn5.addEventListener("click", function() {
      this.classList.toggle("active");

      if (panel5.style.display === "block") {
        panel5.style.display = "none";
        plus5.textContent = "+";
        plus5.style.transform = "rotate(-180deg)";
      } else {
        panel5.style.display = "block";
        panel1.style.display = "none";
        panel2.style.display = "none";
        panel3.style.display = "none";
        panel4.style.display = "none";
        plus.textContent = "+";
        plus2.textContent = "+";
        plus3.textContent = "+";
        plus4.textContent = "+";
        plus.style.transform = "rotate(-180deg)";
        plus2.style.transform = "rotate(-180deg)";
        plus3.style.transform = "rotate(-180deg)";
        plus4.style.transform = "rotate(-180deg)";
        plus5.textContent = "-";
        plus5.style.transform = "rotate(180deg)";
      }
    });

    openAll.addEventListener("click", function() {
      this.classList.toggle("active");
      if (
        panel1.style.display === "block" ||
        panel2.style.display === "block" ||
        panel4.style.display === "block" ||
        panel4.style.display === "block" ||
        panel5.style.display === "block"
      ) {
        panel1.style.display = "none";
        plus.textContent = "+";
        plus.style.transform = "rotate(-180deg)";
        panel2.style.display = "none";
        plus2.textContent = "+";
        plus2.style.transform = "rotate(-180deg)";
        //
        panel3.style.display = "none";
        plus3.textContent = "+";
        plus3.style.transform = "rotate(-180deg)";
        //
        panel4.style.display = "none";
        plus4.textContent = "+";
        plus4.style.transform = "rotate(-180deg)";
        //
        panel5.style.display = "none";
        plus5.textContent = "+";
        plus5.style.transform = "rotate(-180deg)";
      } else {
        panel1.style.display = "block";
        plus.textContent = "-";
        plus.style.transform = "rotate(180deg)";
        panel2.style.display = "block";
        plus2.textContent = "-";
        plus2.style.transform = "rotate(180deg)";
        //
        panel3.style.display = "block";
        plus3.textContent = "-";
        plus3.style.transform = "rotate(180deg)";
        //
        panel4.style.display = "block";
        plus4.textContent = "-";
        plus4.style.transform = "rotate(180deg)";
        //
        panel5.style.display = "block";
        plus5.textContent = "-";
        plus5.style.transform = "rotate(180deg)";
      }
    });
  }
  //////////////////////  Validation message  ///////////////////////////////////
  private textBoxErrorMethod(value: string): string {
    if (value.length > 50) {
      return "Name must be less than 50 characters!";
    } else {
      return "";
    }
  }

  // below is the configuration for the property pane *** PAGE 1-5 ****
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("heading1", {
                  label: "Heading 1",
                  multiline: false,
                  onGetErrorMessage: this.textBoxErrorMethod
                }),
                PropertyPaneTextField("section1", {
                  label: "Section 1",
                  onGetErrorMessage: this.textBoxErrorMethod
                }),
                PropertyFieldSwatchColorPicker("rowBackgroundColor", {
                  label: "Row Background Color",
                  selectedColor: this.properties.rowBackgroundColor,
                  colors: [
                    { color: "#0586ce", label: "Orient" },
                    { color: "#004a7c", label: "Denim" },
                    { color: "#00273d", label: "Blue-Charcoal" },
                    { color: "#e4f6fd", label: "Foam" },
                    { color: "#00adef", label: "Cerulean" },
                    { color: "#2b566b", label: "Casal" },
                    { color: "#ffd097", label: "Peach-orange" },
                    { color: "#f38a00", label: "Tangerine" },
                    { color: "#834a07", label: "Rusty-nail" },
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyFieldSwatchColorPicker("rowFontColor", {
                  label: "Row Font Color",
                  selectedColor: this.properties.rowBackgroundColor,
                  colors: [
                    { color: "#c7c7c7" , label: "Silver"},
                    { color: "#545454" , label: "Emperor"},
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }

                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyPaneTextField("body1", {
                  label: "Body 1",
                  multiline: true,
                  rows: 10
                }),
                PropertyFieldSwatchColorPicker("bodyBackgroundColor", {
                  label: "Body Background Color",
                  selectedColor: this.properties.bodyBackgroundColor,
                  colors: [
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#0586ce", label: "Orient" },
                    { color: "#004a7c", label: "Denim" },
                    { color: "#00273d", label: "Blue-Charcoal" },
                    { color: "#e4f6fd", label: "Foam" },
                    { color: "#00adef", label: "Cerulean" },
                    { color: "#2b566b", label: "Casal" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }

                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyFieldSwatchColorPicker("bodyFontColor", {
                  label: "Body Font Color",
                  selectedColor: this.properties.bodyFontColor,
                  colors: [
                    { color: "#c7c7c7" , label: "Silver"},
                    { color: "#545454" , label: "Emperor"},
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                })
              ]
            }
          ]
        },
        {
          //////// ******* THIS IS THE CONFIGURATION OF PROPERTY PANE PAGE 2 *******
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("section2", {
                  label: "Section 2",
                  onGetErrorMessage: this.textBoxErrorMethod
                }),
                PropertyFieldSwatchColorPicker("rowBackgroundColor2", {
                  label: "Row Background Color",
                  selectedColor: this.properties.rowBackgroundColor2,
                  colors: [
                    { color: "#0586ce", label: "Orient" },
                    { color: "#004a7c", label: "Denim" },
                    { color: "#00273d", label: "Blue-Charcoal" },
                    { color: "#e4f6fd", label: "Foam" },
                    { color: "#00adef", label: "Cerulean" },
                    { color: "#2b566b", label: "Casal" },
                    { color: "#ffd097", label: "Peach-orange" },
                    { color: "#f38a00", label: "Tangerine" },
                    { color: "#834a07", label: "Rusty-nail" },
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyFieldSwatchColorPicker("rowFontColor2", {
                  label: "Row Font Color",
                  selectedColor: this.properties.rowBackgroundColor2,
                  colors: [
                    { color: "#c7c7c7" , label: "Silver"},
                    { color: "#545454" , label: "Emperor"},
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyPaneTextField("body2", {
                  label: "Body 2",
                  multiline: true,
                  rows: 10
                }),
                PropertyFieldSwatchColorPicker("bodyBackgroundColor2", {
                  label: "Body Background Color",
                  selectedColor: this.properties.bodyBackgroundColor2,
                  colors: [
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#0586ce", label: "Orient" },
                    { color: "#004a7c", label: "Denim" },
                    { color: "#00273d", label: "Blue-Charcoal" },
                    { color: "#e4f6fd", label: "Foam" },
                    { color: "#00adef", label: "Cerulean" },
                    { color: "#2b566b", label: "Casal" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyFieldSwatchColorPicker("bodyFontColor2", {
                  label: "Body Font Color",
                  selectedColor: this.properties.bodyFontColor2,
                  colors: [
                    { color: "#c7c7c7" , label: "Silver"},
                    { color: "#545454" , label: "Emperor"},
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                })
              ]
            }
          ]
        },
        {
          //////// ******* THIS IS THE CONFIGURATION OF PROPERTY PANE PAGE 3 *******
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("section3", {
                  label: "Section 3",
                  onGetErrorMessage: this.textBoxErrorMethod
                }),
                PropertyFieldSwatchColorPicker("rowBackgroundColor3", {
                  label: "Row Background Color",
                  selectedColor: this.properties.rowBackgroundColor3,
                  colors: [
                    { color: "#0586ce", label: "Orient" },
                    { color: "#004a7c", label: "Denim" },
                    { color: "#00273d", label: "Blue-Charcoal" },
                    { color: "#e4f6fd", label: "Foam" },
                    { color: "#00adef", label: "Cerulean" },
                    { color: "#2b566b", label: "Casal" },
                    { color: "#ffd097", label: "Peach-orange" },
                    { color: "#f38a00", label: "Tangerine" },
                    { color: "#834a07", label: "Rusty-nail" },
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyFieldSwatchColorPicker("rowFontColor3", {
                  label: "Row Font Color",
                  selectedColor: this.properties.rowBackgroundColor3,
                  colors: [
                    { color: "#c7c7c7" , label: "Silver"},
                    { color: "#545454" , label: "Emperor"},
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyPaneTextField("body3", {
                  label: "Body 3",
                  multiline: true,
                  rows: 10
                }),
                PropertyFieldSwatchColorPicker("bodyBackgroundColor3", {
                  label: "Body Background Color",
                  selectedColor: this.properties.bodyBackgroundColor3,
                  colors: [
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#0586ce", label: "Orient" },
                    { color: "#004a7c", label: "Denim" },
                    { color: "#00273d", label: "Blue-Charcoal" },
                    { color: "#e4f6fd", label: "Foam" },
                    { color: "#00adef", label: "Cerulean" },
                    { color: "#2b566b", label: "Casal" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyFieldSwatchColorPicker("bodyFontColor3", {
                  label: "Body Font Color",
                  selectedColor: this.properties.bodyFontColor3,
                  colors: [
                    { color: "#c7c7c7" , label: "Silver"},
                    { color: "#545454" , label: "Emperor"},
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                })
              ]
            }
          ]
        },
        {
          //////// ******* THIS IS THE CONFIGURATION OF PROPERTY PANE PAGE 4 *******
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("section4", {
                  label: "Section 4",
                  onGetErrorMessage: this.textBoxErrorMethod
                }),
                PropertyFieldSwatchColorPicker("rowBackgroundColor4", {
                  label: "Row Background Color",
                  selectedColor: this.properties.rowBackgroundColor4,
                  colors: [
                    { color: "#0586ce", label: "Orient" },
                    { color: "#004a7c", label: "Denim" },
                    { color: "#00273d", label: "Blue-Charcoal" },
                    { color: "#e4f6fd", label: "Foam" },
                    { color: "#00adef", label: "Cerulean" },
                    { color: "#2b566b", label: "Casal" },
                    { color: "#ffd097", label: "Peach-orange" },
                    { color: "#f38a00", label: "Tangerine" },
                    { color: "#834a07", label: "Rusty-nail" },
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyFieldSwatchColorPicker("rowFontColor4", {
                  label: "Row Font Color",
                  selectedColor: this.properties.rowBackgroundColor4,
                  colors: [
                    { color: "#c7c7c7" , label: "Silver"},
                    { color: "#545454" , label: "Emperor"},
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyPaneTextField("body4", {
                  label: "Body 4",
                  multiline: true,
                  rows: 10
                }),
                PropertyFieldSwatchColorPicker("bodyBackgroundColor4", {
                  label: "Body Background Color",
                  selectedColor: this.properties.bodyBackgroundColor4,
                  colors: [
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#0586ce", label: "Orient" },
                    { color: "#004a7c", label: "Denim" },
                    { color: "#00273d", label: "Blue-Charcoal" },
                    { color: "#e4f6fd", label: "Foam" },
                    { color: "#00adef", label: "Cerulean" },
                    { color: "#2b566b", label: "Casal" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyFieldSwatchColorPicker("bodyFontColor4", {
                  label: "Body Font Color",
                  selectedColor: this.properties.bodyFontColor4,
                  colors: [
                    { color: "#c7c7c7" , label: "Silver"},
                    { color: "#545454" , label: "Emperor"},
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                })
              ]
            }
          ]
        },
        {
          //////// ******* THIS IS THE CONFIGURATION OF PROPERTY PANE PAGE 5 *******
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("section5", {
                  label: "Section 5",
                  onGetErrorMessage: this.textBoxErrorMethod
                }),
                PropertyFieldSwatchColorPicker("rowBackgroundColor5", {
                  label: "Row Background Color",
                  selectedColor: this.properties.rowBackgroundColor5,
                  colors: [
                    { color: "#0586ce", label: "Orient" },
                    { color: "#004a7c", label: "Denim" },
                    { color: "#00273d", label: "Blue-Charcoal" },
                    { color: "#e4f6fd", label: "Foam" },
                    { color: "#00adef", label: "Cerulean" },
                    { color: "#2b566b", label: "Casal" },
                    { color: "#ffd097", label: "Peach-orange" },
                    { color: "#f38a00", label: "Tangerine" },
                    { color: "#834a07", label: "Rusty-nail" },
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyFieldSwatchColorPicker("rowFontColor5", {
                  label: "Row Font Color",
                  selectedColor: this.properties.rowBackgroundColor5,
                  colors: [
                    { color: "#c7c7c7" , label: "Silver"},
                    { color: "#545454" , label: "Emperor"},
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyPaneTextField("body5", {
                  label: "Body 5",
                  multiline: true,
                  rows: 10
                }),
                PropertyFieldSwatchColorPicker("bodyBackgroundColor5", {
                  label: "Body Background Color",
                  selectedColor: this.properties.bodyBackgroundColor5,
                  colors: [
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#0586ce", label: "Orient" },
                    { color: "#004a7c", label: "Denim" },
                    { color: "#00273d", label: "Blue-Charcoal" },
                    { color: "#e4f6fd", label: "Foam" },
                    { color: "#00adef", label: "Cerulean" },
                    { color: "#2b566b", label: "Casal" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                }),
                PropertyFieldSwatchColorPicker("bodyFontColor5", {
                  label: "Body Font Color",
                  selectedColor: this.properties.bodyFontColor5,
                  colors: [
                    { color: "#c7c7c7" , label: "Silver"},
                    { color: "#545454" , label: "Emperor"},
                    { color: "black", label: "Black" },
                    { color: "#ffffff", label: "White" },
                    { color: "#d8dce5", label: "Ghost" },
                    { color: "#9fa2aa", label: "Santas-Grey" },
                    { color: "#3b3d3f", label: "Cape-Cod" }
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: "colorFieldId"
                })
              ]
            }
          ]
        }
        ////////////// add more pages here if needed.
      ]
    };
  }
}
