import  usePersist from '../usePersist';
import Memo from './Memo';
import AddForm from './AddForm';
import findForm from './FindForm';
import DelForm from './DelForm';


function MemoPage(){
    const [mode, setMode] =usePersist('mode', 'default');

    return (
        <div>
            <h5 className='my-3'>mode:{mode}</h5>
            <div className='alert alert-primary pb-0'>
                <AddForm />
                <FindForm />
                <DelForm />
            </div>
            <dev>
                <Memo />
            </dev>
        </div>
    )
}

export default MemoPage;