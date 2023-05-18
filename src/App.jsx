import './App.css'

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

const Poem = () => (
    <article>
        {poem.lines.map((line, index) => (
                <>
                    {index > 0 && <hr/>}
                    <p key={index}>
                        {line}
                    </p>
                </>
            )
        )}
    </article>
)

export default Poem
