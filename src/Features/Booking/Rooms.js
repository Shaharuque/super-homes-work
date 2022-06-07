import React from "react";
import { baseClient } from "../../Misc/client";

//import { useContext } from "react";
//import { BedSelectedContext } from "../../Contexts/BedSelect";

const Rooms = ({ room, btnClicked }) => {
  //console.log(room);
  //console.log(room.id)

  //based on room.id API CALL
  const [columns, setColumns] = React.useState();
  let columnId = 1;
  React.useEffect(() => {
    baseClient
      .get("bed_column/" + room.id)
      .then((response) => {
        setColumns(response.data);
        //console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(columns);

  //console.log(btnClicked)

  //   const {setClicked}=useContext(BedSelectedContext)
  //   console.log(setClicked)

  //   const btnClicked=(bedName)=>{
  //       console.log('Btn clicked & the selected bed name:', bedName)
  //   }
  //let col=3
  return (
    <div
      style={{ border: "1px solid white", padding: "5px", borderRadius: "5px" }}
      className="flexed"
    >
      <div className="room-name">
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {room.room_name}
        </p>
        <p>{room.room_type}</p>
      </div>

      {/* most Important part bed styling*/}
      {columns?.map((column) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${column.length},1fr)`,
            border: "1px solid white",
            borderRadius: "5px",
            marginLeft: "5px",
          }}
        >
          {column.beds.map((bed) => (
            <div>
              <button
                className="bed-style"
                onClick={() => btnClicked(bed.bed_name)}
              >
                {bed.bed_name}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Rooms;
