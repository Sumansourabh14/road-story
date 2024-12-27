import { roadIncidents } from "../content/roadSafetyTerms";

export const getIncidentType = (value) => {
  const incident = roadIncidents.find((type) => type.value === value);
  return incident ? incident.title : null;
};
