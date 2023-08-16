
import Button from '../../Components/Button'
import ModalComp from '../../Components/ModalComp'
import { useState } from 'react';
export default function HomeView (){
    const [modalShow, setModalShow] = useState(false);
    return(
        <div>
            <Button variant='primary' size='lg' name='Upload File' event={() => setModalShow(true)}></Button>
            <ModalComp
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={'Upload Medical Records'}
        formType = 'upload'
      />
        </div>
    )
}
