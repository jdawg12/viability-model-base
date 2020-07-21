import Link from 'next/link'

const questions = [
    {qNum: '1', text: 'Has the client identified all the potential stakeholders?'}
    // {qNum: '2', text: 'Have sub-use cases been played out?'},
    // {qNum: '3', text: 'Have all actors been identified?'}
]

export default function Details() {
    // return <h2>Details</h2>
    return <div>
        {questions.map(e => (
            <div>
            <Link as={`/${e.qNum}/${e.text}`} href="/[questions]/[qText]">
            {/* <Link href="/question/1"> */}
                <a>Start Viability Assessment</a>
            </Link>
            </div>
        ))}
    </div>
}