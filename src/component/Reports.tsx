"use client";
import { PowerBIEmbed } from "powerbi-client-react";
import React, { useEffect, useState } from "react";

export const Reports = () => {
  const [component, setComponent] = useState<JSX.Element>();
//   useEffect(() => {
//     const loadModule = async () => {
//       const { PowerBIEmbed } = await import("powerbi-client-react");

//       const { models } = await import("powerbi-client");
//       setComponent(
//         <PowerBIEmbed
//           embedConfig={{
//             type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
//             // id: "ce3ce840-5293-470a-a866-32e14a756464",
//             embedUrl:
//               "https://app.powerbi.com/reportEmbed?reportId=ce3ce840-5293-470a-a866-32e14a756464&autoAuth=true&ctid=1d7aa2e9-3a1a-4af4-9873-31cc6674969e",
//             // accessToken: undefined,
//             // permissions: models.Permissions.All,
//             tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
//             // settings: {
//             // 	panes: {
//             // 		filters: {
//             // 			expanded: false,
//             // 			visible: false
//             // 		}
//             // 	},
//             // 	background: models.BackgroundType.Transparent,
//             // }
//           }}

//           // eventHandlers = {
//           // 	new Map([
//           // 		['loaded', function () {console.log('Report loaded');}],
//           // 		['rendered', function () {console.log('Report rendered');}],
//           // 		['error', function (event) {console.log(event.detail);}],
//           // 		['visualClicked', () => console.log('visual clicked')],
//           // 		['pageChanged', (event) => console.log(event)],
//           // 	])
//           // }

//           // cssClassName = { "reportClass" }

//           // getEmbeddedComponent = { (embeddedReport) => {
//           // 	this.report = embeddedReport as Report;
//           // }}
//         />
//       );
//     };
//     loadModule();
//   }, []);
  return (
    <>
      {component}
      <div className="w-screen h-screen">
        <iframe
          title="Patient Data"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/reportEmbed?reportId=ce3ce840-5293-470a-a866-32e14a756464&autoAuth=true&ctid=1d7aa2e9-3a1a-4af4-9873-31cc6674969e"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
};
