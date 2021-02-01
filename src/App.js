import React from "react";
import { SmartBlock, Extensions } from "smartblock";
import "./styles.css";

const html = `
  <h2>demo</h2>
  <p>text text</p>
  <ul>
    <li>list1</li>
    <li>list2</li>
  </ul>
  <blockquote>blockquote</blockquote>
  <table>
    <tr>
      <th>test</th>
      <td>test</td>
    </tr>
    <tr>
      <th>test</th>
      <td>test</td>
    </tr>
  </table>
`;

export default function App() {
  return (
    <div className="App">
      <SmartBlock
        showTitle
        titleText="SmartBlock Demo"
        html={html}
        extensions={Extensions}
      />
    </div>
  );
}
