import React, { useEffect, useState } from "react";
import TimedEventContainer from "../components/TimedEventContainer";
import { getDay, getMonth, getWeekday } from "../helper";

const Daily = ({ Today }) => {
  const [currDay, setCurrDay] = useState(Today);
  const [weekDay, setWeekDay] = useState(getDay(getWeekday(currDay)));
  const [isLoading, setIsLoading] = useState(false);
  const nDay = () => {
    setIsLoading(true);
    setWeekDay(getDay(getWeekday(currDay.add(1, "day"))));
    setCurrDay(currDay.add(1, "day"));
    setIsLoading(false);
  };
  const pDay = () => {
    setIsLoading(true);
    setWeekDay(getDay(getWeekday(currDay.subtract(1, "day"))));
    setCurrDay(currDay.subtract(1, "day"));
    setIsLoading(false);
  };
  return (
    <>
      <button onClick={pDay} disabled={isLoading}>
        {" < "}
      </button>
      <label style={{ marginRight: "2%", marginLeft: "10%" }}>
        {getMonth(currDay.month())}
      </label>
      <label style={{ marginRight: "10%" }}>{currDay.year()}</label>
      <button onClick={nDay} disabled={isLoading}>
        {" > "}
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "0.5vw",
          paddingRight: "0.5vw",
          marginLeft: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>GMT</label>
            <br />
            <label>+5:30</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            {weekDay}
            <br />
            {currDay.date()}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>12:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "12:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"12:00 am"}
              endTime={"1:00 am"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>1:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "1:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"1:00 am"}
              endTime={"2:00 am"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>2:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "2:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"2:00 am"}
              endTime={"3:00 am"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>3:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "3:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"3:00 am"}
              endTime={"4:00 am"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>4:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "4:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"4:00 am"}
              endTime={"5:00 am"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>5:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "5:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"5:00 am"}
              endTime={"6:00 am"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>6:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "6:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"6:00 am"}
              endTime={"7:00 am"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>7:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "7:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"7:00 am"}
              endTime={"8:00 am"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>8:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "8:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"8:00 am"}
              endTime={"9:00 am"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>9:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "9:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"9:00 am"}
              endTime={"10:00 am"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>10:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "10:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"10:00 am"}
              endTime={"11:00 am"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>11:00</label>
            <br />
            <label>am</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "11:00 am"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"11:00 am"}
              endTime={"12:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>12:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "12:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"12:00 pm"}
              endTime={"1:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>1:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "1:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"1:00 pm"}
              endTime={"2:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>2:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "2:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"2:00 pm"}
              endTime={"3:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>3:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "3:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"3:00 pm"}
              endTime={"4:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>4:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "4:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"4:00 pm"}
              endTime={"5:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>5:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "5:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"5:00 pm"}
              endTime={"6:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>6:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "6:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"6:00 pm"}
              endTime={"7:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>7:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "7:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"7:00 pm"}
              endTime={"8:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>8:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "8:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"8:00 pm"}
              endTime={"9:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>9:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "9:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"9:00 pm"}
              endTime={"10:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>10:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "10:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"10:00 pm"}
              endTime={"11:00 pm"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>11:00</label>
            <br />
            <label>pm</label>
          </div>
          <div
            style={{
              marginLeft: "2%",
              fontSize: "xx-large",
              outline: "solid 1px black",
              width: "95%",
            }}
          >
            <TimedEventContainer
              key={
                `${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                  "DD"
                )}` + "11:00 pm"
              }
              date={`${currDay.year()}-${currDay.format("MM")}-${currDay.format(
                "DD"
              )}`}
              startTime={"11:00 pm"}
              endTime={"12:00 pm"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Daily;
