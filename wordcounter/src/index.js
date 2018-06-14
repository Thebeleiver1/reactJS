function countWords (text) {
    
}


function Editor () {
    return (
        <div>
            <label> Enter your text </label>
            <textarea> </textarea>
        </div>
    )
}

function Counter ({count}) {
    return (
        <p>Word Count: {count} </p>
    )
}

function ProgressBar ({ completion }){
    return (
        <div>
            <progress Value = {completion}/>
        </div>
    )
}

function WordCounter ({ text, targetWordCount }) {
    const wordCount = 5
    const progress = wordCount / targetWordCount
    return (
        <form>
            <Editor />
            <Counter count = {wordCount}/>
            <ProgressBar completion = {progress}/>
        </form>
    )
}

ReactDOM.render(
    <WordCounter text = "The rain in the spain fails" targetWordCount = {10}/>,
    document.getElementById('app')
)