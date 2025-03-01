import React, { useEffect } from 'react';

const FormComponent = () => {
  useEffect(() => {
    // Create script for form options
    const optionsScript = document.createElement('script');
    optionsScript.innerHTML = `
      window.lmpost = window.lmpost || {};
      window.lmpost.options = {
        "campaignid": 291244,
        "declinedURL": "https://www.paydeayloan.com",
        "sourceSubId": "",
        "v1": "",
        "v2": "",
        "v3": "",
        "v4": "",
        "loanAmounts": [],
        "theme": "theme5"
      };
    `;
    document.body.appendChild(optionsScript);

    // Create and load the form loader script
    const formLoaderScript = document.createElement('script');
    formLoaderScript.src = "https://formrequests.com/installment36/1q_ac/form-loader.js";
    formLoaderScript.async = true;
    document.body.appendChild(formLoaderScript);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      document.body.removeChild(optionsScript);
      if (document.body.contains(formLoaderScript)) {
        document.body.removeChild(formLoaderScript);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="form-container">
      <div id="jsf-form"></div>
    </div>
  );
};

export default FormComponent;