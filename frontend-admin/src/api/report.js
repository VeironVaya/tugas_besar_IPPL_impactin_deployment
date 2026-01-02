import api from "./api";

// =======================
// GET REPORTS
// =======================

// Get reports by status: pending | resolved
export const getReports = (status) => {
  return api.get(`/admin/events/report?status=${status}`);
};

// =======================
// GET REPORT DETAIL
// =======================

// Get report detail by ID
export const getReportDetail = (reportId) => {
  return api.get(`/admin/events/report/${reportId}`);
};

// =======================
// RESOLVE REPORT
// =======================

// Resolve report
export const resolveReport = (reportId, adminResponse) => {
  return api.patch(`/admin/events/report/resolve/${reportId}`, {
    admin_response: adminResponse,
  });
};
