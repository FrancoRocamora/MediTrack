import axios from 'axios'
import fileDownload from 'js-file-download'
import { useEffect } from 'react'
import { getAllFiles } from '../../Redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import CardComp from '../../Components/CardComp'
import styles from './MedicalRecords.module.css'
export default function MedicalRecords() {
const dispatch = useDispatch()
useEffect(() => {
    const data = axios({
        url: 'http://localhost:3001/files/myFiles',
        method: 'GET',
        params: {email: localStorage.getItem('email')}
    }).then(response => dispatch(getAllFiles(response.data)))
}, [])
const myfiles = useSelector(initialState => initialState.allFiles)

   /* const download = (event) => {
        event.preventDefault()
        axios({
            url: 'http://localhost:3001/files/download',
            method: 'GET',
            responseType: 'blob',
            params: {email: localStorage.getItem('email'), fileName: 'unpdf'} //fileName debe recibir el nombre del archivo como esta en la bdd
        }).then(response  => {
            fileDownload(response.data, `nombre.${response.data.type.split('/').pop()}`) 
        })
    }*/
    return(
    <div className={styles.container}>
    {myfiles?.map((file)=>{return (
    <CardComp 
    title={file.settedFileName + '.' + file.extension}
    subtitle={file.doctorName}
    text={file.date}
    />)})}
    </div>)
}