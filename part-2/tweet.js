const Tweet = (props) => {
    return (
        <div class="tweet-container">
            <div class="meta-container">
                <h4 class="username">{props.username}</h4>
                <h5 class="name">{props.name}</h5>
                <p class="date">{props.date}</p>
            </div>
            <p class="message">{props.message}</p>
        </div>
    )
}