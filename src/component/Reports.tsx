import React from "react";
export const Reports = () => {
  return (
    <div className="w-screen h-screen bg-[#2B2B30] mt-4">
      <iframe
        title="Patient Data"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/reportEmbed?reportId=ce3ce840-5293-470a-a866-32e14a756464&autoAuth=true&ctid=1d7aa2e9-3a1a-4af4-9873-31cc6674969e"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};
