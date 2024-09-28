// QuizList.js (Admin Quiz List with Side-by-Side Edit and Delete Buttons)
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing icons from react-icons
import "./index.css";

const QuizList = () => {
  const quizzes = [
    {
      id: 1,
      title: "HTML Basics",
      description: "Test your knowledge of basic HTML concepts.",
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      description:
        "Assess your understanding of core CSS properties and techniques.",
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      description: "A quiz covering fundamental JavaScript concepts.",
    },
    {
      id: 4,
      title: "React Basics",
      description:
        "Check your understanding of React component structure and state management.",
    },
  ];

  const navigate = useNavigate();

  const handleAddQuiz = () => {
    navigate("/add-quiz"); // Navigates to the Add Quiz component
  };

  const handleEditQuiz = (id) => {
    navigate(`/edit-quiz/${id}`); // Navigates to the Edit Quiz component for the specific quiz
  };

  const handleDeleteQuiz = (id) => {
    // Logic to delete quiz
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      alert(`Quiz with ID ${id} deleted!`); // Replace this with actual delete logic
    }
  };

  return (
    <div className="quiz-list-container">
      <header className="quiz-list-header">
        <h1>Available Quizzes</h1>
      </header>
      <button className="add-quiz-btn" onClick={handleAddQuiz}>
        + Add New Quiz
      </button>
      <div className="quiz-list-content">
        {quizzes.length === 0 ? (
          <p>No quizzes available.</p>
        ) : (
          <div className="quiz-grid">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="quiz-item">
                <div className="quiz-content">
                  <h3 className="quiz-title">{quiz.title}</h3>
                  <p className="quiz-description">{quiz.description}</p>
                </div>
                <div className="quiz-actions">
                  <button
                    className="edit-quiz-btn"
                    onClick={() => handleEditQuiz(quiz.id)}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="delete-quiz-btn"
                    onClick={() => handleDeleteQuiz(quiz.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizList;
