import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLeadContext } from "../contexts/useLeadContext";

const Comments = ({ leadId }) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [salesagent, setSalesAgent] = useState("");
  const { leads, agents } = useLeadContext();

  // Fetch comments
  const fetchComments = async () => {
    try {
      const res = await axios.get(
        "https://comments-seven-nu.vercel.app/comment",
      );
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [leadId]);

  const targetedComment = comments.filter((cmnt) => cmnt.lead === leadId);
  console.log("Targeted comment from comment section --", targetedComment);

  // Submit comment
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      lead: leadId,
      author: salesagent,
      commentText: commentText,
    };

    try {
      await axios.post(
        "https://comments-seven-nu.vercel.app/comment",
        newComment,
      );
      setCommentText("");
      setSalesAgent("");
      fetchComments();
      toast.success("Comment submission successfull");
    } catch (error) {
      console.log(error);
      toast.error("Comment submission failed");
    }
  };

  return (
    <>
      <div className="container bg-white p-4 rounded shadow-sm">
        <h2 className="text-secondary fs-2">Comments</h2>
        <hr />

        {/* Existing Comments */}

        {targetedComment.map((cmnt) => {
          const author = agents?.find((ag) => ag._id === cmnt.author);

          return (
            <div key={cmnt._id} className="border-bottom mb-3 pb-2">
              <p
                className="mb-1 fw-semibold p-2 rounded shadow-sm text-white"
                style={{ backgroundColor: "#004687" }}
              >
                {author ? author.name : "Unknown Agent"} -{" "}
                {new Date(cmnt.createdAt).toLocaleString()}
              </p>
              <p
                className="text-dark mt-4 p-2 rounded shadow-sm"
                style={{ backgroundColor: "#F0E68C" }}
              >
                <span className="fw-bold">Comment : </span>
                {cmnt.commentText}
              </p>
            </div>
          );
        })}

        <div className="addNewComment">
          <h3 className="fs-4">Add New Comment</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Enter your comment here..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={2} // you can adjust height
              ></textarea>
            </div>
            <div className="row g-2">
              {/* Sales Agent Filter */}
              <div className="col-12 col-lg-6">
                <select
                  className="form-select border-primary shadow-sm"
                  value={salesagent}
                  onChange={(e) => setSalesAgent(e.target.value)}
                >
                  <option value="">Sales Agent</option>
                  {agents.map((agent) => (
                    <option key={agent._id} value={agent._id}>
                      {agent.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="col-12 col-lg-6">
                <button type="submit" className="btn btn-success w-100">
                  Submit Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Comments;
