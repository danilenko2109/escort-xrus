const submitBookingRequest = (req, res) => {
    const { profileCode, duration } = req.body || {};
    if (!profileCode || !["1h", "2h", "3h"].includes(duration)) {
      return res.status(400).json({ detail: "profileCode and duration (1h|2h|3h) are required" });
    }
  
    return res.status(201).json({
      message: "Request accepted",
      phone: "+7 (900) 000-00-00",
    });
  };
  
  module.exports = { submitBookingRequest };