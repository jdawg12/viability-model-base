import { useRouter } from 'next/router'
import Link from 'next/link'

const questions = [
  {qNum: '1', text: 'Has the client identified all the potential stakeholders?'},
  {qNum: '2', text: 'Have sub-use cases been played out?'},
  {qNum: '3', text: 'Is this a data driven problem?'},
  {qNum: '4', text: 'Have there been any successful deployments of similar AI use cases or projects?'},
  {qNum: '5', text: 'Is it free of ethical implications?'},
  {qNum: '6', text: 'Have all stakeholders been identified?'},
  {qNum: '7', text: 'Have sub-use cases been played out?'},
  {qNum: '8', text: 'Have all actors been identified?'},
  {qNum: '9', text: 'Has initial access to data been arranged , for choosing a model?'},
  {qNum: '10', text: 'Is the data (input and training) homogeneous?'},
  {qNum: '11', text: 'Is the data stored in a central warehouse or datalake?'},
  {qNum: '12', text: 'Is open source or anonymized data available (at least for training)?'},
  {qNum: '13', text: 'Is the training data ready for use? (Properly labeled and formatted)'},
  {qNum: '14', text: 'Is there a complex relationship from inputs to outputs?'},

]



export default function question() {
    const router = useRouter();
    console.log(router.query);
    var newQnum = ((router.query.questions)*1)
    const newQtext = questions.map(_questions => _questions.text)[newQnum];
    var newQtext2 = JSON.stringify(newQtext)
    console.log(newQtext2)

return <div>
    <h2>Question {router.query.questions}: {router.query.qText}</h2>
    <form>
        <label>
          Confidence (0-10 Scale):
          <select defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        {/* <button type="submit"> Next</button> */}
      </form>

    <form>
        <label>
          Confidence (Lickert Scale):
          <select defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        {/* <input type="submit" value="Next" /> */}
      </form>

      <form>
        <label>
          Confidence (Y/N):
          <select defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        {/* <input type="submit" value="Next" /> */}
      </form>
      {/* <Link as={`/${e.qNum}/${e.text}`} href="/[questions]/[qText]"> */}

      {/* <Link as={`/1/asdasd`} href="/[questions]/[qText]"> */}
      <Link as={`/${newQnum+1}/${newQtext2}`} href='/[questions]/[qText]'>
      <button type='submit'> Next</button>
      </Link>

    </div>
} 