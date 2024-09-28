import { useEffect, useState } from "react";
import "./index.css";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [quizCategories, setQuizCategories] = useState([]);

  // Fetch User Details from Token (No jwt-decode)
  useEffect(() => {
    const fetchUserDetails = () => {
      try {
        const jwtToken = localStorage.getItem("jwtToken");
        if (jwtToken) {
          // Custom JWT decoding logic goes here
          // Example: setFirstName(decodedToken.first_name);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };

    fetchUserDetails();
  }, []);

  // Fetch Quiz Categories (Mock Example)
  useEffect(() => {
    const fetchQuizCategories = async () => {
      try {
        const quizCategories = [
          {
            id: 1,
            name: "General Knowledge",
            description: "Test your knowledge in various fields.",
          },
          {
            id: 2,
            name: "Science",
            description: "Challenge yourself with scientific questions.",
          },
          { id: 3, name: "Math", description: "Brush up on your math skills." },
          {
            id: 4,
            name: "History",
            description: "Explore historical facts and trivia.",
          },
        ];
        setQuizCategories(quizCategories);
      } catch (error) {
        console.error("Error fetching quiz categories:", error);
      }
    };

    fetchQuizCategories();
  }, []);

  const handleStartQuiz = (categoryId) => {
    console.log(`Starting quiz for category ID: ${categoryId}`);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome {firstName ? firstName : "Quiz Master"}!</h1>
          <p>
            Discover quizzes and challenge yourself. Select a category to begin.
          </p>
        </div>
      </section>

      {/* Quiz Categories */}
      <div className="categories-section">
        <h2 className="section-title">Choose Your Quiz</h2>
        <div className="quiz-categories">
          {quizCategories.length > 0 ? (
            quizCategories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <button onClick={() => handleStartQuiz(category.id)}>
                    Start Quiz
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading quiz categories...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
