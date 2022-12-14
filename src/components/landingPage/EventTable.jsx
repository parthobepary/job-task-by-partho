import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import "../../assets/css/event-schedule.css";

const EventTable = ({ navigation }) => {
  const [td, setTd] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("json/td1.json")
      .then((res) => res.json())
      .then((data) => {
        setTd(data);
      });
  }, []);
  useEffect(() => {
    fetch("json/schedule.json")
      .then((res) => res.json())
      .then((data) => {
        setSchedule(data);
      });
  }, []);

  const detailsShcedule = (item) => {
    console.log(item);
    navigate(`/schedule/${item}`);
  }

  return (
    <div className="mt-10 scroll">
      <div className="box-container">
        <table>
          <tr>
            <th></th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
          <tr>
            <td>09.00</td>
            {schedule.map((t, i) => {
              return (
                <td key={i}>
                  <Draggable>
                    <div className="box-1">
                      <p>{t.time}</p>
                      <div>
                        <p>{t.name}</p>
                        <p>{t.distance}</p>
                      </div>
                      <button className="btn" onClick={()=>detailsShcedule(JSON.stringify(t))}>Detail</button>
                    </div>
                  </Draggable>
                </td>
              );
            })}
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10.00</td>
            <td></td>
            <td></td>
            <td></td>
            {schedule.map((t, i) => {
              return (
                <td key={i}>
                  <Draggable>
                    <div className="box-2">
                      <p>{t.time}</p>
                      <div>
                        <p>{t.name}</p>
                        <p>{t.distance}</p>
                      </div>
                      <button className="btn" onClick={()=>detailsShcedule(JSON.stringify(t))}>Detail</button>
                    </div>
                  </Draggable>
                </td>
              );
            })}
          </tr>
          <tr>
            <td>17.00</td>
            <td></td>
            {schedule.map((t, i) => {
              return (
                <td key={i}>
                  <Draggable>
                    <div className="box-3">
                      <p>{t.time}</p>
                      <div>
                        <p>{t.name}</p>
                        <p>{t.distance}</p>
                      </div>
                      <button className="btn" onClick={()=>detailsShcedule(JSON.stringify(t))}>Detail</button>
                    </div>
                  </Draggable>
                </td>
              );
            })}
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default EventTable;
