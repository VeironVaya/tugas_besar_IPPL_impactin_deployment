import api from "./api";

// CREATE EVENT
export const createEventAPI = async (payload) => {
  const res = await api.post("/user/events/", payload);
  return res.data;
};

// GET ALL EVENTS
export const getAllEventsAPI = async () => {
  const res = await api.get("/user/events/");
  return res.data;
};

// GET EVENT DETAIL
export const getEventDetailAPI = async (eventId) => {
  const res = await api.get(`/user/events/${eventId}`);
  return res.data;
};

// GET EVENTS FOR CAROUSEL
export const getEventsCarouselAPI = async () => {
  const res = await api.get("/user/events/carousel");
  return res.data;
};

// GET EVENTS WITH PARAMS (search, filter, etc)
export const getEventsAPI = async (params = {}) => {
  const res = await api.get("/user/events", { params });
  return res.data;
};

// REPORT EVENT
export const reportEventAPI = async (eventId, description) => {
  const res = await api.post(`/user/events/report/${eventId}`, {
    description,
  });
  return res.data;
};

// JOIN EVENT
export const joinEventAPI = async (eventId) => {
  const res = await api.post(`/user/events/join/${eventId}`);
  return res.data;
};
