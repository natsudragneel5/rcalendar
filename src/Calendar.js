import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import Daily from "./Daily";
import logo from "./logo.svg";
import Monthly from "./Monthly";
import Weekly from "./Weekly";
import { useModalState } from "./custom-hooks";
import { Form, Modal, Button, InputGroup } from "react-bootstrap";
import { useId } from "react-id-generator";
import { useEvent } from "./context/event.context";
const Modal_Style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "58px",
  zIndex: 1000,
};
const Overlay_Style = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};
const Calendar = () => {
  const { isOpen, open, close } = useModalState();
  const Today = dayjs();
  const newId = useId();
  const { eventDispatch } = useEvent();
  const [activeType, setActiveType] = useState("Monthly");
  const switchToMonthly = () => {
    if (activeType !== "Monthly") {
      setActiveType("Monthly");
    }
  };
  const switchToWeekly = () => {
    if (activeType !== "Weekly") {
      setActiveType("Weekly");
    }
  };
  const switchToDaily = () => {
    if (activeType !== "Daily") {
      setActiveType("Daily");
    }
  };
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventImage, setEventImage] = useState("");
  const createEvent = () => {
    eventDispatch({
      type: "AddEvent",
      payload: {
        id: newId,
        name: eventName,
        Date: eventDate,
        startTime: eventTime.startTime,
        endTime: eventTime.endTime,
        image: eventImage,
      },
    });
  };
  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };
  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
  };
  const handleEventTimeChange = (e) => {
    let d = e.target.selectedOptions[0].textContent;
    d = d.split("-");
    setEventTime({ startTime: d[0], endTime: d[1] });
  };
  const handleEventImageChange = (e) => {
    setEventImage(e.target.value);
  };
  const handleSubmit = () => {
    createEvent();
    setEventName("");
    setEventDate("");
    setEventTime("");
    setEventImage("");
    close();
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <img
          alt="logo"
          src={logo}
          width={60}
          height={60}
          style={{ float: "left" }}
        />
        <label style={{ float: "left", fontSize: "40px" }}>
          <b>R</b>Calendar
        </label>
        <Button style={{ marginTop: "2vh" }} onClick={open}>
          Add Event
        </Button>
        <select
          style={{ float: "right", marginTop: "10px", marginRight: "10px" }}
        >
          <option onClick={switchToMonthly}>month</option>
          <option onClick={switchToWeekly}>week</option>
          <option onClick={switchToDaily}>day</option>
        </select>
      </div>
      <div className="CalendarGrid">
        {activeType === "Monthly" && <Monthly Today={Today} />}
        {activeType === "Weekly" && <Weekly Today={Today} />}
        {activeType === "Daily" && <Daily Today={Today} />}
      </div>
      {isOpen && (
        <div style={Overlay_Style}>
          <Modal style={Modal_Style} show={isOpen} onHide={close}>
            <Modal.Header>
              <Modal.Title>Add Event</Modal.Title>
              <br />
            </Modal.Header>
            <Modal.Body>
              <hr />
              <Form id="AddEventForm">
                <br />
                <Form.Group className="mb-3" controlId="formEventName">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Event Name"
                    value={eventName}
                    onChange={handleEventNameChange}
                  />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formEventDate">
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={eventDate}
                    onChange={handleEventDateChange}
                  />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formEventTime">
                  <Form.Label>Event Time</Form.Label>
                  <Form.Select
                    aria-label="Select Event Time"
                    onChange={(event) => {
                      handleEventTimeChange(event);
                    }}
                  >
                    <option>Select Event Time</option>
                    <option>12:00 am-1:00 am</option>
                    <option>1:00 am-2:00 am</option>
                    <option>2:00 am-3:00 am</option>
                    <option>3:00 am-4:00 am</option>
                    <option>4:00 am-5:00 am</option>
                    <option>5:00 am-6:00 am</option>
                    <option>6:00 am-7:00 am</option>
                    <option>7:00 am-8:00 am</option>
                    <option>8:00 am-9:00 am</option>
                    <option>9:00 am-10:00 am</option>
                    <option>11:00 am-12:00 pm</option>
                    <option>12:00 pm-1:00 pm</option>
                    <option>1:00 pm-2:00 pm</option>
                    <option>2:00 pm-3:00 pm</option>
                    <option>3:00 pm-4:00 pm</option>
                    <option>4:00 pm-5:00 pm</option>
                    <option>5:00 pm-6:00 pm</option>
                    <option>6:00 pm-7:00 pm</option>
                    <option>7:00 pm-8:00 pm</option>
                    <option>8:00 pm-9:00 pm</option>
                    <option>9:00 pm-10:00 pm</option>
                    <option>11:00 pm-12:00 am</option>
                  </Form.Select>
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formEventImage">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="https://www.image.com"
                    value={eventImage}
                    onChange={handleEventImageChange}
                  />
                </Form.Group>
                <br />
                <hr />
                <Form.Group>
                  <Button onClick={close}>Close</Button>

                  <Button onClick={handleSubmit}>Submit</Button>
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Calendar;
