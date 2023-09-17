const App = () => (
    <div>
       <FirstComponent />
       <NamedComponent name="james" /> 
    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));