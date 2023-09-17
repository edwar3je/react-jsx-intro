const App = () => (
    <div class="app-container">
        <Person name="James" age={27} hobbies={["videogames", "anime", "violin"]} />
        <Person name="Alejandro" age={17} hobbies={["videogames", "basketball", "art"]} />
        <Person name="Susan" age={19} hobbies={["reading", "art", "rollerskating"]} />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));