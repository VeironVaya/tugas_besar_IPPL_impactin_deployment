import api from "./api";

// =======================
// GET LIST EVENTS
// =======================

// Get all pending events
export const getPendingEvents = () => {
  return api.get("/admin/events/?status=pending");
};

// Get all approved events
export const getApprovedEvents = () => {
  return api.get("/admin/events/?status=approved");
};

// Get all declined events
export const getDeclinedEvents = () => {
  return api.get("/admin/events/?status=declined");
};

// =======================
// GET EVENT DETAIL
// =======================

// Get detail of a specific pending event
export const getEventApprovalDetail = (event_id) => {
  return api.get(`/admin/events/${event_id}`);
};

// Get detail of an approved event
export const getEventApprovedDetail = (event_id) => {
  return api.get(`/admin/events/${event_id}`);
};

// Get detail of a declined event
export const getEventDeclinedDetail = (event_id) => {
  return api.get(`/admin/events/${event_id}`);
};

// =======================
// UPDATE EVENT STATUS
// =======================

// Patch/update event status (accept/reject)
export const updateEventStatus = (event_id, action) => {
  return api.patch(`/admin/events/approval/${event_id}`, { action });
};

// Cancel an approved event
export const cancelEvent = (event_id) => {
  return api.patch(`/admin/events/cancel/${event_id}`);
};
