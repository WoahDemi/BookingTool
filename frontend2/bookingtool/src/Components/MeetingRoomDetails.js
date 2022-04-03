import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function MeetingRoomDetails() {
  let history = useHistory();
  const { id } = useParams();
  const bookmark = useSelector((state) => state.bookmarks[id])

  const delete = async () => {
    try {
      await axios.delete(`${API}/bookmarks/${id}`);
    } catch (err) {
      console.log(err)
    }
  }

  // useEffect(() => {
  //   const getTheBookmark = async () => {
  //     try {
  //       const result = await axios.get(`${API}/bookmarks/${id}`);
  //       setBookmark(result.data.payload);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getTheBookmark();
  // }, [id]);
  
//   const handleDelete = async () => {
//     await delete();
//     history.push('/bookmarks');
//   };

  return (
    <article>
      <a href={bookmark.url}>{bookmark.name}</a>
      <p>{bookmark.url}</p>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
}

export default withRouter(MeetingRoomDetails);
