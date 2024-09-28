import React, { useState } from "react";
import { RotateCcw, Filter, MoreVertical, Trash } from "lucide-react";
import "./index.css"; // Assuming this is your updated CSS file

const AddQuiz = () => {
  const [questions, setQuestions] = useState([
    { id: 1, title: "Which of these is a CSS framework?", answer: "Bootstrap" },
    { id: 2, title: "What is JavaScript?", answer: "Programming Language" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    options: ["", "", "", ""],
    answer: "",
  });

  const handleAddQuestion = () => {
    const newQuestionData = {
      id: questions.length + 1,
      ...newQuestion,
    };
    setQuestions([...questions, newQuestionData]);
    setNewQuestion({
      title: "",
      options: ["", "", "", ""],
      answer: "",
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleDeleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const filteredQuestions = questions
    .filter((q) => q.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "titleAsc") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "titleDesc") {
        return b.title.localeCompare(a.title);
      } else if (sortOption === "idAsc") {
        return a.id - b.id;
      } else if (sortOption === "idDesc") {
        return b.id - a.id;
      }
      return 0;
    });

  return (
    <div className="add-quiz-container">
      {/* Left Side: List of questions with search */}
      <div className="left-panel">
        <div className="card">
          <div className="card-header">
            <h2>SEARCH QUESTIONS</h2>
            <RotateCcw size={18} />
          </div>
          <div className="card-content">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={handleSearch}
              className="input-field"
            />
            <div className="buttons">
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="outlined-btn"
              >
                <option value="">Sort by</option>
                <option value="titleAsc">Title (A-Z)</option>
                <option value="titleDesc">Title (Z-A)</option>
                <option value="idAsc">ID (Ascending)</option>
                <option value="idDesc">ID (Descending)</option>
              </select>
            </div>
            <ul className="question-list">
              {filteredQuestions.map((question) => (
                <li key={question.id} className="question-item">
                  {question.title}
                  <button
                    onClick={() => handleDeleteQuestion(question.id)}
                    className="delete-btn"
                  >
                    <Trash size={18} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <div className="card">
          <div className="card-header">
            <h2>V1 (DRAFT)</h2>
            <div className="actions">
              <button className="icon-btn">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
          <div className="card-content">
            <div className="form-group">
              <label>Question Title</label>
              <input
                type="text"
                value={newQuestion.title}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, title: e.target.value })
                }
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Options</label>
              {newQuestion.options.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      options: newQuestion.options.map((opt, idx) =>
                        idx === index ? e.target.value : opt
                      ),
                    })
                  }
                  className="input-field"
                />
              ))}
            </div>

            <div className="form-group">
              <label>Answer</label>
              <input
                type="text"
                value={newQuestion.answer}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, answer: e.target.value })
                }
                className="input-field"
              />
            </div>

            <button onClick={handleAddQuestion} className="primary-btn">
              Add Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
