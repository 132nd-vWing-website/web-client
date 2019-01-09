import React from "react";

/** Add all components needed here */
import EditNotams from "./modules/EditNotams";

/**
 * @description This is a schema for adding additional component so the Admin dashboard
 * @param {string} This is an identifier for the function
 * @param {array} An array containing all roles that will have access to this component
 * @param {component} The component to be shown if the required roles are there
 */
export default [
  {
    id: "notam",
    label: "NOTAMs",
    icon: "fas fa-file-alt",
    route: "edit-notams",
    validRoles: ["command", "132nd"],
    component: <EditNotams title="Admin: NOTAMs" id="notam-panel" />
  },
  {
    id: "foo",
    label: "FOO",
    icon: "fas fa-bomb",
    route: "admin-foo",
    validRoles: ["foo"],
    component: <EditNotams title="Admin: Something Else" id="foo-panel" />
  }
];
