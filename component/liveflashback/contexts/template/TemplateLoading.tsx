import React from "react";
import { useTemplate } from "./TemplateProvider";

const TemplateLoading = () => {
  const { templateLoading } = useTemplate();
  return templateLoading && <div>TemplateLoading</div>;
};

export default TemplateLoading;
